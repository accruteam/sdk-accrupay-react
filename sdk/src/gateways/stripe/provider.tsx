import {
  useEffect,
  useMemo,
  useState,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from 'react';
import {
  useStripe,
  useElements,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import { StripeInternalContext } from './context';
import type {
  AccruPayInternalProviderRef,
  AccruPayInternalProviderProps,
  AccruPayFieldName,
  AccruPayTransactionSubmitParams,
} from '../../types';

const REQUIRED_FIELDS: AccruPayFieldName[] = [
  'cardNumber',
  'cardExpiry',
  'cardCVC',
];

export const StripeProvider = forwardRef<
  AccruPayInternalProviderRef,
  AccruPayInternalProviderProps
>(({ transactionSession, children, onError, onReadyChange }, ref) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isFormReady] = useState(true);
  const [cardHolderName, setCardHolderName] = useState('');

  const [readyFields, setReadyFields] = useState<Set<AccruPayFieldName>>(
    new Set(),
  );

  const registerFieldReady = useCallback(
    (name: AccruPayFieldName, isReady: boolean) => {
      setReadyFields(prev => {
        const next = new Set(prev);
        if (isReady) {
          next.add(name);
        } else {
          next.delete(name);
        }
        return next;
      });
    },
    [],
  );

  const unregisterField = useCallback((name: AccruPayFieldName) => {
    setReadyFields(prev => {
      const next = new Set(prev);
      next.delete(name);
      return next;
    });
  }, []);

  const areAllFieldsReady = useMemo(() => {
    return REQUIRED_FIELDS.every(field => readyFields.has(field));
  }, [readyFields]);

  useEffect(() => {
    const isReady = isFormReady && areAllFieldsReady;
    onReadyChange?.(isReady);
  }, [isFormReady, areAllFieldsReady, onReadyChange]);

  const submitPayment = useCallback(
    async (params?: AccruPayTransactionSubmitParams) => {
      if (!stripe || !elements) {
        throw new Error('Payment provider not ready');
      }

      const clientSecret = transactionSession?.token ?? null;
      if (!clientSecret) {
        const err = new Error('Session or client secret not available');
        onError?.(err);
        throw err;
      }

      if (!cardHolderName.trim()) {
        const err = new Error('Card holder name is required');
        onError?.(err);
        throw err;
      }

      if (!areAllFieldsReady) {
        throw new Error('Not all payment fields are ready');
      }

      const cardElement = elements.getElement(CardNumberElement);
      if (!cardElement) {
        throw new Error('Payment fields not initialized');
      }

      const billing = params?.billing;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: cardHolderName.trim(),
            ...(billing && {
              email: billing.billingEmail,
              address: {
                line1: billing.billingAddressLine1 ?? undefined,
                line2: billing.billingAddressLine2 ?? undefined,
                city: billing.billingAddressCity ?? undefined,
                state: billing.billingAddressState ?? undefined,
                postal_code: billing.billingAddressPostalCode ?? undefined,
                country: billing.billingAddressCountry,
              },
            }),
          },
        },
      });

      if (result.error) {
        const message =
          result.error.message ?? result.error.code ?? 'Payment failed';
        const err = new Error(message);
        onError?.(err);
        throw err;
      }

      return (result.paymentIntent ?? result) as Record<string, any>;
    },
    [
      stripe,
      elements,
      transactionSession,
      cardHolderName,
      areAllFieldsReady,
      onError,
    ],
  );

  useImperativeHandle(ref, () => ({
    submitPayment,
  }));

  const contextValue = useMemo(
    () => ({
      isFormReady,
      registerFieldReady,
      unregisterField,
      cardHolderName,
      setCardHolderName,
    }),
    [
      isFormReady,
      registerFieldReady,
      unregisterField,
      cardHolderName,
      setCardHolderName,
    ],
  );

  return (
    <StripeInternalContext.Provider value={contextValue}>
      {children}
    </StripeInternalContext.Provider>
  );
});
