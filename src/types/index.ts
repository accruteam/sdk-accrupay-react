export type Provider = 'nuvei' | 'stripe';

export type NuveiPaymentPayload = {
  sessionToken: string, 
  cardHolderName: string, 
  paymentOption: unknown, 
  billingAddress?: Partial<{
    country: string;
    state: string;
    email: string;

    firstName: string;
    lastName: string;

    phone:string;
    city: string;
    address: string;
    streetNumber: string;
    zip: string;
  }>
}

export type NuveiPaymentResponse = {
  bin: string;
  cancelled: boolean;
  cavv: string;
  ccCardNumber: string;
  ccExpMonth: string;
  ccExpYear: string;
  dsTransID: string;
  eci: string;
  errCode: string;
  errorDescription: string;
  last4Digits: string;
  mcc: string;
  result: string;
  threeDReason: string;
  threeDReasonId: string;
  transactionId: string;
  transactionStatus: string;
  transactionType: string;
  userPaymentOptionId: string;
  xid: string;
}

export type SubmitPaymentCallbacks = {
  onSuccess: (response: NuveiPaymentResponse) => unknown;
  onError: (error: unknown) => unknown;
  onComplete: () => unknown;
}

export type ProviderConfiguration = { name: Provider, config: Record<string, unknown> };
export type ProvidersConfiguration = ProviderConfiguration[];
