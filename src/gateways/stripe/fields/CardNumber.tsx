import { useCallback, useEffect } from 'react';
import { CardNumberElement } from '@stripe/react-stripe-js';
import { useStripeContext } from '../context';

interface StripeCardNumberProps {
  className?: string;
  style?: React.CSSProperties;
}

export function StripeCardNumber({ className, style }: StripeCardNumberProps) {
  const { registerFieldReady, unregisterField } = useStripeContext();

  const handleReady = useCallback(() => {
    registerFieldReady('cardNumber', true);
  }, [registerFieldReady]);

  useEffect(() => {
    return () => {
      unregisterField('cardNumber');
    };
  }, [unregisterField]);

  return (
    <div className={className} style={style}>
      <CardNumberElement
        onReady={handleReady}
        options={{
          showIcon: true,
        }}
      />
    </div>
  );
}
