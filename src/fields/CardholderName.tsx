import { useAccruPay } from '../context';
import { NuveiCardholderName } from '../gateways/nuvei/fields/CardholderName';
import { StripeCardholderName } from '../gateways/stripe/fields/CardholderName';

interface CardholderNameProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value'
> {
  className?: string;
  style?: React.CSSProperties;
}

export function CardholderName({ ...props }: CardholderNameProps) {
  const { provider } = useAccruPay();
  if (!provider) return null;

  switch (provider) {
    case 'NUVEI':
      return <NuveiCardholderName {...props} />;
    case 'STRIPE':
      return <StripeCardholderName {...props} />;
    default:
      return <input {...props} type={props.type ?? 'text'} />;
  }
}
