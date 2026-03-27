import type { ReactNode } from 'react';
import type {
  BillingDataSchema,
  MerchantClientTransactionSession,
  TRANSACTION_PROVIDER,
} from './api/gql/graphql';
import type { MerchantBaseConfig } from './api/services/transactionSession/types';

export type AccruPayFieldName = 'cardNumber' | 'cardExpiry' | 'cardCVC';

export interface AccruPayTransactionSubmitParams {
  billing?: BillingDataSchema;
}

export type AccruPayParams = {
  merchantPublicId: string;

  transactionSessionId?: string | null;
  preloadProvider?: TRANSACTION_PROVIDER | null;

  environment?: 'production' | 'sandbox' | null;
  url?: string | null;

  children: ReactNode;
};

export interface AccruPayContextValue {
  isReady: boolean;
  isProcessing: boolean;
  error: string | null;

  submitPayment: (
    params?: AccruPayTransactionSubmitParams,
  ) => Promise<Record<string, any>>;

  provider: TRANSACTION_PROVIDER | null;
  transactionSession: MerchantClientTransactionSession | null;
}

export interface AccruPayRef {
  submitPayment: (
    params?: AccruPayTransactionSubmitParams,
  ) => Promise<Record<string, any>>;
}

export interface AccruPayInternalProviderProps {
  providerBaseConfig: MerchantBaseConfig;
  transactionSession: MerchantClientTransactionSession | null;

  onError?: (error: Error) => void;
  onReadyChange?: (isReady: boolean) => void;

  children: ReactNode;
}

export interface AccruPayInternalProviderRef {
  submitPayment: (
    params?: AccruPayTransactionSubmitParams,
  ) => Promise<Record<string, any>>;
}
