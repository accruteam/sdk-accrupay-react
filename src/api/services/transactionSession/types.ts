import type { ClientPublicTransactionSessionBaseConfigQuery } from '../../gql/graphql';

export type MerchantBaseConfig =
  ClientPublicTransactionSessionBaseConfigQuery['clientPublicTransactionSessionBaseConfig']['data'];
