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

// Provider-specific test cards
const TEST_CARDS_BY_PROVIDER: Record<
  TRANSACTION_PROVIDER,
  Record<TestCardScenario, TestCard>
> = {
  NUVEI: NUVEI_TEST_CARDS,
  // Add other providers here as they are implemented
  // STRIPE: STRIPE_TEST_CARDS,
  // ADYEN: ADYEN_TEST_CARDS,
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
