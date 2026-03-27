import { useCallback, useEffect } from 'react';
import { CardExpiryElement } from '@stripe/react-stripe-js';
import { useStripeContext } from '../context';

interface StripeCardExpiryProps {
  className?: string;
  style?: React.CSSProperties;
}

export function StripeCardExpiry({ className, style }: StripeCardExpiryProps) {
  const { registerFieldReady, unregisterField } = useStripeContext();

  const handleReady = useCallback(() => {
    registerFieldReady('cardExpiry', true);
  }, [registerFieldReady]);

  useEffect(() => {
    return () => {
      unregisterField('cardExpiry');
    };
  }, [unregisterField]);

  return (
    <div className={className} style={style}>
      <CardExpiryElement onReady={handleReady} />
    </div>
  );
}
