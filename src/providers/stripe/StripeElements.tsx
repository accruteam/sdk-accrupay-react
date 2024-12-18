import React, { createContext, useContext, useEffect, useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import {
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import * as Api from '../../api/api';
import { CardHolderName, SubmitBtn, SubmitBtnProps } from '../shared/Elements';
import { CreditCardForm, PaymentContext, SubmitPaymentCallbacks } from '../../types';

const PaymentFormContext = createContext<PaymentContext | undefined>(undefined);

export type Props = {
  config: {
    publishableKey: string;
    // the secret key would not be returned from the backend
    // but we need it to create the intent 
    // until we swap backend calls.
    secretKey: string;
  },
  children: React.ReactNode;
}

export function StripeWrapper({ children, config }: Props) {
  const [stripe, setStripe] = useState<Stripe>();
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    async function setupStripeAndPaymentIntent() {
      const stripe = await loadStripe(config.publishableKey);
      const clientSecret = await Api.getToken('stripe', { amount: 1000 }, { secretKey: config.secretKey })

      setStripe(stripe!);
      setClientSecret(clientSecret);
    }

    setupStripeAndPaymentIntent();
  }, [])

  if (!clientSecret || !stripe) {
    return null;
  }

  return (
    <Elements stripe={stripe} options={{ clientSecret }}>
      <StripeLogic clientSecret={clientSecret}>
        {children}
      </StripeLogic>
    </Elements>
  )
};

function StripeLogic({ children, clientSecret }: { children: React.ReactNode, clientSecret: string }) {
  const stripe = useStripe();
  const elements = useElements();

  const [form, setForm] = useState<CreditCardForm>({
    cardNumber: null,
    cardExpiry: null,
    cardCvc: null,
    cardHolderName: ''
  });
  function updateField(field: keyof CreditCardForm, value: unknown) {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  async function submitPayment(callbacks: SubmitPaymentCallbacks) {
    if (!stripe || !elements) {
      return;
    }

    try {
      const cardNumberElement = elements.getElement('cardNumber');
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          // @ts-ignore
          card: cardNumberElement
        }
      });

      if (result.error) {
        throw new Error(result.error.message);
      } else {
        callbacks.onSuccess(result);
      }
    } catch (error) {
      callbacks.onError(error);
    } finally {
      callbacks.onComplete();
    }
  }

  return (
    <PaymentFormContext.Provider value={{ submitPayment, form, updateField }}>
      {children}
    </PaymentFormContext.Provider>
  )
}

type CreditCardSecureField = 'cardNumber' | 'cardExpiry' | 'cardCvc';

function useFormContext() {
  return useContext(PaymentFormContext)!;
}

const GenericSecureFormField = ({ fieldType } : { fieldType: CreditCardSecureField }) => {
  const elements = useElements();
  const id = `accru-payment-form-${fieldType}-container`;

  useEffect(() => {
    function initializeElement() { 
      setTimeout(() => {
        // @ts-ignore
        const element = elements!.create(fieldType);
        element.mount(`#${id}`);
      }, 100)
    };

    initializeElement();
  }, []);

  return <div id={id } />
}

function CardHolderNameWrapper(props: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const { updateField } = useFormContext();
  
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    return updateField('cardHolderName', e.target.value)
  }

  return <CardHolderName {...props} onChange={onChange} />
}
export function SubmitBtnWrapper(props: Omit<SubmitBtnProps, 'submitPayment'>) {
  const { submitPayment } = useFormContext();
  return <SubmitBtn {...props} submitPayment={submitPayment} />
}

function CreditCardNumber() {
  return <GenericSecureFormField fieldType="cardNumber" />
}

function CreditCardExpiration() {
  return <GenericSecureFormField fieldType="cardExpiry" />
}

function CreditCardCvc() {
  return <GenericSecureFormField fieldType="cardCvc" />
}

export const StripePaymentFields = {
  CardHolderName: CardHolderNameWrapper,
  CreditCardNumber,
  CreditCardExpiration,
  CreditCardCvc,
  SubmitBtn: SubmitBtnWrapper,
}
