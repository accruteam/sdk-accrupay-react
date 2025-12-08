import { useAccruPay } from '../context';
import { NuveiCardExpiry } from '../gateways/nuvei/fields/CardExpiry';

interface CardExpiryProps {
  className?: string;
  style?: React.CSSProperties;
}

export function CardExpiry(props: CardExpiryProps) {
  const { provider } = useAccruPay();
  if (!provider) return null;

  switch (provider) {
    case 'NUVEI':
      return <NuveiCardExpiry {...props} />;
    default:
      return <div>Provider not supported</div>;
  }
}
