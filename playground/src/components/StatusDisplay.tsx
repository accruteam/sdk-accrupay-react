import { useAccruPay } from '@accrupay/react';

export function StatusDisplay() {
  const { isReady, isProcessing, error, provider, transactionSession } =
    useAccruPay();

  return (
    <div className="sdk-status" data-testid="sdk-status">
      <div className="status-item">
        <span className="status-label">Ready:</span>
        <span
          data-testid="status-ready"
          className={`status-value ${isReady ? 'ready' : 'not-ready'}`}
        >
          {isReady ? 'Yes' : 'No'}
        </span>
      </div>
      <div className="status-item">
        <span className="status-label">Processing:</span>
        <span
          data-testid="status-processing"
          className={`status-value ${isProcessing ? 'processing' : ''}`}
        >
          {isProcessing ? 'Yes' : 'No'}
        </span>
      </div>
      <div className="status-item">
        <span className="status-label">Provider:</span>
        <span data-testid="status-provider" className="status-value">
          {provider || 'None'}
        </span>
      </div>
      {transactionSession && (
        <div className="status-item">
          <span className="status-label">Session ID:</span>
          <span data-testid="status-session-id" className="status-value">
            {transactionSession.id}
          </span>
        </div>
      )}
      {error && (
        <div className="status-item error">
          <span className="status-label">Error:</span>
          <span data-testid="status-error" className="status-value">
            {error}
          </span>
        </div>
      )}
    </div>
  );
}
