import { Provider } from '../types';
import * as NuveiApi from './nuvei';

export async function getProviders(): Promise<{ name: Provider, config: Record<string, unknown> }[]> {
  const { merchantId, merchantSiteId } = JSON.parse(import.meta.env.VITE_NUVEI_CONFIG);

  return [
    {
      name: 'nuvei',
      config: { merchantId, merchantSiteId, env: 'int' },
    }
  ];
}

export async function getToken(provider: Provider, { amount} : { amount: number }) {
  if (provider === 'nuvei') {
    return NuveiApi.initializeSession(amount.toString());
  }

  return undefined;
}

export async function verifyPayment(provider: Provider, { token }: { token: string }) {
  if (provider === 'nuvei') {
    return NuveiApi.getPaymentStatus(token);
  }

  return undefined;
}
