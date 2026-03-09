# AccruPay React SDK

[![npm version](https://img.shields.io/npm/v/@accrupay/react.svg)](https://www.npmjs.com/package/@accrupay/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React Version](https://img.shields.io/badge/React-%3E%3D16.8-blue.svg)](https://reactjs.org/)

The official React SDK for AccruPay Merchant API. Built with TypeScript and GraphQL, providing a seamless, type-safe payment integration experience for React applications. This SDK handles payment provider routing, form field management, and payment processing with minimal configuration.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Core Components](#core-components)
- [Hooks](#hooks)
- [Configuration](#configuration)
- [Integration with Node SDK](#integration-with-node-sdk)
- [Examples](#examples)
- [TypeScript Support](#typescript-support)
- [Error Handling](#error-handling)
- [Advanced Usage](#advanced-usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install @accrupay/react
# or
yarn add @accrupay/react
# or
pnpm add @accrupay/react
```

### Peer Dependencies

The SDK requires React 16.8 or higher (hooks support):

```bash
npm install react react-dom
```

## Quick Start

### 1. Wrap Your Payment Form with AccruPay

```tsx
import { AccruPay } from '@accrupay/react';

function PaymentPage() {
  return (
    <AccruPay
      merchantPublicId="your-merchant-public-id"
      transactionSessionId="session-id-from-server"
      environment="production"
    >
      <PaymentForm />
    </AccruPay>
  );
}
```

### 2. Use Payment Field Components

```tsx
import {
  CardNumber,
  CardExpiry,
  CardCVC,
  SubmitButton,
  useAccruPay,
} from '@accrupay/react';

function PaymentForm() {
  const { isReady, isProcessing, error } = useAccruPay();

  return (
    <form>
      <div>
        <label>Card Number</label>
        <CardNumber className="form-control" />
      </div>

      <div>
        <label>Expiry Date</label>
        <CardExpiry className="form-control" />
      </div>

      <div>
        <label>CVV</label>
        <CardCVC className="form-control" />
      </div>

      {error && <div className="error">{error}</div>}

      <SubmitButton
        disabled={!isReady || isProcessing}
        className="btn btn-primary"
      >
        {isProcessing ? 'Processing...' : 'Submit Payment'}
      </SubmitButton>
    </form>
  );
}
```

### 3. Complete Example

```tsx
import { AccruPay, CardNumber, CardExpiry, CardCVC, SubmitButton, useAccruPay } from '@accrupay/react';

function App() {
  return (
    <AccruPay
      merchantPublicId="merchant_123"
      transactionSessionId="session_456"
      environment="sandbox"
    >
      <PaymentForm />
    </AccruPay>
  );
}

function PaymentForm() {
  const { isReady, isProcessing, error } = useAccruPay();

  return (
    <div className="payment-form">
      <h2>Payment Details</h2>

      <div className="form-group">
        <label>Card Number</label>
        <CardNumber className="form-control" />
      </div>

      <div className="form-group">
        <label>Expiry Date</label>
        <CardExpiry className="form-control" />
      </div>

      <div className="form-group">
        <label>CVV</label>
        <CardCVC className="form-control" />
      </div>

      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}

      <SubmitButton
        disabled={!isReady || isProcessing}
        className="btn btn-primary"
        onSuccess={(result) => {
          console.log('Payment successful:', result);
          // Handle success (e.g., redirect to success page)
        }}
        onError={(error) => {
          console.error('Payment failed:', error);
          // Handle error (already shown in error state)
        }}
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </SubmitButton>
    </div>
  );
}
```

## Core Components

### `<AccruPay>`

The main provider component that wraps your payment form and manages the payment session.

#### Props

```typescript
interface AccruPayParams {
  merchantPublicId: string; // Required: Your merchant public identifier
  transactionSessionId?: string | null; // Optional: Session ID from server
  preloadProvider?: TRANSACTION_PROVIDER | null; // Optional: Preload specific provider
  environment?: 'production' | 'sandbox' | null; // Default: 'production'
  children: ReactNode; // Your payment form components
}
```

#### Usage Modes

**Mode 1: With Transaction Session ID** (Recommended)
```tsx
<AccruPay
  merchantPublicId="merchant_123"
  transactionSessionId="session_456"
>
  <PaymentForm />
</AccruPay>
```

**Mode 2: Preload Provider** (For custom session creation)
```tsx
<AccruPay
  merchantPublicId="merchant_123"
  preloadProvider={TRANSACTION_PROVIDER.NUVEI}
>
  <PaymentForm />
</AccruPay>
```

### `<CardNumber>`

Renders a card number input field that automatically formats and validates card numbers.

```tsx
<CardNumber
  className="form-control"
  style={{ width: '100%' }}
/>
```

**Props:**
- `className?: string` - CSS class name
- `style?: React.CSSProperties` - Inline styles

### `<CardExpiry>`

Renders an expiry date input field (MM/YY format).

```tsx
<CardExpiry
  className="form-control"
  style={{ width: '100%' }}
/>
```

**Props:**
- `className?: string` - CSS class name
- `style?: React.CSSProperties` - Inline styles

### `<CardCVC>`

Renders a CVC/CVV input field.

```tsx
<CardCVC
  className="form-control"
  style={{ width: '100%' }}
/>
```

**Props:**
- `className?: string` - CSS class name
- `style?: React.CSSProperties` - Inline styles

### `<SubmitButton>`

Renders a submit button that triggers payment processing. Automatically handles loading states and validation.

```tsx
<SubmitButton
  disabled={!isReady || isProcessing}
  className="btn btn-primary"
  onSuccess={(result) => {
    console.log('Payment successful:', result);
  }}
  onError={(error) => {
    console.error('Payment failed:', error);
  }}
>
  {isProcessing ? 'Processing...' : 'Pay Now'}
</SubmitButton>
```

**Props:**
- Extends `React.ButtonHTMLAttributes<HTMLButtonElement>` (except `onError`)
- `onSuccess?: (result: any) => void` - Success callback
- `onError?: (error: Error) => void` - Error callback

## Hooks

### `useAccruPay()`

Hook to access the AccruPay context. Must be used within an `<AccruPay>` component.

```typescript
interface AccruPayContextValue {
  isReady: boolean; // Whether the payment form is ready
  isProcessing: boolean; // Whether a payment is being processed
  error: string | null; // Current error message, if any
  submitPayment: (params?: Record<string, any>) => Promise<Record<string, any>>; // Programmatic payment submission
  provider: TRANSACTION_PROVIDER | null; // Current payment provider
  transactionSession: MerchantClientTransactionSession | null; // Current transaction session
}
```

**Example:**

```tsx
import { useAccruPay } from '@accrupay/react';

function PaymentStatus() {
  const { isReady, isProcessing, error, provider } = useAccruPay();

  if (!isReady) {
    return <div>Loading payment form...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div>
      <p>Provider: {provider}</p>
      <p>Status: {isProcessing ? 'Processing...' : 'Ready'}</p>
    </div>
  );
}
```

### Programmatic Payment Submission

You can submit payments programmatically using the `submitPayment` function from the hook or via a ref:

```tsx
import { useRef } from 'react';
import { AccruPay, AccruPayRef, useAccruPay } from '@accrupay/react';

function PaymentPage() {
  const accruPayRef = useRef<AccruPayRef>(null);

  const handleCustomSubmit = async () => {
    try {
      const result = await accruPayRef.current?.submitPayment({
        userDetails: { /* custom user details */ },
        shippingAddress: { /* shipping address */ },
        billingAddress: { /* billing address */ },
      });
      console.log('Payment result:', result);
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <AccruPay
      ref={accruPayRef}
      merchantPublicId="merchant_123"
      transactionSessionId="session_456"
    >
      <PaymentForm />
      <button onClick={handleCustomSubmit}>Custom Submit</button>
    </AccruPay>
  );
}
```

Or using the hook:

```tsx
function CustomSubmitButton() {
  const { submitPayment, isReady } = useAccruPay();

  const handleSubmit = async () => {
    if (!isReady) return;

    try {
      const result = await submitPayment({
        userDetails: { email: 'user@example.com' },
      });
      console.log('Payment successful:', result);
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return <button onClick={handleSubmit}>Submit Payment</button>;
}
```

## Configuration

### Environment

The SDK supports two environments:

- **`production`** (default): Production API endpoint
- **`sandbox`**: QA/Testing API endpoint

```tsx
<AccruPay
  merchantPublicId="merchant_123"
  transactionSessionId="session_456"
  environment="sandbox" // Use sandbox for testing
>
  <PaymentForm />
</AccruPay>
```

### API Endpoints

The SDK automatically uses the correct API endpoint based on the environment:

- Production: `https://api.pay.accru.co/graphql`
- Sandbox: `https://api.qa.pay.accru.co/graphql`

## Integration with Node SDK

The React SDK is designed to work seamlessly with the [AccruPay Node SDK](https://github.com/accruteam/sdk-accrupay-node). The typical flow is:

### 1. Server-Side: Create Payment Session

```typescript
// server.ts (Node.js)
import AccruPay, { TRANSACTION_PROVIDER, CURRENCY, COUNTRY_ISO_2 } from '@accrupay/node';

const sdk = new AccruPay({
  apiSecret: process.env.ACCRUPAY_API_SECRET,
  environment: 'production',
});

// Create a payment session
const session = await sdk.transactions.clientSessions.payments.start({
  transactionProvider: TRANSACTION_PROVIDER.NUVEI,
  data: {
    amount: 10000n, // $100.00 in cents
    currency: CURRENCY.USD,
    merchantInternalCustomerCode: 'customer-123',
    merchantInternalTransactionCode: 'txn-456',
    billing: {
      billingFirstName: 'John',
      billingLastName: 'Doe',
      billingEmail: 'john@example.com',
      billingAddressCountry: COUNTRY_ISO_2.US,
      billingAddressLine1: '123 Main St',
      billingAddressCity: 'New York',
      billingAddressState: 'NY',
      billingAddressPostalCode: '10001',
    },
    storePaymentMethod: false,
  },
});

// Return session.id to your frontend
res.json({ sessionId: session.id, merchantPublicId: session.merchant.publicId });
```

### 2. Client-Side: Use Session in React SDK

```tsx
// client.tsx (React)
import { AccruPay, CardNumber, CardExpiry, CardCVC, SubmitButton } from '@accrupay/react';

function PaymentPage({ sessionId, merchantPublicId }) {
  return (
    <AccruPay
      merchantPublicId={merchantPublicId}
      transactionSessionId={sessionId}
      environment="production"
    >
      <PaymentForm />
    </AccruPay>
  );
}
```

### 3. Server-Side: Verify Payment

```typescript
// After frontend payment completion
const transaction = await sdk.transactions.clientSessions.payments.verify({
  id: session.id,
});

console.log('Transaction status:', transaction.status);
console.log('Transaction amount:', transaction.amount);
```

## Examples

### Basic Payment Form

```tsx
import {
  AccruPay,
  CardNumber,
  CardExpiry,
  CardCVC,
  SubmitButton,
  useAccruPay,
} from '@accrupay/react';

function PaymentPage({ sessionId, merchantPublicId }) {
  return (
    <AccruPay
      merchantPublicId={merchantPublicId}
      transactionSessionId={sessionId}
    >
      <PaymentForm />
    </AccruPay>
  );
}

function PaymentForm() {
  const { isReady, isProcessing, error } = useAccruPay();

  return (
    <div className="payment-container">
      <h2>Complete Your Payment</h2>

      <div className="form-row">
        <div className="form-group">
          <label>Card Number</label>
          <CardNumber className="form-control" placeholder="1234 5678 9012 3456" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Expiry Date</label>
          <CardExpiry className="form-control" placeholder="MM/YY" />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <CardCVC className="form-control" placeholder="123" />
        </div>
      </div>

      {error && (
        <div className="alert alert-error" role="alert">
          {error}
        </div>
      )}

      <SubmitButton
        className="btn btn-primary btn-block"
        disabled={!isReady || isProcessing}
        onSuccess={(result) => {
          window.location.href = '/payment-success';
        }}
      >
        {isProcessing ? 'Processing...' : 'Pay $100.00'}
      </SubmitButton>
    </div>
  );
}
```

### Custom Styling

```tsx
import { CardNumber, CardExpiry, CardCVC, SubmitButton } from '@accrupay/react';

function StyledPaymentForm() {
  return (
    <div className="custom-payment-form">
      <CardNumber
        className="custom-card-input"
        style={{
          padding: '12px',
          border: '2px solid #e0e0e0',
          borderRadius: '8px',
          fontSize: '16px',
        }}
      />
      <CardExpiry className="custom-card-input" />
      <CardCVC className="custom-card-input" />
      <SubmitButton
        className="custom-submit-btn"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '14px 28px',
          borderRadius: '8px',
          border: 'none',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
        }}
      >
        Complete Payment
      </SubmitButton>
    </div>
  );
}
```

### Loading States and Error Handling

```tsx
import { useAccruPay } from '@accrupay/react';

function PaymentStatus() {
  const { isReady, isProcessing, error, provider } = useAccruPay();

  if (!isReady && !error) {
    return (
      <div className="loading-state">
        <div className="spinner" />
        <p>Initializing payment form...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-state">
        <h3>Payment Error</h3>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="payment-ready">
      <p>Provider: {provider}</p>
      <p>Status: {isProcessing ? 'Processing payment...' : 'Ready to pay'}</p>
    </div>
  );
}
```

### Conditional Rendering Based on State

```tsx
import { AccruPay, useAccruPay } from '@accrupay/react';

function SmartPaymentPage({ sessionId, merchantPublicId }) {
  return (
    <AccruPay
      merchantPublicId={merchantPublicId}
      transactionSessionId={sessionId}
    >
      <PaymentFlow />
    </AccruPay>
  );
}

function PaymentFlow() {
  const { isReady, isProcessing, error, transactionSession } = useAccruPay();

  if (!isReady) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen error={error} />;
  }

  if (isProcessing) {
    return <ProcessingScreen />;
  }

  return <PaymentForm />;
}
```

## TypeScript Support

The SDK is built with TypeScript and provides full type definitions:

```typescript
import {
  AccruPay,
  AccruPayParams,
  AccruPayRef,
  AccruPayContextValue,
  TRANSACTION_PROVIDER,
  MerchantClientTransactionSession,
} from '@accrupay/react';

// All components and hooks are fully typed
const params: AccruPayParams = {
  merchantPublicId: 'merchant_123',
  transactionSessionId: 'session_456',
  environment: 'production',
};

// Ref typing
const accruPayRef = useRef<AccruPayRef>(null);

// Context value typing
const context: AccruPayContextValue = useAccruPay();
```

### Available Types

```typescript
// Transaction Provider Enum
enum TRANSACTION_PROVIDER {
  NUVEI = 'NUVEI'
  STRIPE = 'STRIPE'
}

// Transaction Session
type MerchantClientTransactionSession = {
  id: string;
  token: string;
  providerCode: string;
  provider: TRANSACTION_PROVIDER;
  // ... other fields
};

// Component Props
type AccruPayParams = {
  merchantPublicId: string;
  transactionSessionId?: string | null;
  preloadProvider?: TRANSACTION_PROVIDER | null;
  environment?: 'production' | 'sandbox' | null;
  children: ReactNode;
};
```

## Error Handling

The SDK provides multiple ways to handle errors:

### 1. Error State from Hook

```tsx
function PaymentForm() {
  const { error, isReady } = useAccruPay();

  if (error) {
    return (
      <div className="error-container">
        <h3>Payment Error</h3>
        <p>{error}</p>
      </div>
    );
  }

  // ... rest of form
}
```

### 2. SubmitButton Error Callback

```tsx
<SubmitButton
  onError={(error) => {
    console.error('Payment submission failed:', error);
    // Show custom error UI
    showNotification(error.message, 'error');
  }}
  onSuccess={(result) => {
    console.log('Payment successful:', result);
    showNotification('Payment completed!', 'success');
  }}
>
  Submit Payment
</SubmitButton>
```

### 3. Try-Catch with Programmatic Submission

```tsx
function CustomSubmit() {
  const { submitPayment } = useAccruPay();

  const handleSubmit = async () => {
    try {
      const result = await submitPayment();
      // Handle success
    } catch (error) {
      if (error instanceof Error) {
        // Handle specific error
        console.error('Payment error:', error.message);
      }
    }
  };

  return <button onClick={handleSubmit}>Submit</button>;
}
```

### Common Error Scenarios

- **"Merchant identifier not provided"**: Missing `merchantPublicId` prop
- **"Transaction session ID or provider must be provided"**: Missing both `transactionSessionId` and `preloadProvider`
- **"Payment provider not ready"**: Attempting to submit before form is ready
- **"Session token not available"**: Invalid or expired session
- **"Payment failed"**: Provider-specific payment failure

## Advanced Usage

### Custom Cardholder Name Input

The SDK doesn't provide a cardholder name field by default, but you can easily add one:

```tsx
import { useState } from 'react';
import { useAccruPay } from '@accrupay/react';

function CardholderNameInput() {
  const [name, setName] = useState('');
  // The SDK will use this value when submitting payment
  // You may need to pass it via submitPayment params depending on provider

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Cardholder Name"
      className="form-control"
    />
  );
}
```

### Provider-Specific Configuration

The SDK automatically handles provider-specific configurations. Currently supported providers:

- **NUVEI**: Fully supported with WebSDK payment.
- **STRIPE**: Fully supported with split card elements (CardNumber, CardExpiry, CardCVC) and Payment Intents.

### Ref Access for External Control

```tsx
import { useRef } from 'react';
import { AccruPay, AccruPayRef } from '@accrupay/react';

function PaymentPage() {
  const accruPayRef = useRef<AccruPayRef>(null);

  // Submit payment from external button
  const handleExternalSubmit = async () => {
    try {
      const result = await accruPayRef.current?.submitPayment();
      console.log('Payment result:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <AccruPay
        ref={accruPayRef}
        merchantPublicId="merchant_123"
        transactionSessionId="session_456"
      >
        <PaymentForm />
      </AccruPay>
      <button onClick={handleExternalSubmit}>Pay from Outside</button>
    </>
  );
}
```

## Requirements

- React >= 16.8 (hooks support required)
- React DOM >= 16.8
- TypeScript >= 4.5 (optional but recommended)

## Browser Support

The SDK supports all modern browsers that support:
- ES6+ features
- React 16.8+
- Fetch API

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- Documentation: [https://docs.accru.co](https://docs.accru.co)
- Issues: [GitHub Issues](https://github.com/accruteam/sdk-accrupay-react/issues)
- Email: support@accru.co

## Related Packages

- [@accrupay/node](https://github.com/accruteam/sdk-accrupay-node) - Node.js SDK for server-side operations

