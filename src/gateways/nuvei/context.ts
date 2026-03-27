import { createContext, useContext } from 'react';
import type { AccruPayFieldName } from '../../types';

export interface NuveiInternalContextValue {
  isFormReady: boolean;

  registerField: (name: AccruPayFieldName, containerId: string) => void;
  unregisterField: (name: AccruPayFieldName) => void;

  cardHolderName: string;
  setCardHolderName: (value: string) => void;
}

export const NuveiInternalContext =
  createContext<NuveiInternalContextValue | null>(null);

export const useNuvei = () => {
  const context = useContext(NuveiInternalContext);
  if (!context) {
    throw new Error('useNuvei must be used within NuveiProvider');
  }
  return context;
};
