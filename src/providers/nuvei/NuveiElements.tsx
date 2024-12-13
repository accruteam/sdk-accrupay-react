import { memo, useEffect, useState, createContext, useContext } from 'react';
import * as Api from '../../api/api';
import { NuveiPaymentPayload, NuveiPaymentResponse, SubmitPaymentCallbacks } from '../../types';
import { loadScript } from './helpers';
import { capitalizeFirstLetter } from '../helpers';

const NUVEI_SDK_URL = 'https://cdn.safecharge.com/safecharge_resources/v1/websdk/safecharge.js';

type NuveiField = {
  parentElm: HTMLElement;
  stateClass: { complete: 'complete' };
}

type CreditCardSecureFields = {
  cardNumber: NuveiField | null;
  cardExpiry: NuveiField | null;
  cardCvc: NuveiField | null;
}

type CreditCardForm = CreditCardSecureFields & {
  cardHolderName: string;
}

type NuveiSecureFields = 'ccNumber' | 'ccExpiration' | 'ccCvc';

type CreditCardContext = {
  form: CreditCardForm;
  updateField: (field: keyof CreditCardForm, value: unknown) => void;
  submitPayment: (callbacks: SubmitPaymentCallbacks) => void;
  safeCharge: {
    fields: (...args: unknown[]) => unknown;
    createPayment: (payload: NuveiPaymentPayload,
      callback: (response: NuveiPaymentResponse) => void,
    ) => Promise<unknown>,
  };
  safeChargeFields: {
    create: (field: NuveiSecureFields, options?: Record<string, unknown>) => {
      attach: (id: string) => unknown;
    },
    instances: { type: string, instance: unknown }[]
  }
}

const PaymentFormContext = createContext<CreditCardContext | undefined>(undefined);

export type Props = {
  config: {
    env: string,
    merchantId: string,
    merchantSiteId: string,
  };
  children: React.ReactNode;
}

async function submitPaymentToNuvei(safeCharge: CreditCardContext['safeCharge'], payload: Parameters<CreditCardContext['safeCharge']['createPayment']>[0]): Promise<NuveiPaymentResponse> {
  return new Promise(function(res, rej) {
    safeCharge.createPayment(payload, 
      (response) => {
        if (response.result === 'APPROVED') {
          res(response);
        } else {
          const reason = response.errorDescription ? String(response.errorDescription).toLowerCase() : '';
          const status = response.transactionStatus ? String(response.transactionStatus).toLowerCase() : 'failed';
          rej(new Error(`Transaction ${status}.${!status.includes(reason) ? ` Reason: ${capitalizeFirstLetter(reason)}.` : ''}`))
        }
      }
      )})
}

