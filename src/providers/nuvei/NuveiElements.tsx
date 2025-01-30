import { memo, useEffect, useState, createContext, useContext } from 'react';
import { CreditCardForm, NuveiPaymentPayload, NuveiPaymentResponse, PaymentContext, SecureField, SubmitPaymentCallbacks } from '../../types';
import { loadScript } from './helpers';
import { capitalizeFirstLetter } from '../helpers';
import { CardHolderName, SubmitBtn, SubmitBtnProps } from '../shared/Elements';

const NUVEI_SDK_URL = 'https://cdn.safecharge.com/safecharge_resources/v1/websdk/safecharge.js';

type NuveiField = {
  parentElm: HTMLElement;
  stateClass: { complete: 'complete' };
}

type NuveiSecureFields = 'ccNumber' | 'ccExpiration' | 'ccCvc';
type NuveiSafeCharge = {
  fields: (...args: unknown[]) => unknown;
  createPayment: (payload: NuveiPaymentPayload,
    callback: (response: NuveiPaymentResponse) => void,
  ) => Promise<unknown>,
}

type NuveiSafeChargeFields = {
  create: (field: NuveiSecureFields, options?: Record<string, unknown>) => {
    attach: (id: string) => unknown;
  },
  instances: { type: string, instance: unknown }[]
}

type ExpandNuveiContext = {
  safeCharge: NuveiSafeCharge;
  safeChargeFields: NuveiSafeChargeFields;
}

const PaymentFormContext = createContext<PaymentContext<ExpandNuveiContext, NuveiField> | undefined>(undefined);

export type Props = {
  sessionToken: string;
  config: {
    env: string,
    merchantId: string,
    merchantSiteId: string,
  };
  children: React.ReactNode;
}

async function submitPaymentToNuvei(safeCharge: NuveiSafeCharge, payload: Parameters<NuveiSafeCharge['createPayment']>[0]): Promise<NuveiPaymentResponse> {
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

export function NuveiWrapper({ children, sessionToken, config }: Props) {
  const [form, setForm] = useState<CreditCardForm>({
    cardNumber: null,
    cardExpiry: null,
    cardCvc: null,
    cardHolderName: ''
  });

  const [safeCharge, setSafeCharge] = useState<NuveiSafeCharge>();
  const [safeChargeFields, setSafeChargeFields] = useState<NuveiSafeChargeFields>();

  if (!config) {
    throw new Error('config missing');
  }

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

      setSafeChargeFields(safeChargeFields as NuveiSafeChargeFields);
    }
  }, [safeCharge, safeChargeFields]);


  function updateField(field: keyof CreditCardForm, value: unknown) {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  async function submitPayment(callbacks: SubmitPaymentCallbacks<NuveiPaymentResponse>) {
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

function mapCreditCardFieldToNuveiFieldType(key: SecureField): NuveiSecureFields {
  switch(key) {
    case 'cardNumber':
      return 'ccNumber';
    case 'cardExpiry':
      return 'ccExpiration';
    case 'cardCvc':
      return 'ccCvc';
  }
}

const GenericSecureFormField = memo(({ fieldType} : { fieldType: SecureField }) => {
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

export const NuveiPaymentFields = {
  CardHolderName: CardHolderNameWrapper,
  CreditCardNumber,
  CreditCardExpiration,
  CreditCardCvc,
  SubmitBtn: SubmitBtnWrapper,
}
