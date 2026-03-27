import { useAccruPay } from '../../../context';
import type { AccruPayTransactionSubmitParams } from '../../../types';

interface NuveiSubmitButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onError'
> {
  onSuccess?: (result: any) => void;
  onError?: (error: Error) => void;
  submitParams?: AccruPayTransactionSubmitParams;
}

export function NuveiSubmitButton({
  onSuccess,
  onError,
  submitParams,
  disabled,
  children,
  ...buttonProps
}: NuveiSubmitButtonProps) {
  const { submitPayment, isProcessing, isReady } = useAccruPay();

  const handleClick = async () => {
    if (!isReady || isProcessing) return;

    try {
      const result = await submitPayment(submitParams);
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
