import { useAccruPay } from '../../../context';

interface StripeSubmitButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onError'
> {
  onSuccess?: (result: any) => void;
  onError?: (error: Error) => void;
}

export function StripeSubmitButton({
  onSuccess,
  onError,
  disabled,
  children,
  ...buttonProps
}: StripeSubmitButtonProps) {
  const { submitPayment, isProcessing, isReady } = useAccruPay();

  const handleClick = async () => {
    if (!isReady || isProcessing) return;

    try {
      const result = await submitPayment();
      onSuccess?.(result);
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      onError?.(err);
    }
  };

  return (
    <button
      {...buttonProps}
      onClick={handleClick}
      disabled={disabled || !isReady || isProcessing}
    >
      {children || (isProcessing ? 'Processing...' : 'Submit Payment')}
    </button>
  );
}
