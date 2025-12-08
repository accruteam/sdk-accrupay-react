import { NuveiField } from "./NuveiField";

interface NuveiCardNumberProps {
  className?: string;
  style?: React.CSSProperties;
}

export function NuveiCardNumber({ className, style }: NuveiCardNumberProps) {
  return (
    <NuveiField fieldName="cardNumber" className={className} style={style} />
  );
}
