import { useEffect, useState } from 'react';
import { Provider, ProvidersConfiguration } from './types';
import { NuveiWrapper, NuveiPaymentFields, Props as NuveiProps } from './providers/nuvei/NuveiElements';
// import { StripeWrapper, StripePaymentFields, Props as StripeProps } from './providers/stripe/StripeElements';

type Props = {
  amount?: number;
  sessionToken?: string;
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
    if (!props.sessionToken) {
      return <div>Missing sessionToken</div>
    }

    return (<NuveiWrapper 
      sessionToken={props.sessionToken} 
      config={config as unknown as NuveiProps['config']}>{props.children}
    </NuveiWrapper>);
  }

  // if (provider === 'stripe') {
  //   if (!props.amount) {
  //     return <div>Missing amount</div>
  //   }
  //
  //   return (<StripeWrapper amount={props.amount} config={config as unknown as StripeProps['config']}>{props.children}</StripeWrapper>);
  // }

  return null;
}

export function form(provider: Provider) {
  if (provider === 'nuvei') {
    return NuveiPaymentFields;
  }

  // if (provider === 'stripe') {
  //   return StripePaymentFields;
  // }

  return null;
}

