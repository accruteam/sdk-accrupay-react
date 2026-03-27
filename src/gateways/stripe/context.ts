import { createContext, useContext } from 'react';
import type { AccruPayFieldName } from '../../types';

export interface StripeInternalContextValue {
  isFormReady: boolean;

  registerFieldReady: (name: AccruPayFieldName, isReady: boolean) => void;
  unregisterField: (name: AccruPayFieldName) => void;

  cardHolderName: string;
  setCardHolderName: (value: string) => void;
}

export const StripeInternalContext =
  createContext<StripeInternalContextValue | null>(null);

export const useStripeContext = () => {
  const context = useContext(StripeInternalContext);
  if (!context) {
    throw new Error('useStripeContext must be used within StripeProvider');
  }
  return context;
};
