import { useMemo } from 'react';
import { TRANSACTION_PROVIDER, type AccruPayParams } from '@accrupay/react';

type AccruPayEnvironment = NonNullable<AccruPayParams['environment']>;

const MERCHANT_IDS_STORAGE_KEY = 'accrupay-merchant-ids';

type CachedMerchantIds = {
  sandbox: string[];
  production: string[];
};

interface ClientConfigProps {
  environment: AccruPayEnvironment;
  merchantPublicId: string;
  transactionSessionId: string;
  preloadProvider: TRANSACTION_PROVIDER | null;
  onMerchantPublicIdChange: (id: string) => void;
  onTransactionSessionIdChange: (id: string) => void;
  onPreloadProviderChange: (provider: TRANSACTION_PROVIDER | null) => void;
  disabled?: boolean;
}

function loadCachedMerchantIds(): CachedMerchantIds {
  const stored = localStorage.getItem(MERCHANT_IDS_STORAGE_KEY);
  if (stored) {
    try {
      const data = JSON.parse(stored) as CachedMerchantIds;
      return {
        sandbox: data.sandbox || [],
        production: data.production || [],
      };
    } catch {}
  }
  return { sandbox: [], production: [] };
}

export function ClientConfig({
  environment,
  merchantPublicId,
  transactionSessionId,
  preloadProvider,
  onMerchantPublicIdChange,
  onTransactionSessionIdChange,
  onPreloadProviderChange,
  disabled,
}: ClientConfigProps) {
  const transactionProviders = Object.values(TRANSACTION_PROVIDER);

  const cachedMerchantIds = useMemo(() => {
    const base = loadCachedMerchantIds();

    if (!merchantPublicId?.trim()) {
      return base;
    }

    const trimmedId = merchantPublicId.trim();
    const envIds = base[environment];

    if (envIds.includes(trimmedId)) {
      return base;
    }

    const updated = [trimmedId, ...envIds].slice(0, 10);
    const newData = {
      ...base,
      [environment]: updated,
    };

    localStorage.setItem(MERCHANT_IDS_STORAGE_KEY, JSON.stringify(newData));
    return newData;
  }, [merchantPublicId, environment]);

  const currentEnvMerchantIds = cachedMerchantIds[environment];

  const handleSelectMerchantId = (id: string) => {
    if (!disabled) {
      onMerchantPublicIdChange(id);
    }
  };

  const handleRemoveMerchantId = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const current = loadCachedMerchantIds();
    const updated = {
      ...current,
      [environment]: current[environment].filter(cachedId => cachedId !== id),
    };
    localStorage.setItem(MERCHANT_IDS_STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <>
      <div className="control-group">
        <label
          htmlFor="merchant-public-id"
          data-testid="merchant-public-id-label"
        >
          Merchant Public ID *
        </label>
        <input
          id="merchant-public-id"
          type="text"
          value={merchantPublicId}
          onChange={e => onMerchantPublicIdChange(e.target.value)}
          placeholder="e.g., merchant-123"
          data-testid="input-merchant-public-id"
          className="control-input"
          disabled={disabled}
        />
        {currentEnvMerchantIds.length > 0 && (
          <div className="merchant-ids-quick-select">
            <small className="control-hint">Quick select:</small>
            <div className="merchant-ids-buttons">
              {currentEnvMerchantIds.map(id => (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleSelectMerchantId(id)}
                  disabled={disabled}
                  className={`btn-quick-select ${merchantPublicId === id ? 'active' : ''}`}
                  data-testid={`btn-quick-select-${id}`}
                >
                  <span className="btn-merchant-id">{id}</span>
                  <span className="btn-env-badge">
                    {environment === 'production' ? 'prod' : 'sandbox'}
                  </span>
                  <span
                    className="btn-remove"
                    onClick={e => handleRemoveMerchantId(id, e)}
                    data-testid={`btn-remove-${id}`}
                  >
                    ×
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="control-group">
        <label
          htmlFor="transaction-session-id"
          data-testid="transaction-session-id-label"
        >
          Transaction Session ID
        </label>
        <input
          id="transaction-session-id"
          type="text"
          value={transactionSessionId}
          onChange={e => onTransactionSessionIdChange(e.target.value)}
          placeholder="Leave empty to use preloadProvider"
          data-testid="input-transaction-session-id"
          className="control-input"
          disabled={disabled}
        />
      </div>

      <div className="control-group">
        <label htmlFor="preload-provider" data-testid="preload-provider-label">
          Preload Provider
        </label>
        <div className="provider-buttons">
          <button
            type="button"
            onClick={() => onPreloadProviderChange(null)}
            disabled={disabled}
            className={`btn-provider ${preloadProvider === null ? 'active' : ''}`}
            data-testid="btn-provider-none"
          >
            None
          </button>
          {transactionProviders.map(provider => (
            <button
              key={provider}
              type="button"
              onClick={() => onPreloadProviderChange(provider)}
              disabled={disabled}
              className={`btn-provider ${preloadProvider === provider ? 'active' : ''}`}
              data-testid={`btn-provider-${provider}`}
            >
              {provider}
            </button>
          ))}
        </div>
        <small className="control-hint">
          Use this if transactionSessionId is empty
        </small>
      </div>
    </>
  );
}
