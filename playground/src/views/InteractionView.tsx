import { useState } from 'react';
import { useAccruPay } from '@accrupay/react';

interface InteractionPanelProps {
  refSubmissionError: Error | null;
  onRefSubmit: () => void;
  hasRef: boolean;
}

export function InteractionPanel({
  refSubmissionError,
  onRefSubmit,
  hasRef,
}: InteractionPanelProps) {
  const hookState = useAccruPay();
  const [stateSubmissionError, setStateSubmissionError] =
    useState<Error | null>(null);

  const handleSubmitViaState = async () => {
    setStateSubmissionError(null);
    try {
      const result = await hookState.submitPayment();
      console.log('Payment submitted via state:', result);
    } catch (error) {
      console.error('Payment submission error:', error);
      const err = error instanceof Error ? error : new Error(String(error));
      setStateSubmissionError(err);
    }
  };

  const stateJson = JSON.stringify(hookState, null, 2);
  const refErrorJson = JSON.stringify(
    {
      error: refSubmissionError
        ? {
            message: refSubmissionError.message,
            name: refSubmissionError.name,
            stack: refSubmissionError.stack,
          }
        : null,
    },
    null,
    2,
  );

  return (
    <div className="interaction-panel" data-testid="interaction-panel">
      <div className="hook-state-display" data-testid="hook-state-display">
        <h3>Hook State (useAccruPay)</h3>

        <div className="hook-state-visual">
          <div className="status-item">
            <span className="status-label">Ready:</span>
            <span
              data-testid="hook-state-ready"
              className={`status-value ${hookState.isReady ? 'ready' : 'not-ready'}`}
            >
              {hookState.isReady ? 'Yes' : 'No'}
            </span>
          </div>
          <div className="status-item">
            <span className="status-label">Processing:</span>
            <span
              data-testid="hook-state-processing"
              className={`status-value ${hookState.isProcessing ? 'processing' : ''}`}
            >
              {hookState.isProcessing ? 'Yes' : 'No'}
            </span>
          </div>
          <div className="status-item">
            <span className="status-label">Provider:</span>
            <span data-testid="hook-state-provider" className="status-value">
              {hookState.provider || 'None'}
            </span>
          </div>
          {hookState.transactionSession && (
            <div className="status-item">
              <span className="status-label">Session ID:</span>
              <span
                data-testid="hook-state-session-id"
                className="status-value"
              >
                {hookState.transactionSession.id}
              </span>
            </div>
          )}
          {hookState.error && (
            <div className="status-item error">
              <span className="status-label">Error:</span>
              <span data-testid="hook-state-error" className="status-value">
                {hookState.error}
              </span>
            </div>
          )}
          {stateSubmissionError && (
            <div className="status-item error">
              <span className="status-label">Submission Error:</span>
              <span
                data-testid="hook-state-submission-error"
                className="status-value"
              >
                {stateSubmissionError.message}
              </span>
            </div>
          )}
        </div>

        <div className="hook-state-actions">
          <h4>State-based Interaction</h4>
          <button
            onClick={handleSubmitViaState}
            disabled={!hookState.isReady || hookState.isProcessing}
            data-testid="btn-submit-via-state"
            className="btn btn-primary"
          >
            Submit via State (Hook)
          </button>
          {stateSubmissionError && (
            <div className="error-display">
              <div className="error-message">
                <strong>Submission Error:</strong>{' '}
                {stateSubmissionError.message}
              </div>
            </div>
          )}
        </div>

        <div className="hook-state-json">
          <h4>State JSON</h4>
          <pre data-testid="hook-state-json" className="json-display">
            {stateJson}
          </pre>
        </div>
      </div>

      <div
        className="ref-interaction-display"
        data-testid="ref-interaction-display"
      >
        <h3>Ref-based Interaction</h3>

        {hasRef && (
          <div className="ref-state-info">
            <p>Ref is available: Yes</p>
            <p>Methods available: submitPayment</p>
          </div>
        )}

        <div className="ref-interaction-actions">
          <button
            onClick={onRefSubmit}
            data-testid="btn-submit-via-ref"
            className="btn btn-primary"
          >
            Submit via Ref
          </button>
          {refSubmissionError && (
            <div className="error-display">
              <div className="error-message">
                <strong>Error:</strong> {refSubmissionError.message}
              </div>
              <div className="error-json">
                <h4>Error JSON</h4>
                <pre className="json-display">{refErrorJson}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
