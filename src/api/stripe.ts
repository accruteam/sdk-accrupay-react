import Stripe from 'stripe';

type StripeProviderConfiguration = {
  secretKey: string;
}

export async function createPaymentIntent(amount: number, config: StripeProviderConfiguration): Promise<string> {
  const stripe = new Stripe(config.secretKey);

  const intent = await stripe.paymentIntents.create({
    customer: 'cus_RQATBsWqSFeYZp',
    amount,
    currency: 'USD',
    automatic_payment_methods: { enabled: true }
  });

  return intent.client_secret!;
}
