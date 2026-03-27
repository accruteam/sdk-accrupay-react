import { useNuvei } from '../context';

interface NuveiCardholderNameProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value'
> {
  className?: string;
  style?: React.CSSProperties;
}

export function NuveiCardholderName({
  className,
  style,
  ...inputProps
}: NuveiCardholderNameProps) {
  const { cardHolderName, setCardHolderName } = useNuvei();

  return (
    <input
      {...inputProps}
      type={inputProps.type ?? 'text'}
      className={className}
      style={style}
      value={cardHolderName}
      onChange={event => {
        setCardHolderName(event.target.value);
        inputProps.onChange?.(event);
      }}
    />
  );
}
