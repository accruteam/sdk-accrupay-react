export type Provider = 'nuvei' | 'stripe';

export type SubmitPaymentCallbacks = {
  onSuccess: () => unknown;
  onError: (error: unknown) => unknown;
  onComplete: () => unknown;
}
