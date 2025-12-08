import { ApolloClient } from '@apollo/client/core';
import type { AccruPayContext } from './context.types';
import { TransactionSession } from './services/transactionSession';
import { createApolloClient, type IAccruPayParams } from './apolloClient';

export class AccruPayClient {
  public readonly apolloClient: ApolloClient;
  private readonly context: AccruPayContext;

  public readonly transactionSession: TransactionSession;

  constructor(params: IAccruPayParams) {
    this.apolloClient = createApolloClient(params);
    this.context = { apolloClient: this.apolloClient };

    this.transactionSession = new TransactionSession(this.context);
  }
}
