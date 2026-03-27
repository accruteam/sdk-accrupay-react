import { gql } from '../../gql';

export const CLIENT_PUBLIC_TRANSACTION_SESSION_BASE_CONFIG_QUERY = gql(`
  query ClientPublicTransactionSessionBaseConfig(
    $merchantPublicId: String!
    $transactionSessionId: String
    $transactionProvider: TRANSACTION_PROVIDER
  ) {
    clientPublicTransactionSessionBaseConfig(
      merchantPublicId: $merchantPublicId
      transactionSessionId: $transactionSessionId
      transactionProvider: $transactionProvider
    ) {
      provider
      data {
        ... on MerchantClientTransactionSessionNuveiBaseConfig {
          provider
          merchantId
          merchantSiteId
          env
        }
        ... on MerchantClientTransactionSessionGenericBaseConfig {
          provider
          publicKey
        }
      }
    }
  }
`);

export const CLIENT_PUBLIC_TRANSACTION_SESSION_QUERY = gql(`
  query ClientPublicTransactionSession(
    $merchantPublicId: String!
    $transactionSessionId: String!
  ) {
    clientPublicTransactionSession(
      merchantPublicId: $merchantPublicId
      transactionSessionId: $transactionSessionId
    ) {
      provider
      baseConfig {
        ... on MerchantClientTransactionSessionNuveiBaseConfig {
          provider
          merchantId
          merchantSiteId
          env
        }
        ... on MerchantClientTransactionSessionGenericBaseConfig {
          provider
          publicKey
        }
      }
      
      transactionSession {
        ...MerchantClientTransactionSessionFragment
      }
    }
  }
`);
