import {
  CardNumber,
  CardExpiry,
  CardCVC,
  SubmitButton,
  useAccruPay,
} from '@accrupay/react';
import { CardholderNameInput } from '../components/CardholderNameInput';

export function PaymentForm() {
  const { isReady, isProcessing } = useAccruPay();

  return (
    <div className="sdk-form">
      <div className="form-group">
        <label htmlFor="cardholder-name" data-testid="cardholder-name-label">
          Cardholder Name
        </label>
        <CardholderNameInput />
      </div>

      <div className="form-group">
        <label htmlFor="card-number" data-testid="card-number-label">
          Card Number
        </label>
        <div data-testid="card-number-field">
          <CardNumber className="form-control" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="card-expiry" data-testid="card-expiry-label">
          Expiry Date
        </label>
        <div data-testid="card-expiry-field">
          <CardExpiry className="form-control" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="card-cvc" data-testid="card-cvc-label">
          CVV
        </label>
        <div data-testid="card-cvc-field">
          <CardCVC className="form-control" />
        </div>
      </div>

      <SubmitButton
        data-testid="submit-button"
        className="submit-btn"
        disabled={!isReady || isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Submit Payment'}
      </SubmitButton>
    </div>
  );
}
