import { gql } from "../../gql";

export const MERCHANT_CLIENT_TRANSACTION_SESSION_BASE_FRAGMENT = gql(`
  fragment MerchantClientTransactionSessionBaseFragment on MerchantClientTransactionSession {
    id
    action
    status
    providerCode
    providerStatus
    providerError
    providerLastSyncedAt
    providerLastVerifiedAt

    token
    tokenExpiresAt

    payload

    amount
    currency

    merchantInternalCustomerCode
    merchantInternalTransactionCode

    startedAt
    completedAt
    canceledAt

    storePaymentMethod

    transactionProviderId
    paymentMethodId
    paymentPlanId

    createdAt
    updatedAt

    deviceId
    deviceIp
    deviceBrowser
    deviceOS
    deviceName
    deviceType

    billingFirstName
    billingLastName
    billingEmail
    billingPhone
    billingAddressLine1
    billingAddressLine2
    billingAddressCity
    billingAddressState
    billingAddressCountry
    billingAddressPostalCode

    shippingFirstName
    shippingLastName
    shippingEmail
    shippingPhone
    shippingAddressLine1
    shippingAddressLine2
    shippingAddressCity
    shippingAddressState
    shippingAddressCountry
    shippingAddressPostalCode

    userFirstName
    userLastName
    userEmail
    userPhone
    userBirthDate
    userLocale
    userLegalIdentifier
    userLegalIdentifierType
    userAddressLine1
    userAddressLine2
    userAddressCity
    userAddressState
    userAddressCountry
    userAddressPostalCode
  }
`);

export const MERCHANT_TRANSACTION_PROVIDER_FRAGMENT = gql(`
  fragment MerchantTransactionProviderFragment on MerchantTransactionProvider {
    id
    provider
    providerCode
    status
    applicationId
    merchantId
    createdAt
    updatedAt
  }
`);

export const MERCHANT_CLIENT_TRANSACTION_SESSION_FRAGMENT = gql(`
  fragment MerchantClientTransactionSessionFragment on MerchantClientTransactionSession {
    ...MerchantClientTransactionSessionBaseFragment

    transactionProvider {
      ...MerchantTransactionProviderFragment
    }
  }
`);
