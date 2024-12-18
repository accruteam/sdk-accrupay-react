import { useEffect, useState } from 'react';
import { Provider, ProvidersConfiguration } from './types';
import { NuveiContext, NuveiPaymentFields, Props as NuveiProps } from './providers/nuvei/NuveiElements';

type Props = {
  omniprovider?: true;
  preReleaseGetProviders: () => Promise<ProvidersConfiguration>;
  preferredProvider: 'nuvei' | 'stripe';
  children: React.ReactNode;
}

function pluckProviderConfig(provider: Provider, providersData: ProvidersConfiguration): Record<string, unknown> {
  return providersData.find(p => p.name === provider)!.config;
}

export function AccruPay(props: Props) {
  const [initialLoad, setInitialLoad] = useState<boolean>(false);
  const [provider] = useState<Provider>(props.preferredProvider);
  const [providersData, setProvidersData] = useState<Awaited<ReturnType<Props['preReleaseGetProviders']>>>([]);

  useEffect(() => {
    async function getProviders() {
      const providers = await props.preReleaseGetProviders();
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

