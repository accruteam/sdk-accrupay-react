/// <reference types="vite/client" />
//

interface Window {
  SafeCharge: (config: { env: string, merchantId: string, merchantSiteId: string }) => any;
}
