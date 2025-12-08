import { createContext, useContext } from "react";
import type { AccruPayFieldName } from "../../types";

export interface NuveiContextValue {
  isFormReady: boolean;

  registerField: (name: AccruPayFieldName, containerId: string) => void;
  unregisterField: (name: AccruPayFieldName) => void;

  cardHolderName: string;
  setCardHolderName: (value: string) => void;
}

export const NuveiContext = createContext<NuveiContextValue | null>(null);

export const useNuvei = () => {
  const context = useContext(NuveiContext);
  if (!context) {
    throw new Error("useNuvei must be used within NuveiProvider");
  }
  return context;
};
