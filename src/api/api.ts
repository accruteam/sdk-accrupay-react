import { Provider } from '../types';
import * as NuveiApi from './nuvei';
import * as StripeApi from './stripe';

type NuveiInitConfig = Parameters<typeof NuveiApi.initializeSession>[1];
type StripeInitConfig = Parameters<typeof StripeApi.createPaymentIntent>[1];

export async function getToken(provider: Provider, { amount} : { amount: number }, config: | Parameters<typeof StripeApi.createPaymentIntent>[1]) {
  if (provider === 'nuvei') {
    return NuveiApi.initializeSession(amount.toString(), config as unknown as NuveiInitConfig);
  }

  if (provider === 'stripe') {
    return StripeApi.createPaymentIntent(amount, config as unknown as StripeInitConfig);
  }

  return undefined;
}

export async function verifyPayment(provider: Provider, { token }: { token: string }) {
  if (provider === 'nuvei') {
    return NuveiApi.getPaymentStatus(token);
  }

  return undefined;
}
