import { useStripeContext } from '../context';

interface StripeCardholderNameProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value'
> {
  className?: string;
  style?: React.CSSProperties;
}

export function StripeCardholderName({
  className,
  style,
  ...inputProps
}: StripeCardholderNameProps) {
  const { cardHolderName, setCardHolderName } = useStripeContext();

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
