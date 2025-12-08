import type {
  ClientPublicTransactionSessionBaseConfigQueryVariables,
  ClientPublicTransactionSessionQueryVariables,
} from '../../gql/graphql';
import {
  CLIENT_PUBLIC_TRANSACTION_SESSION_BASE_CONFIG_QUERY,
  CLIENT_PUBLIC_TRANSACTION_SESSION_QUERY,
} from './queries';
import type { AccruPayContext } from '../../context.types';

class TransactionSession {
  private context: AccruPayContext;
  constructor(context: AccruPayContext) {
    this.context = context;
  }

  public async getBaseConfig(
    variables: ClientPublicTransactionSessionBaseConfigQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: CLIENT_PUBLIC_TRANSACTION_SESSION_BASE_CONFIG_QUERY,
      variables,
    });

    return data!.clientPublicTransactionSessionBaseConfig;
  }

  public async getSession(
    variables: ClientPublicTransactionSessionQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: CLIENT_PUBLIC_TRANSACTION_SESSION_QUERY,
      variables,
    });

    return data!.clientPublicTransactionSession;
  }
}

export { TransactionSession };
