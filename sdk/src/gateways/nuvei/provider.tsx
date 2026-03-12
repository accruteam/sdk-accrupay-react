import {
  useEffect,
  useMemo,
  useState,
  forwardRef,
  useImperativeHandle,
  useCallback,
  useRef,
} from 'react';
import type {
  INuveiTransactionParamsDTO,
  NuveiForm,
  NuveiFormField,
  SafeChargeInstance,
} from './types';
import { NuveiInternalContext } from './context';
import type {
  AccruPayInternalProviderRef,
  AccruPayInternalProviderProps,
  AccruPayFieldName,
  AccruPayTransactionSubmitParams,
} from '../../types';
import type { NuveiFormFieldName } from './types';

const SDK_FIELD_TYPES: Record<AccruPayFieldName, NuveiFormFieldName> = {
  cardNumber: 'ccNumber',
  cardExpiry: 'ccExpiration',
  cardCVC: 'ccCvc',
};

const REQUIRED_FIELDS: AccruPayFieldName[] = [
  'cardNumber',
  'cardExpiry',
  'cardCVC',
];

export const NuveiProvider = forwardRef<
  AccruPayInternalProviderRef,
  AccruPayInternalProviderProps & { safeCharge: SafeChargeInstance }
>(
  (
    {
      safeCharge,
      providerBaseConfig,
      transactionSession,
      children,
      onError,
      onReadyChange,
    },
    ref,
  ) => {
    const [isFormReady, setIsFormReady] = useState(false);
    const [cardHolderName, setCardHolderName] = useState('');

    const [readyFields, setReadyFields] = useState<Set<AccruPayFieldName>>(
      new Set(),
    );

    const formRef = useRef<NuveiForm | null>(null);
    const fieldsRef = useRef<Map<AccruPayFieldName, NuveiFormField>>(new Map());

    useEffect(() => {
      if (!safeCharge) {
        setIsFormReady(false);
        setReadyFields(new Set());
        return;
      }

      setIsFormReady(false);
      setReadyFields(new Set());

      try {
        const form = safeCharge.fields({
          fonts: [
            {
              cssUrl:
                'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap',
            },
          ],
          locale: 'en',
          fontSize: '16px',
        });

        formRef.current = form;
        setIsFormReady(true);
      } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        setIsFormReady(false);
        onError?.(err);
      }

      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const fieldsToCleanup = fieldsRef.current;
        fieldsToCleanup.forEach(field => {
          try {
            field.destroy();
          } catch {}
        });
        fieldsToCleanup.clear();
        setReadyFields(new Set());
        formRef.current = null;
        setIsFormReady(false);
      };
    }, [safeCharge, providerBaseConfig, onError]);

    const areAllFieldsReady = useMemo(() => {
      return REQUIRED_FIELDS.every(field => readyFields.has(field));
    }, [readyFields]);

    useEffect(() => {
      const isReady = isFormReady && areAllFieldsReady;
      onReadyChange?.(isReady);
    }, [isFormReady, areAllFieldsReady, onReadyChange]);

    const updateFieldReadyStatus = useCallback(
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

    const registerField = useCallback(
      (name: AccruPayFieldName, containerId: string) => {
        const form = formRef.current;
        if (!form || !isFormReady) {
          return;
        }

        const containerElement = document.getElementById(containerId);
        if (!containerElement) {
          return;
        }

        const existing = fieldsRef.current.get(name);
        if (existing) {
          try {
            existing.destroy();
          } catch {}
          updateFieldReadyStatus(name, false);
        }

        try {
          const sdkField = form.create(SDK_FIELD_TYPES[name], {});
          sdkField.attach(`#${containerId}`);
          fieldsRef.current.set(name, sdkField);

          sdkField.on('ready', () => {
            updateFieldReadyStatus(name, true);
          });
        } catch (error) {
          console.error(`Failed to register field ${name}:`, error);
          updateFieldReadyStatus(name, false);
        }
      },
      [isFormReady, updateFieldReadyStatus],
    );

    const unregisterField = useCallback(
      (name: AccruPayFieldName) => {
        const field = fieldsRef.current.get(name);
        if (field) {
          try {
            field.destroy();
          } catch {}
          fieldsRef.current.delete(name);
          updateFieldReadyStatus(name, false);
        }
      },
      [updateFieldReadyStatus],
    );

    const submitPayment = useCallback(
      async (params?: AccruPayTransactionSubmitParams) => {
        if (!formRef.current || !transactionSession) {
          throw new Error('Payment form not ready');
        }

        if (!areAllFieldsReady) {
          throw new Error('Not all payment fields are ready');
        }

        const cardNumberField = fieldsRef.current.get('cardNumber');
        const cardExpiryField = fieldsRef.current.get('cardExpiry');
        const cardCvcField = fieldsRef.current.get('cardCVC');

        if (!cardNumberField || !cardExpiryField || !cardCvcField) {
          throw new Error('Payment fields not initialized');
        }

        try {
          if (!cardHolderName.trim()) {
            throw new Error('Card holder name is required');
          }

          const cardNumberElm = cardNumberField.parentElm;
          const cardExpiryElm = cardExpiryField.parentElm;
          const cardCvcElm = cardCvcField.parentElm;
          const cardNumberStateClass = cardNumberField.stateClass;
          const cardExpiryStateClass = cardExpiryField.stateClass;
          const cardCvcStateClass = cardCvcField.stateClass;

          if (
            !cardNumberElm ||
            !cardNumberStateClass?.complete ||
            !cardNumberElm.classList.contains(cardNumberStateClass.complete)
          ) {
            throw new Error('Invalid card number');
          }

          if (
            !cardExpiryElm ||
            !cardExpiryStateClass?.complete ||
            !cardExpiryElm.classList.contains(cardExpiryStateClass.complete)
          ) {
            throw new Error('Invalid card expiry');
          }

          if (
            !cardCvcElm ||
            !cardCvcStateClass?.complete ||
            !cardCvcElm.classList.contains(cardCvcStateClass.complete)
          ) {
            throw new Error('Invalid card CVC');
          }
        } catch (error) {
          const err = error instanceof Error ? error : new Error(String(error));
          onError?.(err);
          throw err;
        }

        const billing = params?.billing;

        const parseNuveiAddress =
          (): INuveiTransactionParamsDTO['billingAddress'] => {
            if (billing) {
              return {
                country: billing.billingAddressCountry,
                email: billing.billingEmail,
                firstName: billing.billingFirstName,
                lastName: billing.billingLastName,
                address: billing.billingAddressLine1 ?? undefined,
                addressLine2: billing.billingAddressLine2 ?? undefined,
                phone: billing.billingPhone ?? undefined,
                zip: billing.billingAddressPostalCode ?? undefined,
                city: billing.billingAddressCity ?? undefined,
                state: billing.billingAddressState ?? undefined,
                county: undefined,
              };
            }

            return {
              country: transactionSession.billingAddressCountry ?? '',
              email: transactionSession.billingEmail ?? '',
              firstName: transactionSession.billingFirstName ?? '',
              lastName: transactionSession.billingLastName ?? '',
              address: transactionSession.billingAddressLine1 ?? '',
              addressLine2: transactionSession.billingAddressLine2 ?? undefined,
              phone: transactionSession.billingPhone ?? undefined,
              zip: transactionSession.billingAddressPostalCode ?? undefined,
              city: transactionSession.billingAddressCity ?? undefined,
              state: transactionSession.billingAddressState ?? undefined,
              county: undefined,
            };
          };

        return new Promise<Record<string, any>>((resolve, reject) => {
          if (!transactionSession.token) {
            reject(new Error('Session token not available'));
            return;
          }

          const billingAddress = parseNuveiAddress();

          const createParams: INuveiTransactionParamsDTO = {
            sessionToken: transactionSession.token,
            cardHolderName,
            paymentOption: cardNumberField,
            billingAddress,
          };

          safeCharge.createPayment(createParams, response => {
            if (response.result === 'APPROVED') {
              resolve(response);
            } else {
              reject(new Error(response.errorDescription || 'Payment failed'));
            }
          });
        });
      },
      [
        safeCharge,
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

        registerField,
        unregisterField,

        cardHolderName,
        setCardHolderName,
      }),
      [
        isFormReady,
        registerField,
        unregisterField,
        cardHolderName,
        setCardHolderName,
      ],
    );

    return (
      <NuveiInternalContext.Provider value={contextValue}>
        {children}
      </NuveiInternalContext.Provider>
    );
  },
);
