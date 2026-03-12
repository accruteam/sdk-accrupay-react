import { useAccruPay } from '../context';
import { NuveiCardCVC } from '../gateways/nuvei/fields/CardCVC';
import { StripeCardCVC } from '../gateways/stripe/fields/CardCVC';

interface CardCVCProps {
  className?: string;
  style?: React.CSSProperties;
}

export function CardCVC(props: CardCVCProps) {
  const { provider } = useAccruPay();
  if (!provider) return null;

  switch (provider) {
    case 'NUVEI':
      return <NuveiCardCVC {...props} />;
    case 'STRIPE':
      return <StripeCardCVC {...props} />;
    default:
      return <div>Provider not supported</div>;
  }
}
