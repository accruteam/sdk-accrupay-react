import {
  useEffect,
  useMemo,
  useState,
  useRef,
  memo,
  forwardRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import type {
  AccruPayInternalProviderRef,
  AccruPayParams,
  AccruPayRef,
  AccruPayContextValue,
  AccruPayTransactionSubmitParams,
} from './types';
import { AccruPayGateways } from './gateways';
import { AccruPayContext } from './context';
import { AccruPayClient } from './api';
import type {
  MerchantClientTransactionSession,
  TRANSACTION_PROVIDER,
} from './api/gql/graphql';
import type { MerchantBaseConfig } from './api/services/transactionSession/types';

const AccruPay = memo(
  forwardRef<AccruPayRef, AccruPayParams>((params, ref) => {
    const {
      merchantPublicId,
      transactionSessionId,
      preloadProvider,
      environment = 'production',
      url,
      children,
    } = params;

    const [isReady, setIsReady] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [transactionSession, setTransactionSession] =
      useState<MerchantClientTransactionSession | null>(null);
    const [provider, setProvider] = useState<TRANSACTION_PROVIDER | null>(null);

    const providerRef = useRef<AccruPayInternalProviderRef>(null);
    const [providerBaseConfig, setProviderBaseConfig] =
      useState<MerchantBaseConfig | null>(null);
    const accruPayClient = useMemo(
      () =>
        new AccruPayClient({
          environment: environment === 'production' ? 'production' : 'sandbox',
          url: url ?? undefined,
        }),
      [environment, url],
    );
    const fetchConfigRef = useRef<AbortController | null>(null);

    useEffect(() => {
      if (!merchantPublicId) {
        setError('Merchant identifier not provided');
        setIsReady(false);
        return;
      }

      if (fetchConfigRef.current) {
        fetchConfigRef.current.abort();
      }

      const abortController = new AbortController();
      fetchConfigRef.current = abortController;

      const fetchConfig = async () => {
        setIsReady(false);
        setError(null);

        try {
          if (transactionSessionId) {
            const response = await accruPayClient.transactionSession.getSession(
              {
                merchantPublicId,
                transactionSessionId,
              },
            );
            if (abortController.signal.aborted) return;
            setProvider(response.provider);
            setProviderBaseConfig(response.baseConfig);
            setTransactionSession(response.transactionSession);
          } else if (preloadProvider) {
            const response =
              await accruPayClient.transactionSession.getBaseConfig({
                merchantPublicId,
                transactionProvider: preloadProvider,
              });
            if (abortController.signal.aborted) return;
            setProvider(response.provider);
            setProviderBaseConfig(response.data);
            setTransactionSession(null);
          } else {
            throw new Error(
              'Transaction session ID or provider must be provided',
            );
          }
        } catch (err: any) {
          if (abortController.signal.aborted) return;
          setError(err.message || 'Failed to load payment configuration');
          setIsReady(false);
        }
      };

      fetchConfig();

      return () => {
        abortController.abort();
        fetchConfigRef.current = null;
      };
    }, [
      accruPayClient,
      merchantPublicId,
      transactionSessionId,
      preloadProvider,
    ]);

    const submitPayment = useCallback(
      async (params?: AccruPayTransactionSubmitParams) => {
        if (!providerRef.current) {
          throw new Error('Payment provider not ready');
        }

        setIsProcessing(true);
        setError(null);

        try {
          const result = await providerRef.current.submitPayment(params);
          setIsProcessing(false);
          return result;
        } catch (err: any) {
          setIsProcessing(false);
          setError(err.message || 'Payment failed');
          throw err;
        }
      },
      [],
    );

    useImperativeHandle(ref, () => ({
      submitPayment,
    }));

    const contextValue: AccruPayContextValue = useMemo(
      () => ({
        isReady,
        isProcessing,
        error,

        submitPayment,

        provider,
        transactionSession,
      }),
      [
        isReady,
        isProcessing,
        error,
        submitPayment,
        provider,
        transactionSession,
      ],
    );

    const handleReadyChange = useCallback((ready: boolean) => {
      setIsReady(ready);
      if (ready) {
        setError(null);
      }
    }, []);

    const handleError = useCallback((error: Error) => {
      setError(error.message);
    }, []);

    const Gateway = useMemo(() => {
      if (!provider) return null;
      return AccruPayGateways[provider];
    }, [provider]);

    if (!Gateway || !providerBaseConfig) {
      return (
        <AccruPayContext.Provider value={contextValue}>
          {children}
        </AccruPayContext.Provider>
      );
    }

    return (
      <AccruPayContext.Provider value={contextValue}>
        <Gateway
          ref={providerRef}
          providerBaseConfig={providerBaseConfig}
          transactionSession={transactionSession}
          onError={handleError}
          onReadyChange={handleReadyChange}
        >
          {children}
        </Gateway>
      </AccruPayContext.Provider>
    );
  }),
);

export { AccruPay };
