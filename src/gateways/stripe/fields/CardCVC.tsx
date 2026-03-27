import { useCallback, useEffect } from 'react';
import { CardCvcElement } from '@stripe/react-stripe-js';
import { useStripeContext } from '../context';

interface StripeCardCVCProps {
  className?: string;
  style?: React.CSSProperties;
}

export function StripeCardCVC({ className, style }: StripeCardCVCProps) {
  const { registerFieldReady, unregisterField } = useStripeContext();

  const handleReady = useCallback(() => {
    registerFieldReady('cardCVC', true);
  }, [registerFieldReady]);

  useEffect(() => {
    return () => {
      unregisterField('cardCVC');
    };
  }, [unregisterField]);

  return (
    <div className={className} style={style}>
      <CardCvcElement onReady={handleReady} />
    </div>
  );
}
