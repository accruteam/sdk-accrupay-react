import { NuveiField } from './NuveiField';

interface NuveiCardCVCProps {
  className?: string;
  style?: React.CSSProperties;
}

export function NuveiCardCVC({ className, style }: NuveiCardCVCProps) {
  return <NuveiField fieldName="cardCVC" className={className} style={style} />;
}
