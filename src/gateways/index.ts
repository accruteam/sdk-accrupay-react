import { NuveiGateway } from './nuvei';
import { StripeGateway } from './stripe';

export const AccruPayGateways = {
  NUVEI: NuveiGateway,
  STRIPE: StripeGateway,
};
