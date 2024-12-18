import { Provider } from '../types';
import * as NuveiApi from './nuvei';

export async function getToken(provider: Provider, { amount} : { amount: number }, config: Parameters<typeof NuveiApi.initializeSession>[1]) {
  if (provider === 'nuvei') {
    return NuveiApi.initializeSession(amount.toString(), config);
  }

  return undefined;
}

export async function verifyPayment(provider: Provider, { token }: { token: string }) {
  if (provider === 'nuvei') {
    return NuveiApi.getPaymentStatus(token);
  }

  return undefined;
}
