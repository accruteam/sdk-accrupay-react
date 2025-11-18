import { NuveiField } from "./NuveiField";

interface NuveiCardExpiryProps {
  className?: string;
  style?: React.CSSProperties;
}

export function NuveiCardExpiry({ className, style }: NuveiCardExpiryProps) {
  return (
    <NuveiField fieldName="cardExpiry" className={className} style={style} />
  );
}
