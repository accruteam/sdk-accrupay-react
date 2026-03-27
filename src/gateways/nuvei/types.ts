export interface INuveiTransactionParamsDTO {
  sessionToken: string;
  cardHolderName: string;
  paymentOption: NuveiFormField;

  billingAddress: {
    country: string;
    email: string;
    firstName: string;
    lastName: string;
    address?: string;
    addressLine2?: string;
    addressLine3?: string;
    phone?: string;
    zip?: string;
    city?: string;
    state?: string;
    county?: string;
  };
}

export interface INuveiTransactionResponseDTO {
  result: 'APPROVED' | 'DECLINED' | 'ERROR' | 'PENDING';
  errCode: number;
  errorDescription: string;
  transactionStatus: 'APPROVED' | 'DECLINED' | 'ERROR';
  ccCardNumber: string;
  bin: string;
  last4Digits: string;
  ccExpMonth: string;
  ccExpYear: string;
  transactionId: string;
  threeDReason: string;
  threeDReasonId: string;
  challengeCancelReasonId: string;
  challengeCancelReason: string;
  isLiabilityOnIssuer: string;
  isExemptionRequestInAuthentication: string;
  challengePreferenceReason: string;
  cancelled: boolean;
}

export interface INuveiCustomPropsDTO {
  fonts?: { cssUrl: string }[];
  locale?: string;
  fontSize?: string;
}

export type NuveiFormFieldName = 'ccNumber' | 'ccExpiration' | 'ccCvc';
export type NuveiFormFieldEvents = 'ready' | 'change' | 'focus' | 'blur';

export interface INuveiFormFieldStylePropsDTO {
  color: string;
  fontFamily: string;
  fontSize: string;
  fontSmoothing: string;
  fontStyle: string;
  fontVariant: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
  textAlign: string;
  textDecoration: string;
  textShadow: string;
  textTransform: string;
  opacity: string;
  display: string;
}

export interface INuveiFormFieldStyleOptionsDTO {
  '-webkit-font-smoothing': INuveiFormFieldStylePropsDTO;
  '-moz-osx-font-smoothing': INuveiFormFieldStylePropsDTO;
  '::placeholder': INuveiFormFieldStylePropsDTO;
  '::selection': INuveiFormFieldStylePropsDTO;
  '::-ms-clear': INuveiFormFieldStylePropsDTO;
  ':-webkit-autofill': INuveiFormFieldStylePropsDTO;
  ':disabled': INuveiFormFieldStylePropsDTO;
  ':focus': INuveiFormFieldStylePropsDTO;
  ':hover': INuveiFormFieldStylePropsDTO;
}

export type INuveiFormFieldStyleDTO = INuveiFormFieldStylePropsDTO &
  INuveiFormFieldStyleOptionsDTO;

export interface INuveiFormFieldCreateDTO {
  style?: {
    base?: INuveiFormFieldStyleDTO;
    empty?: INuveiFormFieldStyleDTO;
    valid?: INuveiFormFieldStyleDTO;
    invalid?: INuveiFormFieldStyleDTO;
  };
  classes?: {
    focus?: string;
    empty?: string;
    invalid?: string;
  };
}

export type NuveiFormField = {
  attach: (htmlId: string) => void;
  destroy: () => void;
  clear: () => void;
  focus: () => void;
  on: (
    kind: NuveiFormFieldEvents,
    callback: (event?: { field?: NuveiFormFieldName }) => void,
  ) => void;
  parentElm?: HTMLElement;
  stateClass?: {
    complete: string;
    empty: string;
    focus: string;
    invalid: string;
  };
};

export type NuveiForm = {
  create(
    kind: NuveiFormFieldName,
    options?: INuveiFormFieldCreateDTO,
  ): NuveiFormField;
};

export interface INuveiConfig {
  merchantId: string;
  merchantSiteId: string;
  environment: 'sandbox' | 'production';
}

export type ISafeChargeParamsDTO = {
  sessionToken?: string;
  env: 'prod' | 'int';
  merchantId: string;
  merchantSiteId: string;

  logLevel?: '0' | '1' | '2' | '3' | '4' | '5' | '6';
  blockCards?: [string, string, string][];
  blockPasteCard?: boolean;
  support19Digits?: boolean;
  disableNuveiAnalytics?: boolean;

  onPaymentEvent?: (event: any) => void;
  showAccountCapture?: boolean;
  strictCardBlocking?: boolean;

  cvvIcon?: boolean;
  backgroundImage?: string;
  tooltipPosition?: 'top' | 'bottom';
};

export type SafeChargeInstance = {
  fields: (params?: INuveiCustomPropsDTO) => NuveiForm;
  createPayment: (
    params: INuveiTransactionParamsDTO,
    callback: (response: INuveiTransactionResponseDTO) => void,
  ) => void;
};

export type SafeChargeFactory = (
  params: ISafeChargeParamsDTO,
) => SafeChargeInstance;