export function NuveiContext({ children, config }: Props) {
  const [form, setForm] = useState<CreditCardForm>({
    cardNumber: null,
    cardExpiry: null,
    cardCvc: null,
    cardHolderName: ''
  });

  const [safeCharge, setSafeCharge] = useState<CreditCardContext['safeCharge']>();
  const [safeChargeFields, setSafeChargeFields] = useState<CreditCardContext['safeChargeFields']>();
  const [sessionToken, setSessionToken] = useState<string>('');

  if (!config) {
    throw new Error('config missing');
  }

  useEffect(() => {
    async function fetchSessionToken() {
      const sessionToken = await Api.getToken('nuvei', { amount: 1000 });
      setSessionToken(sessionToken);
    }

    fetchSessionToken();
  }, [])

  useEffect(() => {
    loadScript(NUVEI_SDK_URL).then(() => {
      if (window.SafeCharge !== undefined) {
        setSafeCharge(
          window.SafeCharge({
            env: config.env,
            merchantId: config.merchantId,
            merchantSiteId: config.merchantSiteId,
          }),
        );
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (safeCharge && !safeChargeFields) {
      const safeChargeFields = safeCharge.fields({
        // fonts: [{ cssUrl: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap' }],
        // locale: 'en',
        // fontSize: '16px',
      });

      setSafeChargeFields(safeChargeFields as CreditCardContext['safeChargeFields']);
    }
  }, [safeCharge, safeChargeFields]);


  function updateField(field: keyof CreditCardForm, value: unknown) {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  async function submitPayment(callbacks: SubmitPaymentCallbacks) {
    try {
      if (!form.cardHolderName) {
        throw new Error('Card holder name is required.');
      }

      if (!form.cardNumber!.parentElm.classList.contains(form.cardNumber!.stateClass.complete)) {
        throw new Error('Invalid card number.');
      }

      if (!form.cardExpiry!.parentElm.classList.contains(form.cardExpiry!.stateClass.complete)) {
        throw new Error('Invalid card expiry.');
      }

      if (!form.cardCvc!.parentElm.classList.contains(form.cardCvc!.stateClass.complete)) {
        throw new Error('Invalid card cvc.');
      }
    } catch (error: unknown) {
      console.error(error);
      callbacks.onError(error);
      callbacks.onComplete();
      return;
    }

    try {
      const paymentResult = await submitPaymentToNuvei(safeCharge!, {
        cardHolderName: form.cardHolderName,
        sessionToken,
        paymentOption: form.cardNumber,
      });
      callbacks.onSuccess(paymentResult);
    } catch (error) {
      console.error(error);
      callbacks.onError(error);
    }

    callbacks.onComplete();
  }

  if (!safeCharge || !safeChargeFields || !sessionToken) {
    return null;
  }

  return (
    <PaymentFormContext.Provider value={{ submitPayment, form, updateField, safeCharge, safeChargeFields }}>
      {children}
    </PaymentFormContext.Provider>
  );
}

function useFormContext() {
  return useContext(PaymentFormContext)!;
}

function mapCreditCardFieldToNuveiFieldType(key: keyof CreditCardSecureFields): NuveiSecureFields {
  switch(key) {
    case 'cardNumber':
      return 'ccNumber';
    case 'cardExpiry':
      return 'ccExpiration';
    case 'cardCvc':
      return 'ccCvc';
  }
}

const GenericSecureFormField = memo(({ fieldType} : { fieldType: keyof CreditCardSecureFields }) => {
  const { updateField, safeChargeFields } = useFormContext();
  const id = `accru-payment-form-${fieldType}-container`;

  useEffect(() => {
    const nuveiFieldType = mapCreditCardFieldToNuveiFieldType(fieldType);

    if (!safeChargeFields.instances.map(i => i.type).includes(nuveiFieldType)) {
      const field = safeChargeFields.create(nuveiFieldType, {});
      field.attach(`#${id}`);
      updateField(fieldType, field);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div id={id} />
})

function CreditCardNumber() {
  return <GenericSecureFormField fieldType="cardNumber" />
}

function CreditCardExpiration() {
  return <GenericSecureFormField fieldType="cardExpiry" />
}

function CreditCardCvc() {
  return <GenericSecureFormField fieldType="cardCvc" />
}

function CardHolderName(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { updateField } = useFormContext();
  return <input onChange={(e) => updateField('cardHolderName', e.target.value)} {...props} />
}


type SubmitBtnProps = React.ButtonHTMLAttributes<Omit<HTMLButtonElement, 'onClick'>> & Partial<SubmitPaymentCallbacks> & { text: string, onSubmit?: () => Promise<void> | void };

export function SubmitBtn(props: SubmitBtnProps) {
  const { submitPayment } = useFormContext();
  const { text, onSuccess, onError, onComplete, ...rest } = props;

  return <button onClick={async () => {
    if (rest.onSubmit) {
      await rest.onSubmit();
    }

    return submitPayment({
      onSuccess: onSuccess || (() => {}),
      onError: onError || (() => {}),
      onComplete: onComplete || (() => {}),
    });
  }} {...rest}>{text}</button>
}

export const NuveiPaymentFields = {
  CardHolderName,
  CreditCardNumber,
  CreditCardExpiration,
  CreditCardCvc,
  SubmitBtn,
}
