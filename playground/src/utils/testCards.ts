import type { TRANSACTION_PROVIDER } from '@accrupay/react';

export type TestCardScenario = 'frictionless' | 'challenge' | 'non3ds';

export interface TestCard {
  scenario: TestCardScenario;
  cardNumber: string;
  cardHolderName: string;
  cardExpiry: string;
  cardCvc: string;
  minAmount?: number;
  description?: string;
}

const NUVEI_TEST_CARDS: Record<TestCardScenario, TestCard> = {
  frictionless: {
    scenario: 'frictionless',
    cardNumber: '4000020951595032',
    cardHolderName: 'FL-BRW1',
    cardExpiry: '12/25',
    cardCvc: '123',
    minAmount: 150,
    description: 'Frictionless 3DS flow (amount >= 150)',
  },
  challenge: {
    scenario: 'challenge',
    cardNumber: '2221008123677736',
    cardHolderName: 'CL-BRW2',
    cardExpiry: '12/25',
    cardCvc: '123',
    minAmount: 151,
    description: '3DS Challenge flow (amount = 151)',
  },
  non3ds: {
    scenario: 'non3ds',
    cardNumber: '4000027891380961',
    cardHolderName: 'Jane Smith',
    cardExpiry: '12/25',
    cardCvc: '123',
    minAmount: 10,
    description: 'Non-3DS transaction (amount = 10)',
  },
};

const STRIPE_TEST_CARDS: Record<TestCardScenario, TestCard> = {
  frictionless: {
    scenario: 'frictionless',
    cardNumber: '4000002760003184',
    cardHolderName: 'Stripe 3DS2 Frictionless',
    cardExpiry: '12/30',
    cardCvc: '123',
    minAmount: 150,
    description: 'Stripe test card with 3DS2 frictionless flow',
  },
  challenge: {
    scenario: 'challenge',
    cardNumber: '4000002500003155',
    cardHolderName: 'Stripe 3DS2 Challenge',
    cardExpiry: '12/30',
    cardCvc: '123',
    minAmount: 151,
    description: 'Stripe test card with 3DS2 challenge flow',
  },
  non3ds: {
    scenario: 'non3ds',
    cardNumber: '4242424242424242',
    cardHolderName: 'Stripe Non-3DS',
    cardExpiry: '12/30',
    cardCvc: '123',
    minAmount: 10,
    description: 'Stripe standard non-3DS test card',
  },
};

const TEST_CARDS_BY_PROVIDER: Record<
  TRANSACTION_PROVIDER,
  Record<TestCardScenario, TestCard>
> = {
  NUVEI: NUVEI_TEST_CARDS,
  STRIPE: STRIPE_TEST_CARDS,
};

export function getTestCard(
  provider: TRANSACTION_PROVIDER,
  scenario: TestCardScenario,
): TestCard | null {
  return TEST_CARDS_BY_PROVIDER[provider]?.[scenario] || null;
}

export function getAllTestCards(
  provider: TRANSACTION_PROVIDER | null,
): TestCard[] {
  if (!provider || !TEST_CARDS_BY_PROVIDER[provider]) {
    return [];
  }
  return Object.values(TEST_CARDS_BY_PROVIDER[provider]);
}
