# AccruPay React SDK

React SDK for loading an AccruPay transaction session, rendering provider-aware payment fields, and submitting payments from React apps.

## Install

```bash
npm install @accrupay/react react react-dom
```

## Quick start

```tsx
import {
  AccruPay,
  CardholderName,
  CardNumber,
  CardExpiry,
  CardCVC,
  SubmitButton,
  useAccruPay,
} from '@accrupay/react';

export function PaymentPage() {
  return (
    <AccruPay
      merchantPublicId="merchant_public_id"
      transactionSessionId="client_session_id"
      environment="sandbox"
    >
      <PaymentForm />
    </AccruPay>
  );
}

function PaymentForm() {
  const { isReady, isProcessing, error } = useAccruPay();

  return (
    <form>
      <CardholderName placeholder="Name on card" />
      <CardNumber />
      <CardExpiry />
      <CardCVC />

      {error && <div role="alert">{error}</div>}

      <SubmitButton disabled={!isReady || isProcessing}>
        {isProcessing ? 'Processing...' : 'Pay now'}
      </SubmitButton>
    </form>
  );
}
```

## Public API

### Components

- `AccruPay`
- `CardholderName`
- `CardNumber`
- `CardExpiry`
- `CardCVC`
- `SubmitButton`

### Hook

- `useAccruPay()`

### Types

- `AccruPayParams`
- `AccruPayContextValue`
- `AccruPayRef`
- generated GraphQL types re-exported from `@accrupay/react`

## AccruPay

```ts
type AccruPayParams = {
  merchantPublicId: string;
  transactionSessionId?: string | null;
  preloadProvider?: TRANSACTION_PROVIDER | null;
  environment?: 'production' | 'sandbox' | null;
  url?: string | null;
  children: ReactNode;
};
```

Use one of these modes:

- `transactionSessionId`
  Use this when your backend already created a client transaction session.
- `preloadProvider`
  Use this when you want to preload provider config without loading a session yet.

## Submission modes

All submission modes call the same provider submit path. The difference is where the trigger lives.

### 1. Direct submit with `SubmitButton`

Use this by default when the submit trigger is inside the payment form.

```tsx
<SubmitButton onSuccess={(result) => console.log(result)}>
  Pay now
</SubmitButton>
```

### 2. Hook submit with `useAccruPay().submitPayment`

Use this when you need a custom trigger inside the `<AccruPay>` tree.

```tsx
function CustomSubmitButton() {
  const { submitPayment, isReady, isProcessing } = useAccruPay();

  const handleClick = async () => {
    if (!isReady || isProcessing) return;
    await submitPayment();
  };

  return <button onClick={handleClick}>Submit payment</button>;
}
```

### 3. Ref submit with `AccruPayRef`

Use this when the trigger must live outside the `<AccruPay>` children.

```tsx
import { useRef } from 'react';
import { AccruPay, type AccruPayRef } from '@accrupay/react';

function Page() {
  const accruPayRef = useRef<AccruPayRef>(null);

  return (
    <>
      <AccruPay
        ref={accruPayRef}
        merchantPublicId="merchant_public_id"
        transactionSessionId="client_session_id"
      >
        <PaymentForm />
      </AccruPay>

      <button onClick={() => accruPayRef.current?.submitPayment()}>
        Submit from outside
      </button>
    </>
  );
}
```

Recommendation:

- use `SubmitButton` by default
- use the hook for custom in-tree UI
- use the ref only when you need imperative external control

## Submit params

The SDK supports extra submit-time data through:

```ts
type AccruPayTransactionSubmitParams = {
  billing?: BillingDataSchema;
};
```

You can pass submit params through:

- `submitParams` on `SubmitButton`
- `submitPayment(params)` from `useAccruPay()`
- `submitPayment(params)` from `AccruPayRef`

Example:

```tsx
const submitParams = {
  billing: {
    billingFirstName: 'John',
    billingLastName: 'Doe',
    billingEmail: 'john@example.com',
    billingAddressCountry: 'US',
    billingAddressLine1: '123 Main St',
    billingAddressCity: 'New York',
    billingAddressState: 'NY',
    billingAddressPostalCode: '10001',
  },
};

<SubmitButton submitParams={submitParams}>Pay now</SubmitButton>;
```

Submit params affect what is sent to the provider during submission. They do not mutate the loaded transaction session.

## Environments

- `production`
  Uses `https://api.pay.accru.co/graphql`
- `sandbox`
  Uses `https://api.qa.pay.accru.co/graphql`

You can also override the endpoint with the `url` prop.

## Integration with `@accrupay/node`

Typical server/client flow:

1. Backend creates a client transaction session with `@accrupay/node`
2. Frontend loads that `transactionSessionId` into `<AccruPay>`
3. Frontend submits card data
4. Backend verifies the session result

Example server-side session creation:

```ts
import AccruPay, {
  COUNTRY_ISO_2,
  CURRENCY,
  TRANSACTION_PROVIDER,
} from '@accrupay/node';

const sdk = new AccruPay({
  apiSecret: process.env.ACCRUPAY_API_SECRET!,
  environment: 'production',
});

const session = await sdk.transactions.clientSessions.payments.start({
  transactionProvider: TRANSACTION_PROVIDER.NUVEI,
  data: {
    amount: 10000n,
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
```

## Error handling

The SDK exposes:

- `error` from `useAccruPay()`
- `onError` on `SubmitButton`
- rejected promises from `submitPayment(...)`

Common runtime errors:

- `Merchant identifier not provided`
- `Transaction session ID or provider must be provided`
- `Payment provider not ready`
- `Session or client secret not available`
- provider-specific payment errors returned during submission

## Requirements

- React `>=16.8 <21`
- React DOM `>=16.8 <21`
- Node `>=18` for package development/build

## Related package

- `@accrupay/node`

## License

MIT
