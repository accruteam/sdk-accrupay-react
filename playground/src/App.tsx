import { useState, useRef, useEffect, useCallback } from "react";
import {
  AccruPay,
  AccruPayRef,
  AccruPayParams,
  Merchant,
  MerchantClientTransactionSession,
  TRANSACTION_PROVIDER,
} from "@accrupay/react";
import { EnvironmentSelector } from "./components/EnvironmentSelector";
import { TestCardHelper } from "./components/TestCardHelper";
import { StatusDisplay } from "./components/StatusDisplay";
import { ServerConfiguration } from "./views/ServerConfiguration";
import { SessionConfiguration } from "./views/SessionConfiguration";
import { ClientConfiguration } from "./views/ClientConfiguration";
import { Payment } from "./views/Payment";
import { Interaction } from "./views/Interaction";
import "./App.css";

function App() {
  const [environment, setEnvironment] =
    useState<NonNullable<AccruPayParams["environment"]>>("sandbox");
  const [serverSecret, setServerSecret] = useState("");
  const [serverMerchant, setServerMerchant] = useState<Merchant | null>(null);
  const [merchantPublicId, setMerchantPublicId] = useState("");
  const [transactionSessionId, setTransactionSessionId] = useState("");
  const [preloadProvider, setPreloadProvider] =
    useState<TRANSACTION_PROVIDER | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [refSubmissionError, setRefSubmissionError] = useState<Error | null>(
    null,
  );
  const [hasRef, setHasRef] = useState(false);
  const [sessionFormResetKey, setSessionFormResetKey] = useState(0);

  const accruPayRef = useRef<AccruPayRef>(null);

  useEffect(() => {
    const checkRef = () => {
      setHasRef(accruPayRef.current !== null);
    };
    checkRef();
    const interval = setInterval(checkRef, 100);
    return () => clearInterval(interval);
  }, [isLoaded]);

  const isValidConfig = !!(
    merchantPublicId &&
    (transactionSessionId || preloadProvider)
  );

  const handleServerMerchantLoaded = (merchant: Merchant | null) => {
    setServerMerchant(merchant);
    if (merchant?.publicId) {
      setMerchantPublicId(merchant.publicId);
    }
  };

  const handleSessionCreated = (session: MerchantClientTransactionSession) => {
    if (session.id) {
      setTransactionSessionId(session.id);
    }
  };

  const handleLoad = () => {
    if (isValidConfig) {
      setIsLoaded(true);
    }
  };

  const handleResetSDK = () => {
    setIsLoaded(false);
    setMerchantPublicId("");
    setTransactionSessionId("");
    setPreloadProvider(null);
    setRefSubmissionError(null);
  };

  const handleResetSession = () => {
    setSessionFormResetKey(prev => prev + 1);
  };

  const handleResetEverything = () => {
    setIsLoaded(false);
    setMerchantPublicId("");
    setTransactionSessionId("");
    setPreloadProvider(null);
    setRefSubmissionError(null);
    setSessionFormResetKey(prev => prev + 1);
    setServerMerchant(null);
    setServerSecret("");
  };

  const handleUseSession = (sessionId: string) => {
    if (!isLoaded) {
      setTransactionSessionId(sessionId);
    }
  };

  const handleSubmitViaRef = useCallback(async () => {
    setRefSubmissionError(null);
    try {
      const result = await accruPayRef.current?.submitPayment();
      console.log("Payment submitted via ref:", result);
    } catch (error) {
      console.error("Payment submission error:", error);
      const err = error instanceof Error ? error : new Error(String(error));
      setRefSubmissionError(err);
    }
  }, []);

  return (
    <div className="app" data-testid="app-root">
      <header className="app-header">
        <h1 data-testid="app-title">AccruPay SDK Test Suite</h1>
        <p className="subtitle">
          Comprehensive testing interface for payment SDK
        </p>
      </header>

      <div className="app-container">
        <aside className="control-panel" data-testid="control-panel">
          <EnvironmentSelector
            environment={environment}
            onChange={setEnvironment}
            disabled={isLoaded}
          />

          <div className="control-group">
            <h2>Server Configuration</h2>
            <ServerConfiguration
              environment={environment}
              onMerchantLoaded={handleServerMerchantLoaded}
              onSecretChange={setServerSecret}
              disabled={isLoaded}
            />
          </div>

          {serverMerchant && serverSecret && (
            <div className="control-group">
              <h2>Session Configuration</h2>
              <SessionConfiguration
                key={sessionFormResetKey}
                environment={environment}
                merchantPublicId={serverMerchant.publicId || ""}
                secret={serverSecret}
                onSessionCreated={handleSessionCreated}
                onReset={handleResetSession}
                onUseSession={handleUseSession}
                isSDKLoaded={isLoaded}
              />
            </div>
          )}

          <div className="control-group">
            <h2>Client Configuration</h2>
            <ClientConfiguration
              environment={environment}
              merchantPublicId={merchantPublicId}
              transactionSessionId={transactionSessionId}
              preloadProvider={preloadProvider}
              onMerchantPublicIdChange={setMerchantPublicId}
              onTransactionSessionIdChange={setTransactionSessionId}
              onPreloadProviderChange={setPreloadProvider}
              disabled={isLoaded}
            />
            <div style={{ marginTop: "12px" }}>
              <button
                onClick={handleResetSDK}
                data-testid="btn-reset-sdk"
                className="btn btn-secondary"
                style={{ width: "100%" }}
              >
                Reset Client Config
              </button>
            </div>
          </div>

          <div className="control-actions">
            {!isLoaded ? (
              <button
                onClick={handleLoad}
                disabled={!isValidConfig}
                data-testid="btn-load"
                className="btn btn-primary"
              >
                Load SDK
              </button>
            ) : (
              <button
                onClick={() => setIsLoaded(false)}
                data-testid="btn-unload"
                className="btn btn-secondary"
              >
                Unload SDK
              </button>
            )}
          </div>

          <div className="control-actions" style={{ marginTop: "12px" }}>
            <button
              onClick={handleResetEverything}
              data-testid="btn-reset-everything"
              className="btn btn-secondary"
              style={{ width: "100%" }}
            >
              Reset Everything
            </button>
          </div>

          {!isValidConfig && !isLoaded && (
            <div className="control-warning" data-testid="config-warning">
              ⚠️ Merchant Public ID and either Transaction Session ID or Preload
              Provider are required to load SDK
            </div>
          )}

          {isLoaded && (
            <div className="control-info" data-testid="sdk-loaded-indicator">
              ✓ SDK Loaded - Configuration locked
            </div>
          )}
        </aside>

        <main className="sdk-container" data-testid="sdk-container">
          {isLoaded && isValidConfig ? (
            <AccruPay
              ref={accruPayRef}
              merchantPublicId={merchantPublicId}
              transactionSessionId={transactionSessionId || undefined}
              preloadProvider={preloadProvider || undefined}
              environment={environment}
            >
              <div data-testid="sdk-renderer" className="sdk-renderer">
                <TestCardHelper className="test-card-helper" />
                <Payment />
                <StatusDisplay />
                <Interaction
                  refSubmissionError={refSubmissionError}
                  onRefSubmit={handleSubmitViaRef}
                  hasRef={hasRef}
                />
              </div>
            </AccruPay>
          ) : (
            <div className="sdk-placeholder" data-testid="sdk-placeholder">
              <p>
                {isLoaded
                  ? "SDK is unloaded"
                  : "Configure the SDK parameters and click 'Load SDK' to see the payment form"}
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
