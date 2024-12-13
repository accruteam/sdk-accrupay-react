import * as Api from './api/api';
import { useEffect, useState } from 'react';
import { Provider } from './types';
import { NuveiContext, NuveiPaymentFields, Props as NuveiProps } from './providers/nuvei/NuveiElements';

type Props = {
  omniprovider?: true;
  preferredProvider: 'nuvei' | 'stripe';
  children: React.ReactNode;
}

type ProvidersData = Awaited<ReturnType<typeof Api.getProviders>>;

function pluckProviderConfig(provider: Provider, providersData: ProvidersData): Record<string, unknown> {
  return providersData.find(p => p.name === provider)!.config;
}

export function AccruPay(props: Props) {
  const [initialLoad, setInitialLoad] = useState<boolean>(false);
  const [provider] = useState<Provider>(props.preferredProvider);
  const [providersData, setProvidersData] = useState<ProvidersData>([]);

  useEffect(() => {
    async function getProviders() {
      const providers = await Api.getProviders();
      const providerNames = providers.map(p => p.name);
      if (!providerNames.includes(provider)) {
        throw new Error(
          'Provider not found.'
        )
      }
      setProvidersData(providers);
      setInitialLoad(true);
    }

    getProviders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (initialLoad === false) {
    return null;
  }

  const config = pluckProviderConfig(provider, providersData);

  if (provider === 'nuvei') {
    return (<NuveiContext config={config as unknown as NuveiProps['config']}>{props.children}</NuveiContext>);
  }

  return null;
}

export function form(provider: Provider) {
  if (provider === 'nuvei') {
    return NuveiPaymentFields;
  }

  return null;
}

