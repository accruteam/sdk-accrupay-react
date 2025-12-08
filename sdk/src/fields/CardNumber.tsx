import { useAccruPay } from '../context';
import { NuveiCardNumber } from '../gateways/nuvei/fields/CardNumber';

interface CardNumberProps {
  className?: string;
  style?: React.CSSProperties;
}

export function CardNumber(props: CardNumberProps) {
  const { provider } = useAccruPay();
  if (!provider) return null;

  switch (provider) {
    case 'NUVEI':
      return <NuveiCardNumber {...props} />;
    default:
      return <div>Provider not supported</div>;
  }
}
