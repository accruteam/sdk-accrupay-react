import { forwardRef, memo, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import type {
  AccruPayInternalProviderProps,
  AccruPayInternalProviderRef,
} from '../../types';
import type { StripeBaseConfig } from './types';
import { StripeProvider } from './provider';
import type { MerchantClientTransactionSessionGenericBaseConfig } from '../../api/gql/graphql';

const StripeGateway = memo(
  forwardRef<AccruPayInternalProviderRef, AccruPayInternalProviderProps>(
    ({ providerBaseConfig, children, onError, ...props }, ref) => {
      const config = providerBaseConfig as StripeBaseConfig &
        MerchantClientTransactionSessionGenericBaseConfig;
      const publicKey = config?.publicKey ?? null;

      const [stripe, setStripe] = useState<Awaited<
        ReturnType<typeof loadStripe>
      > | null>(null);

      useEffect(() => {
        if (!publicKey || typeof publicKey !== 'string') {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setStripe(null);
          onError?.(
            new Error(
              'Missing Stripe configuration: publicKey (publishable key) is required',
            ),
          );
          return;
        }

        let cancelled = false;
        loadStripe(publicKey)
          .then(instance => {
            if (!cancelled) {
              setStripe(instance);
            }
          })
          .catch(error => {
            if (!cancelled) {
              setStripe(null);
              onError?.(
                new Error(
                  `Failed to load Stripe: ${error instanceof Error ? error.message : String(error)}`,
                ),
              );
            }
          });
        return () => {
          cancelled = true;
        };
      }, [publicKey, onError]);

      if (!stripe) {
        return null;
      }

      const stripeProviderProps: AccruPayInternalProviderProps = {
        providerBaseConfig,
        transactionSession: props.transactionSession,
        children,
        ...(onError != null && { onError }),
        ...(props.onReadyChange != null && {
          onReadyChange: props.onReadyChange,
        }),
      };

      return (
        <Elements stripe={stripe}>
          <StripeProvider {...stripeProviderProps} ref={ref}>
            {children}
          </StripeProvider>
        </Elements>
      );
    },
  ),
);

export { StripeGateway };
