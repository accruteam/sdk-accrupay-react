import { forwardRef, memo, useEffect, useState } from "react";
import type {
  AccruPayInternalProviderProps,
  AccruPayInternalProviderRef,
} from "../../types";
import type { SafeChargeInstance, SafeChargeFactory } from "./types";
import { NuveiProvider } from "./provider";
import { loadScript } from "../../utils/loadScript.util";
import type { MerchantClientTransactionSessionNuveiBaseConfig } from "../../api/gql/graphql";

const NuveiGateway = memo(
  forwardRef<AccruPayInternalProviderRef, AccruPayInternalProviderProps>(
    ({ providerBaseConfig, children, onError, ...props }, ref) => {
      const { merchantId, merchantSiteId, env } =
        providerBaseConfig as MerchantClientTransactionSessionNuveiBaseConfig;

      const [safeCharge, setSafeCharge] = useState<SafeChargeInstance | null>(
        null,
      );

      useEffect(() => {
        if (!merchantId || !merchantSiteId || !env) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setSafeCharge(null);
          onError?.(
            new Error(
              "Missing Nuvei configuration: merchantId, merchantSiteId, or env",
            ),
          );
          return;
        }

        loadScript(
          "https://cdn.safecharge.com/safecharge_resources/v1/websdk/safecharge.js",
        )
          .then(async () => {
            if (
              !!window &&
              typeof (window as { SafeCharge?: SafeChargeFactory })
                ?.SafeCharge === "function"
            ) {
              const SafeCharge = (
                window as unknown as Window & { SafeCharge: SafeChargeFactory }
              ).SafeCharge;
              setSafeCharge(
                SafeCharge({
                  env: env as "prod" | "int",
                  merchantId,
                  merchantSiteId,
                }),
              );
            }
          })
          .catch(error => {
            onError?.(
              new Error(`Failed to load Nuvei SDK script: ${String(error)}`),
            );
          });
      }, [merchantId, merchantSiteId, env, onError]);

      if (!safeCharge) {
        return null;
      }

      return (
        <NuveiProvider
          {...props}
          providerBaseConfig={providerBaseConfig}
          safeCharge={safeCharge}
          ref={ref}
        >
          {children}
        </NuveiProvider>
      );
    },
  ),
);

export { NuveiGateway };
