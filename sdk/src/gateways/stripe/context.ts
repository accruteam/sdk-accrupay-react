import { createContext, useContext } from 'react';
import type { AccruPayFieldName } from '../../types';

export interface StripeContextValue {
  isFormReady: boolean;

  registerFieldReady: (name: AccruPayFieldName, isReady: boolean) => void;
  unregisterField: (name: AccruPayFieldName) => void;

  cardHolderName: string;
  setCardHolderName: (value: string) => void;
}

export const StripeContext = createContext<StripeContextValue | null>(null);

export const useStripeContext = () => {
  const context = useContext(StripeContext);
  if (!context) {
    throw new Error('useStripeContext must be used within StripeProvider');
  }
  return context;
};
