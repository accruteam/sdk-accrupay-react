import { useState } from "react";
import AccruPay from "@accrupay/node";
import type { Merchant, AccruPayParams } from "@accrupay/react";

type AccruPayEnvironment = NonNullable<AccruPayParams["environment"]>;

interface ServerConfigurationProps {
  environment: AccruPayEnvironment;
  onMerchantLoaded: (merchant: Merchant | null) => void;
  onSecretChange?: (secret: string) => void;
  disabled?: boolean;
}

export function ServerConfiguration({
  environment,
  onMerchantLoaded,
  onSecretChange,
  disabled,
}: ServerConfigurationProps) {
  const [secret, setSecret] = useState("");
  const [showSecret, setShowSecret] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [merchant, setMerchant] = useState<Merchant | null>(null);

  const handleLoadServerSDK = async () => {
    if (!secret.trim()) {
      const error = new Error("Secret is required");
      console.error("[ServerConfig] Validation error:", error);
      setError(error);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const sdkEnvironment: "qa" | "production" =
        environment === "production" ? "production" : "qa";

      const sdk = new AccruPay({
        apiSecret: secret,
        environment: sdkEnvironment,
      });

      const merchantData = await sdk.merchants.getCurrent({});

      if (!merchantData) {
        throw new Error("No merchant data returned");
      }

      const merchantResponse = {
        __typename: "Merchant" as const,
        id: merchantData.id,
        publicId: merchantData.publicId || null,
        name: merchantData.name,
        email: merchantData.email,
      } as Merchant;

      setMerchant(merchantResponse);
      onMerchantLoaded(merchantResponse);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      console.error("[ServerConfig] Load server SDK error:", error, err);
      setError(error);
      onMerchantLoaded(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setSecret("");
    setMerchant(null);
    setError(null);
    onMerchantLoaded(null);
  };

  return (
    <div>
      <div className="control-group">
        <label htmlFor="server-secret" data-testid="server-secret-label">
          API Secret *
        </label>
        <div className="secret-input-wrapper">
          <input
            id="server-secret"
            type={showSecret ? "text" : "password"}
            value={secret}
            onChange={e => {
              setSecret(e.target.value);
              onSecretChange?.(e.target.value);
            }}
            placeholder="Enter API secret"
            data-testid="input-server-secret"
            className="control-input"
            disabled={disabled || isLoading}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
          <button
            type="button"
            onClick={() => setShowSecret(!showSecret)}
            className="btn-secret-toggle"
            data-testid="btn-toggle-secret"
            disabled={disabled || isLoading}
          >
            {showSecret ? "Hide" : "Show"}
          </button>
        </div>
        <small className="control-hint">
          Secret is never stored or cached. Handle with care.
        </small>
      </div>

      <div className="control-actions">
        <button
          onClick={handleLoadServerSDK}
          disabled={disabled || isLoading || !secret.trim()}
          data-testid="btn-load-server-sdk"
          className="btn btn-primary"
        >
          {isLoading ? "Loading..." : "Load Server SDK"}
        </button>
        {merchant && (
          <button
            onClick={handleClear}
            disabled={disabled || isLoading}
            data-testid="btn-clear-server"
            className="btn btn-secondary"
          >
            Clear
          </button>
        )}
      </div>

      {error && (
        <div className="error-display">
          <div className="error-message">
            <strong>Error:</strong> {error.message}
          </div>
        </div>
      )}

      {merchant && (
        <div className="server-state-info">
          <h4>Server State</h4>
          <div className="status-item">
            <span className="status-label">Merchant ID:</span>
            <span className="status-value">{merchant.id}</span>
          </div>
          <div className="status-item">
            <span className="status-label">Public ID:</span>
            <span className="status-value">{merchant.publicId}</span>
          </div>
          <div className="status-item">
            <span className="status-label">Name:</span>
            <span className="status-value">{merchant.name}</span>
          </div>
        </div>
      )}
    </div>
  );
}
