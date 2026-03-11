import { useAccruPay } from '../context';
import { NuveiSubmitButton } from '../gateways/nuvei/fields/SubmitButton';
import { StripeSubmitButton } from '../gateways/stripe/fields/SubmitButton';

interface SubmitButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onError'
> {
  onSuccess?: (result: any) => void;
  onError?: (error: Error) => void;
}

export function SubmitButton(props: SubmitButtonProps) {
  const { provider } = useAccruPay();
  if (!provider) return null;

  switch (provider) {
    case 'NUVEI':
      return <NuveiSubmitButton {...props} />;
    case 'STRIPE':
      return <StripeSubmitButton {...props} />;
    default:
      return <button disabled>Provider not supported</button>;
  }
}
