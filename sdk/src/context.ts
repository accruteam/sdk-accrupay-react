import { createContext, useContext } from "react";
import type { AccruPayContextValue } from "./types";

export const AccruPayContext = createContext<AccruPayContextValue | null>(null);

export const useAccruPay = () => {
  const context = useContext(AccruPayContext);
  if (!context) {
    throw new Error("useAccruPay must be used within AccruPay component");
  }
  return context;
};
