export function getProvider() {
  return 'nuvei';
}

export function getConfig() {
  const { merchantId, merchantSiteId } = JSON.parse(import.meta.env.VITE_NUVEI_CONFIG);
  return { merchantId, merchantSiteId, env: 'int' };
}