import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client/core';
import { HttpLink } from '@apollo/client/link/http';
import { ErrorLink } from '@apollo/client/link/error';
import { CombinedGraphQLErrors, ServerError } from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';
import { withScalars } from 'apollo-link-scalars';
import { DateTimeISOResolver } from 'graphql-scalars';
import {
  GraphQLError,
  type GraphQLFormattedError,
  GraphQLScalarType,
  type IntrospectionQuery,
  Kind,
  buildClientSchema,
} from 'graphql';
import introspectionResult from './gql/schema.graphql.json' assert { type: 'json' };

const AccruPayEnvironmentUrls = {
  production: 'https://api.pay.accru.co/graphql',
  sandbox: 'https://api.qa.pay.accru.co/graphql',
};

interface IAccruPayParams {
  environment?: keyof typeof AccruPayEnvironmentUrls;
  url?: string | null;

  onAuthError?: () => void;
  onGraphQLError?: (errors: ReadonlyArray<GraphQLFormattedError>) => void;
  onNetworkError?: (error: GraphQLFormattedError) => void;
}

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const BigIntResolver = new GraphQLScalarType({
  name: 'BigInt',
  description:
    'The `BigInt` scalar type represents non-fractional signed whole numeric values.',
  serialize(outputValue: any) {
    const bigint = BigInt(outputValue.toString());
    if (outputValue.toString() !== bigint.toString())
      throw new GraphQLError(`BigInt cannot represent value: ${outputValue}`);
    return bigint;
  },
  parseValue(inputValue: any) {
    const bigint = BigInt(inputValue.toString());
    if (inputValue.toString() !== bigint.toString())
      throw new GraphQLError(`BigInt cannot represent value: ${inputValue}`);
    return bigint;
  },
  parseLiteral(ast: any) {
    if (ast.kind !== Kind.INT && ast.kind !== Kind.STRING)
      throw new GraphQLError(
        `BigInt cannot represent non-integer value: ${ast}`,
      );
    try {
      const bigint = BigInt(ast.value);
      if (ast.value !== bigint.toString()) throw new Error();
      return bigint;
    } catch {
      throw new GraphQLError(`BigInt cannot represent value: ${ast.value}`);
    }
  },
  extensions: {
    codegenScalarType: 'bigint',
    jsonSchema: {
      type: 'integer',
      format: 'int64',
    },
  },
});

const schema = buildClientSchema(
  introspectionResult as unknown as IntrospectionQuery,
);

export const createApolloClient = ({
  environment,
  url,
  onGraphQLError,
  onNetworkError,
  onAuthError,
}: IAccruPayParams) => {
  const errorLink = new ErrorLink(({ error }) => {
    if (CombinedGraphQLErrors.is(error)) {
      const errors = error.errors.map(e => ({
        ...e,
        validationErrors: (e.extensions as any)?.exception?.validationErrors,
      }));

      if (typeof onGraphQLError === 'function') {
        onGraphQLError(errors);
      }

      if (
        errors.some(e => e.extensions?.code === 'UNAUTHENTICATED') &&
        typeof onAuthError === 'function'
      ) {
        onAuthError();
      }

      return;
    }

    if (ServerError.is(error)) {
      if (typeof onNetworkError === 'function') {
        onNetworkError(error);
      }
      return;
    }

    if (error && typeof onNetworkError === 'function') {
      onNetworkError(error);
    }
  });

  const scalarLink = withScalars({
    schema,
    typesMap: {
      BigInt: BigIntResolver,
      DateTimeISO: DateTimeISOResolver,
    },
  });

  const authLink = new SetContextLink(async prevContext => {
    return {
      headers: {
        ...prevContext.headers,
      },
    };
  });

  const selectedEnvironmentUrl =
    AccruPayEnvironmentUrls[environment || 'production'];
  if (!selectedEnvironmentUrl && !url) throw new Error('Invalid environment.');

  const httpLink = new HttpLink({
    uri: url || selectedEnvironmentUrl,
  });

  return new ApolloClient({
    link: ApolloLink.from([errorLink, scalarLink, authLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
      },
      query: {
        fetchPolicy: 'no-cache',
      },
      mutate: {
        fetchPolicy: 'no-cache',
      },
    },
  });
};

export type { IAccruPayParams };
export default createApolloClient;
