/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: bigint; output: bigint; }
  /** Cursor for pagination */
  ConnectionCursor: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: Date; output: Date; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export enum AUTHENTICATOR_ENTITY_TYPE {
  MERCHANT = 'MERCHANT',
  USER = 'USER'
}

export enum AUTHENTICATOR_STATUS {
  ACTIVE = 'ACTIVE',
  REVOKED = 'REVOKED'
}

export enum AUTHENTICATOR_TYPE {
  TOTP = 'TOTP'
}

export type AdminMerchantCreateSchema = {
  addressCity: Scalars['String']['input'];
  addressCountry: COUNTRY_ISO_2;
  addressLine1: Scalars['String']['input'];
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressPostalCode: Scalars['String']['input'];
  addressState: Scalars['String']['input'];
  email: Scalars['String']['input'];
  entityType: MERCHANT_ENTITY_TYPE;
  industry: Scalars['String']['input'];
  legalAddressCity: Scalars['String']['input'];
  legalAddressCountry: COUNTRY_ISO_2;
  legalAddressLine1: Scalars['String']['input'];
  legalAddressLine2?: InputMaybe<Scalars['String']['input']>;
  legalAddressPostalCode: Scalars['String']['input'];
  legalAddressState: Scalars['String']['input'];
  legalIdentifier: Scalars['String']['input'];
  legalIdentifierType: LEGAL_IDENTIFIER_TYPE;
  locale?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  primaryContactEmail: Scalars['String']['input'];
  primaryContactName: Scalars['String']['input'];
  primaryContactPhone: Scalars['String']['input'];
  timezone?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AdminMerchantTransactionProviderApplicationUpdateSchema = {
  providerError?: InputMaybe<Scalars['String']['input']>;
  providerStatus?: InputMaybe<MERCHANT_TRANSACTION_PROVIDER_APPLICATION_STATUS>;
  status?: InputMaybe<MERCHANT_TRANSACTION_PROVIDER_APPLICATION_STATUS>;
  statusDescription?: InputMaybe<Scalars['String']['input']>;
};

export type AdminMerchantTransactionProviderCreateSchema = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  credentials: Scalars['JSON']['input'];
  merchantId: Scalars['String']['input'];
  provider: TRANSACTION_PROVIDER;
};

export type AdminMerchantTransactionProviderUpdateSchema = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  credentials?: InputMaybe<Scalars['JSON']['input']>;
};

export type AdminMerchantUpdateSchema = {
  addressCity?: InputMaybe<Scalars['String']['input']>;
  addressCountry?: InputMaybe<COUNTRY_ISO_2>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressPostalCode?: InputMaybe<Scalars['String']['input']>;
  addressState?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<MERCHANT_ENTITY_TYPE>;
  industry?: InputMaybe<Scalars['String']['input']>;
  legalAddressCity?: InputMaybe<Scalars['String']['input']>;
  legalAddressCountry?: InputMaybe<COUNTRY_ISO_2>;
  legalAddressLine1?: InputMaybe<Scalars['String']['input']>;
  legalAddressLine2?: InputMaybe<Scalars['String']['input']>;
  legalAddressPostalCode?: InputMaybe<Scalars['String']['input']>;
  legalAddressState?: InputMaybe<Scalars['String']['input']>;
  legalIdentifier?: InputMaybe<Scalars['String']['input']>;
  legalIdentifierType?: InputMaybe<LEGAL_IDENTIFIER_TYPE>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  primaryContactEmail?: InputMaybe<Scalars['String']['input']>;
  primaryContactName?: InputMaybe<Scalars['String']['input']>;
  primaryContactPhone?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AdminMerchantUserCreateSchema = {
  isEnabled: Scalars['Boolean']['input'];
  role: MERCHANT_USER_ROLE;
  userId: Scalars['String']['input'];
};

export type AdminMerchantUserUpdateSchema = {
  isEnabled: Scalars['Boolean']['input'];
  role: MERCHANT_USER_ROLE;
};

export type Authenticator = {
  __typename?: 'Authenticator';
  createdAt: Scalars['DateTimeISO']['output'];
  entityId: Scalars['String']['output'];
  entityType: AUTHENTICATOR_ENTITY_TYPE;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  lastUsedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: AUTHENTICATOR_STATUS;
  statusReason?: Maybe<Scalars['String']['output']>;
  type: AUTHENTICATOR_TYPE;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type AuthenticatorEnrollmentConfirmSchema = {
  enrollmentId: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
};

export type AuthenticatorEnrollmentSession = {
  __typename?: 'AuthenticatorEnrollmentSession';
  enrollmentId: Scalars['String']['output'];
  entityId: Scalars['String']['output'];
  entityType: Scalars['String']['output'];
  expiresAt: Scalars['DateTimeISO']['output'];
  label?: Maybe<Scalars['String']['output']>;
  payload: Scalars['JSON']['output'];
  type: AUTHENTICATOR_TYPE;
};

export type AuthenticatorEnrollmentStartSchema = {
  label?: InputMaybe<Scalars['String']['input']>;
  type: AUTHENTICATOR_TYPE;
};

export type AuthenticatorPaginationConnection = {
  __typename?: 'AuthenticatorPaginationConnection';
  edges: Array<AuthenticatorPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AuthenticatorPaginationEdge = {
  __typename?: 'AuthenticatorPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: Authenticator;
};

export type AuthenticatorReplacementConfirmSchema = {
  label?: InputMaybe<Scalars['String']['input']>;
  replacementId: Scalars['String']['input'];
};

export type AuthenticatorReplacementSession = {
  __typename?: 'AuthenticatorReplacementSession';
  entityId: Scalars['String']['output'];
  entityType: Scalars['String']['output'];
  expiresAt: Scalars['DateTimeISO']['output'];
  label?: Maybe<Scalars['String']['output']>;
  payload: Scalars['JSON']['output'];
  replacementId: Scalars['String']['output'];
  type: AUTHENTICATOR_TYPE;
};

export type AuthenticatorReplacementStartSchema = {
  label?: InputMaybe<Scalars['String']['input']>;
  type: AUTHENTICATOR_TYPE;
};

export type AuthenticatorSession = {
  __typename?: 'AuthenticatorSession';
  agentInfo?: Maybe<Scalars['JSON']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  entityId: Scalars['String']['output'];
  entityType: Scalars['String']['output'];
  expiresAt: Scalars['DateTimeISO']['output'];
  featureKey: Scalars['String']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  sessionId: Scalars['ID']['output'];
};

export type BillingDataSchema = {
  billingAddressCity?: InputMaybe<Scalars['String']['input']>;
  /** Country using the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format (e.g. US, UK, etc.). */
  billingAddressCountry: COUNTRY_ISO_2;
  billingAddressLine1?: InputMaybe<Scalars['String']['input']>;
  billingAddressLine2?: InputMaybe<Scalars['String']['input']>;
  billingAddressPostalCode?: InputMaybe<Scalars['String']['input']>;
  /** State using the [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format for main country subdivisions, provinces, states (e.g. [for US] → NY, IN, CA, etc.). The [iso-3166-2](https://www.npmjs.com/package/iso-3166-2) package is suggested. */
  billingAddressState?: InputMaybe<Scalars['String']['input']>;
  billingEmail: Scalars['String']['input'];
  billingFirstName: Scalars['String']['input'];
  billingLastName: Scalars['String']['input'];
  billingPhone?: InputMaybe<Scalars['String']['input']>;
};

export enum CLIENT_TRANSACTION_SESSION_STATUS {
  ACTIVE = 'ACTIVE',
  CANCELED = 'CANCELED',
  COMPLETED = 'COMPLETED',
  EXPIRED = 'EXPIRED',
  PENDING = 'PENDING',
  UNAVAILABLE = 'UNAVAILABLE'
}

export enum COUNTRY_ISO_2 {
  AD = 'AD',
  AE = 'AE',
  AF = 'AF',
  AG = 'AG',
  AI = 'AI',
  AL = 'AL',
  AM = 'AM',
  AO = 'AO',
  AQ = 'AQ',
  AR = 'AR',
  AS = 'AS',
  AT = 'AT',
  AU = 'AU',
  AW = 'AW',
  AX = 'AX',
  AZ = 'AZ',
  BA = 'BA',
  BB = 'BB',
  BD = 'BD',
  BE = 'BE',
  BF = 'BF',
  BG = 'BG',
  BH = 'BH',
  BI = 'BI',
  BJ = 'BJ',
  BL = 'BL',
  BM = 'BM',
  BN = 'BN',
  BO = 'BO',
  BQ = 'BQ',
  BR = 'BR',
  BS = 'BS',
  BT = 'BT',
  BV = 'BV',
  BW = 'BW',
  BY = 'BY',
  BZ = 'BZ',
  CA = 'CA',
  CC = 'CC',
  CD = 'CD',
  CF = 'CF',
  CG = 'CG',
  CH = 'CH',
  CI = 'CI',
  CK = 'CK',
  CL = 'CL',
  CM = 'CM',
  CN = 'CN',
  CO = 'CO',
  CR = 'CR',
  CU = 'CU',
  CV = 'CV',
  CW = 'CW',
  CX = 'CX',
  CY = 'CY',
  CZ = 'CZ',
  DE = 'DE',
  DJ = 'DJ',
  DK = 'DK',
  DM = 'DM',
  DO = 'DO',
  DZ = 'DZ',
  EC = 'EC',
  EE = 'EE',
  EG = 'EG',
  EH = 'EH',
  ER = 'ER',
  ES = 'ES',
  ET = 'ET',
  FI = 'FI',
  FJ = 'FJ',
  FK = 'FK',
  FM = 'FM',
  FO = 'FO',
  FR = 'FR',
  GA = 'GA',
  GB = 'GB',
  GD = 'GD',
  GE = 'GE',
  GF = 'GF',
  GG = 'GG',
  GH = 'GH',
  GI = 'GI',
  GL = 'GL',
  GM = 'GM',
  GN = 'GN',
  GP = 'GP',
  GQ = 'GQ',
  GR = 'GR',
  GS = 'GS',
  GT = 'GT',
  GU = 'GU',
  GW = 'GW',
  GY = 'GY',
  HK = 'HK',
  HM = 'HM',
  HN = 'HN',
  HR = 'HR',
  HT = 'HT',
  HU = 'HU',
  ID = 'ID',
  IE = 'IE',
  IL = 'IL',
  IM = 'IM',
  IN = 'IN',
  IO = 'IO',
  IQ = 'IQ',
  IR = 'IR',
  IS = 'IS',
  IT = 'IT',
  JE = 'JE',
  JM = 'JM',
  JO = 'JO',
  JP = 'JP',
  KE = 'KE',
  KG = 'KG',
  KH = 'KH',
  KI = 'KI',
  KM = 'KM',
  KN = 'KN',
  KP = 'KP',
  KR = 'KR',
  KW = 'KW',
  KY = 'KY',
  KZ = 'KZ',
  LA = 'LA',
  LB = 'LB',
  LC = 'LC',
  LI = 'LI',
  LK = 'LK',
  LR = 'LR',
  LS = 'LS',
  LT = 'LT',
  LU = 'LU',
  LV = 'LV',
  LY = 'LY',
  MA = 'MA',
  MC = 'MC',
  MD = 'MD',
  ME = 'ME',
  MF = 'MF',
  MG = 'MG',
  MH = 'MH',
  MK = 'MK',
  ML = 'ML',
  MM = 'MM',
  MN = 'MN',
  MO = 'MO',
  MP = 'MP',
  MQ = 'MQ',
  MR = 'MR',
  MS = 'MS',
  MT = 'MT',
  MU = 'MU',
  MV = 'MV',
  MW = 'MW',
  MX = 'MX',
  MY = 'MY',
  MZ = 'MZ',
  NA = 'NA',
  NC = 'NC',
  NE = 'NE',
  NF = 'NF',
  NG = 'NG',
  NI = 'NI',
  NL = 'NL',
  NO = 'NO',
  NP = 'NP',
  NR = 'NR',
  NU = 'NU',
  NZ = 'NZ',
  OM = 'OM',
  PA = 'PA',
  PE = 'PE',
  PF = 'PF',
  PG = 'PG',
  PH = 'PH',
  PK = 'PK',
  PL = 'PL',
  PM = 'PM',
  PN = 'PN',
  PR = 'PR',
  PS = 'PS',
  PT = 'PT',
  PW = 'PW',
  PY = 'PY',
  QA = 'QA',
  RE = 'RE',
  RO = 'RO',
  RS = 'RS',
  RU = 'RU',
  RW = 'RW',
  SA = 'SA',
  SB = 'SB',
  SC = 'SC',
  SD = 'SD',
  SE = 'SE',
  SG = 'SG',
  SH = 'SH',
  SI = 'SI',
  SJ = 'SJ',
  SK = 'SK',
  SL = 'SL',
  SM = 'SM',
  SN = 'SN',
  SO = 'SO',
  SR = 'SR',
  SS = 'SS',
  ST = 'ST',
  SV = 'SV',
  SX = 'SX',
  SY = 'SY',
  SZ = 'SZ',
  TC = 'TC',
  TD = 'TD',
  TF = 'TF',
  TG = 'TG',
  TH = 'TH',
  TJ = 'TJ',
  TK = 'TK',
  TL = 'TL',
  TM = 'TM',
  TN = 'TN',
  TO = 'TO',
  TR = 'TR',
  TT = 'TT',
  TV = 'TV',
  TW = 'TW',
  TZ = 'TZ',
  UA = 'UA',
  UG = 'UG',
  UM = 'UM',
  US = 'US',
  UY = 'UY',
  UZ = 'UZ',
  VA = 'VA',
  VC = 'VC',
  VE = 'VE',
  VG = 'VG',
  VI = 'VI',
  VN = 'VN',
  VU = 'VU',
  WF = 'WF',
  WS = 'WS',
  YE = 'YE',
  YT = 'YT',
  ZA = 'ZA',
  ZM = 'ZM',
  ZW = 'ZW'
}

export enum CURRENCY {
  EUR = 'EUR',
  USD = 'USD'
}

export enum DEVICE_TYPE {
  DESKTOP = 'DESKTOP',
  SMARTPHONE = 'SMARTPHONE',
  TABLET = 'TABLET',
  TV = 'TV',
  UNKNOWN = 'UNKNOWN'
}

export type DeviceDataSchema = {
  deviceBrowser?: InputMaybe<Scalars['String']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceIp?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  deviceOS?: InputMaybe<Scalars['String']['input']>;
  deviceType?: InputMaybe<DEVICE_TYPE>;
};

export type ErrorLog = {
  __typename?: 'ErrorLog';
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  debug?: Maybe<Scalars['JSON']['output']>;
  environment?: Maybe<Scalars['String']['output']>;
  handler?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  merchantId?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  method?: Maybe<Scalars['String']['output']>;
  operation?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Scalars['JSON']['output']>;
  requestAgentInfo?: Maybe<Scalars['JSON']['output']>;
  requestContext?: Maybe<Scalars['JSON']['output']>;
  requestData?: Maybe<Scalars['JSON']['output']>;
  resolvedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  resolvedByEmail?: Maybe<Scalars['String']['output']>;
  responseContext?: Maybe<Scalars['JSON']['output']>;
  responseData?: Maybe<Scalars['JSON']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  stack?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  userEmail?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ErrorLogPaginationConnection = {
  __typename?: 'ErrorLogPaginationConnection';
  edges: Array<ErrorLogPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ErrorLogPaginationEdge = {
  __typename?: 'ErrorLogPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: ErrorLog;
};

export enum LEGAL_IDENTIFIER_TYPE {
  EIN = 'EIN',
  ITIN = 'ITIN',
  SSN = 'SSN'
}

export enum MERCHANT_ENTITY_TYPE {
  COMPANY = 'COMPANY',
  INDIVIDUAL = 'INDIVIDUAL'
}

export enum MERCHANT_STATUS {
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
  PENDING = 'PENDING'
}

export enum MERCHANT_TRANSACTION_PROVIDER_APPLICATION_STATUS {
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING'
}

export enum MERCHANT_TRANSACTION_PROVIDER_STATUS {
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED'
}

export enum MERCHANT_USER_ROLE {
  ADMIN = 'ADMIN',
  DEVELOPER = 'DEVELOPER',
  OWNER = 'OWNER',
  VIEWER = 'VIEWER'
}

export type Merchant = {
  __typename?: 'Merchant';
  addressCity?: Maybe<Scalars['String']['output']>;
  addressCountry?: Maybe<COUNTRY_ISO_2>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressPostalCode?: Maybe<Scalars['String']['output']>;
  addressState?: Maybe<Scalars['String']['output']>;
  archivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerificationId?: Maybe<Scalars['String']['output']>;
  entityType: MERCHANT_ENTITY_TYPE;
  id: Scalars['ID']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  legalAddressCity?: Maybe<Scalars['String']['output']>;
  legalAddressCountry?: Maybe<COUNTRY_ISO_2>;
  legalAddressLine1?: Maybe<Scalars['String']['output']>;
  legalAddressLine2?: Maybe<Scalars['String']['output']>;
  legalAddressPostalCode?: Maybe<Scalars['String']['output']>;
  legalAddressState?: Maybe<Scalars['String']['output']>;
  legalIdentifier?: Maybe<Scalars['String']['output']>;
  legalIdentifierType?: Maybe<LEGAL_IDENTIFIER_TYPE>;
  locale?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  phoneVerificationId?: Maybe<Scalars['String']['output']>;
  primaryContactEmail?: Maybe<Scalars['String']['output']>;
  primaryContactName?: Maybe<Scalars['String']['output']>;
  primaryContactPhone?: Maybe<Scalars['String']['output']>;
  publicId?: Maybe<Scalars['String']['output']>;
  publicIdUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: MERCHANT_STATUS;
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type MerchantApiClientTransactionAddPaymentMethodSessionStartSchema = {
  billing: BillingDataSchema;
  currency: CURRENCY;
  device?: InputMaybe<DeviceDataSchema>;
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantInternalTransactionCode: Scalars['String']['input'];
  shipping?: InputMaybe<ShippingDataSchema>;
  user?: InputMaybe<UserDataSchema>;
};

export type MerchantApiClientTransactionPaymentSessionStartSchema = {
  amount: Scalars['BigInt']['input'];
  billing: BillingDataSchema;
  currency: CURRENCY;
  device?: InputMaybe<DeviceDataSchema>;
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantInternalTransactionCode: Scalars['String']['input'];
  shipping?: InputMaybe<ShippingDataSchema>;
  storePaymentMethod: Scalars['Boolean']['input'];
  user?: InputMaybe<UserDataSchema>;
};

export type MerchantApiClientTransactionPaymentStartSchema = {
  amount: Scalars['BigInt']['input'];
  billing: BillingDataSchema;
  currency: CURRENCY;
  device?: InputMaybe<DeviceDataSchema>;
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantInternalTransactionCode: Scalars['String']['input'];
  shipping?: InputMaybe<ShippingDataSchema>;
  storePaymentMethod: Scalars['Boolean']['input'];
  user?: InputMaybe<UserDataSchema>;
};

export type MerchantApiKey = {
  __typename?: 'MerchantApiKey';
  archivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  merchantId: Scalars['String']['output'];
  secret: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantApiKeyPaginationConnection = {
  __typename?: 'MerchantApiKeyPaginationConnection';
  edges: Array<MerchantApiKeyPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantApiKeyPaginationEdge = {
  __typename?: 'MerchantApiKeyPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantApiKey;
};

export type MerchantApiServerAchPaymentTransactionCreateSchema = {
  ach: MerchantServerAchTransactionDataSchema;
  amount: Scalars['BigInt']['input'];
  billing: BillingDataSchema;
  currency: CURRENCY;
  device?: InputMaybe<DeviceDataSchema>;
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantInternalTransactionCode: Scalars['String']['input'];
  shipping?: InputMaybe<ShippingDataSchema>;
  storePaymentMethod: Scalars['Boolean']['input'];
  user?: InputMaybe<UserDataSchema>;
};

export type MerchantApiServerPaymentMethodTransactionCreateSchema = {
  amount: Scalars['BigInt']['input'];
  billing: BillingDataSchema;
  currency: CURRENCY;
  device?: InputMaybe<DeviceDataSchema>;
  merchantCustomerPaymentMethodId: Scalars['String']['input'];
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantInternalTransactionCode: Scalars['String']['input'];
  shipping?: InputMaybe<ShippingDataSchema>;
  user?: InputMaybe<UserDataSchema>;
};

export type MerchantClientPublicTransactionSessionData = {
  __typename?: 'MerchantClientPublicTransactionSessionData';
  baseConfig: MerchantClientTransactionSessionBaseConfigData;
  provider: TRANSACTION_PROVIDER;
  transactionSession: MerchantClientTransactionSession;
};

export type MerchantClientTransactionGenericPreSessionData = {
  __typename?: 'MerchantClientTransactionGenericPreSessionData';
  provider: TRANSACTION_PROVIDER;
  publicKey?: Maybe<Scalars['String']['output']>;
};

export type MerchantClientTransactionNuveiPreSessionData = {
  __typename?: 'MerchantClientTransactionNuveiPreSessionData';
  env: Scalars['String']['output'];
  /** @deprecated Use `env` instead. */
  environment: Scalars['String']['output'];
  merchantId: Scalars['String']['output'];
  merchantSiteId: Scalars['String']['output'];
  provider: TRANSACTION_PROVIDER;
};

export type MerchantClientTransactionPreSessionData = MerchantClientTransactionGenericPreSessionData | MerchantClientTransactionNuveiPreSessionData;

export type MerchantClientTransactionSession = {
  __typename?: 'MerchantClientTransactionSession';
  action: TRANSACTION_ACTION;
  amount: Scalars['BigInt']['output'];
  billingAddressCity?: Maybe<Scalars['String']['output']>;
  billingAddressCountry?: Maybe<COUNTRY_ISO_2>;
  billingAddressLine1?: Maybe<Scalars['String']['output']>;
  billingAddressLine2?: Maybe<Scalars['String']['output']>;
  billingAddressPostalCode?: Maybe<Scalars['String']['output']>;
  billingAddressState?: Maybe<Scalars['String']['output']>;
  billingEmail?: Maybe<Scalars['String']['output']>;
  billingFirstName?: Maybe<Scalars['String']['output']>;
  billingLastName?: Maybe<Scalars['String']['output']>;
  billingPhone?: Maybe<Scalars['String']['output']>;
  canceledAt?: Maybe<Scalars['DateTimeISO']['output']>;
  completedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  currency: CURRENCY;
  deviceBrowser?: Maybe<Scalars['String']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  deviceIp?: Maybe<Scalars['String']['output']>;
  deviceName?: Maybe<Scalars['String']['output']>;
  deviceOS?: Maybe<Scalars['String']['output']>;
  deviceType?: Maybe<DEVICE_TYPE>;
  id: Scalars['ID']['output'];
  merchantInternalCustomerCode?: Maybe<Scalars['String']['output']>;
  merchantInternalTransactionCode?: Maybe<Scalars['String']['output']>;
  payload: Scalars['JSON']['output'];
  paymentMethod?: Maybe<MerchantCustomerPaymentMethod>;
  paymentMethodId?: Maybe<Scalars['String']['output']>;
  paymentPlan?: Maybe<MerchantPaymentPlan>;
  paymentPlanId?: Maybe<Scalars['String']['output']>;
  providerCode: Scalars['String']['output'];
  providerError?: Maybe<Scalars['String']['output']>;
  providerLastSyncedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  providerLastVerifiedAt: Scalars['DateTimeISO']['output'];
  providerStatus: CLIENT_TRANSACTION_SESSION_STATUS;
  shippingAddressCity?: Maybe<Scalars['String']['output']>;
  shippingAddressCountry?: Maybe<COUNTRY_ISO_2>;
  shippingAddressLine1?: Maybe<Scalars['String']['output']>;
  shippingAddressLine2?: Maybe<Scalars['String']['output']>;
  shippingAddressPostalCode?: Maybe<Scalars['String']['output']>;
  shippingAddressState?: Maybe<Scalars['String']['output']>;
  shippingEmail?: Maybe<Scalars['String']['output']>;
  shippingFirstName?: Maybe<Scalars['String']['output']>;
  shippingLastName?: Maybe<Scalars['String']['output']>;
  shippingPhone?: Maybe<Scalars['String']['output']>;
  startedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: CLIENT_TRANSACTION_SESSION_STATUS;
  storePaymentMethod?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  tokenExpiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  transactionProvider: MerchantTransactionProvider;
  transactionProviderId: Scalars['String']['output'];
  transactions?: Maybe<Array<MerchantTransaction>>;
  updatedAt: Scalars['DateTimeISO']['output'];
  userAddressCity?: Maybe<Scalars['String']['output']>;
  userAddressCountry?: Maybe<COUNTRY_ISO_2>;
  userAddressLine1?: Maybe<Scalars['String']['output']>;
  userAddressLine2?: Maybe<Scalars['String']['output']>;
  userAddressPostalCode?: Maybe<Scalars['String']['output']>;
  userAddressState?: Maybe<Scalars['String']['output']>;
  userBirthDate?: Maybe<Scalars['DateTimeISO']['output']>;
  userEmail?: Maybe<Scalars['String']['output']>;
  userFirstName?: Maybe<Scalars['String']['output']>;
  userLastName?: Maybe<Scalars['String']['output']>;
  userLegalIdentifier?: Maybe<Scalars['String']['output']>;
  userLegalIdentifierType?: Maybe<Scalars['String']['output']>;
  userLocale?: Maybe<Scalars['String']['output']>;
  userPhone?: Maybe<Scalars['String']['output']>;
};

export type MerchantClientTransactionSessionBaseConfig = {
  __typename?: 'MerchantClientTransactionSessionBaseConfig';
  data: MerchantClientTransactionSessionBaseConfigData;
  provider: TRANSACTION_PROVIDER;
};

export type MerchantClientTransactionSessionBaseConfigData = MerchantClientTransactionSessionGenericBaseConfig | MerchantClientTransactionSessionNuveiBaseConfig;

export type MerchantClientTransactionSessionGenericBaseConfig = {
  __typename?: 'MerchantClientTransactionSessionGenericBaseConfig';
  provider: TRANSACTION_PROVIDER;
  publicKey?: Maybe<Scalars['String']['output']>;
};

export type MerchantClientTransactionSessionNuveiBaseConfig = {
  __typename?: 'MerchantClientTransactionSessionNuveiBaseConfig';
  env: Scalars['String']['output'];
  /** @deprecated Use `env` instead. */
  environment: Scalars['String']['output'];
  merchantId: Scalars['String']['output'];
  merchantSiteId: Scalars['String']['output'];
  /** @deprecated Use parent `provider` instead. */
  provider: TRANSACTION_PROVIDER;
};

export type MerchantClientTransactionSessionPaginationConnection = {
  __typename?: 'MerchantClientTransactionSessionPaginationConnection';
  edges: Array<MerchantClientTransactionSessionPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantClientTransactionSessionPaginationEdge = {
  __typename?: 'MerchantClientTransactionSessionPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantClientTransactionSession;
};

export type MerchantCreateSchema = {
  addressCity: Scalars['String']['input'];
  addressCountry: COUNTRY_ISO_2;
  addressLine1: Scalars['String']['input'];
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressPostalCode: Scalars['String']['input'];
  addressState: Scalars['String']['input'];
  email: Scalars['String']['input'];
  entityType: MERCHANT_ENTITY_TYPE;
  industry: Scalars['String']['input'];
  legalAddressCity: Scalars['String']['input'];
  legalAddressCountry: COUNTRY_ISO_2;
  legalAddressLine1: Scalars['String']['input'];
  legalAddressLine2?: InputMaybe<Scalars['String']['input']>;
  legalAddressPostalCode: Scalars['String']['input'];
  legalAddressState: Scalars['String']['input'];
  legalIdentifier: Scalars['String']['input'];
  legalIdentifierType: LEGAL_IDENTIFIER_TYPE;
  locale?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  primaryContactEmail: Scalars['String']['input'];
  primaryContactName: Scalars['String']['input'];
  primaryContactPhone: Scalars['String']['input'];
  timezone?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type MerchantCustomerPaymentMethod = {
  __typename?: 'MerchantCustomerPaymentMethod';
  billingAddressCity?: Maybe<Scalars['String']['output']>;
  billingAddressCountry?: Maybe<COUNTRY_ISO_2>;
  billingAddressLine1?: Maybe<Scalars['String']['output']>;
  billingAddressLine2?: Maybe<Scalars['String']['output']>;
  billingAddressPostalCode?: Maybe<Scalars['String']['output']>;
  billingAddressState?: Maybe<Scalars['String']['output']>;
  billingEmail?: Maybe<Scalars['String']['output']>;
  billingFirstName?: Maybe<Scalars['String']['output']>;
  billingLastName?: Maybe<Scalars['String']['output']>;
  billingPhone?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  expiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  initialTransactionId?: Maybe<Scalars['String']['output']>;
  isDefault: Scalars['Boolean']['output'];
  isEnabled: Scalars['Boolean']['output'];
  merchantInternalCustomerCode: Scalars['String']['output'];
  methodType: PAYMENT_METHOD;
  paymentMethodInfo?: Maybe<MerchantCustomerPaymentMethodInfo>;
  providerCode: Scalars['String']['output'];
  providerError?: Maybe<Scalars['String']['output']>;
  providerLastSyncedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  providerLastVerifiedAt: Scalars['DateTimeISO']['output'];
  providerStatus: PAYMENT_METHOD_STATUS;
  status: PAYMENT_METHOD_STATUS;
  transactionProviderId: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantCustomerPaymentMethodAchInfo = {
  __typename?: 'MerchantCustomerPaymentMethodAchInfo';
  accountNumber?: Maybe<Scalars['String']['output']>;
  methodType: PAYMENT_METHOD;
  routingNumber?: Maybe<Scalars['String']['output']>;
  secCode?: Maybe<TRANSACTION_ACH_SECCODE>;
};

export type MerchantCustomerPaymentMethodCreditCardInfo = {
  __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo';
  cardBrand?: Maybe<Scalars['String']['output']>;
  cardNumberMasked?: Maybe<Scalars['String']['output']>;
  methodType: PAYMENT_METHOD;
};

export type MerchantCustomerPaymentMethodGenericInfo = {
  __typename?: 'MerchantCustomerPaymentMethodGenericInfo';
  methodType: PAYMENT_METHOD;
};

export type MerchantCustomerPaymentMethodInfo = MerchantCustomerPaymentMethodAchInfo | MerchantCustomerPaymentMethodCreditCardInfo | MerchantCustomerPaymentMethodGenericInfo;

export type MerchantCustomerPaymentMethodPaginationConnection = {
  __typename?: 'MerchantCustomerPaymentMethodPaginationConnection';
  edges: Array<MerchantCustomerPaymentMethodPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantCustomerPaymentMethodPaginationEdge = {
  __typename?: 'MerchantCustomerPaymentMethodPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantCustomerPaymentMethod;
};

export type MerchantPaginationConnection = {
  __typename?: 'MerchantPaginationConnection';
  edges: Array<MerchantPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantPaginationEdge = {
  __typename?: 'MerchantPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: Merchant;
};

export type MerchantPaymentPlan = {
  __typename?: 'MerchantPaymentPlan';
  amount: Scalars['BigInt']['output'];
  canceledAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  currency: CURRENCY;
  currentPeriodEnd: Scalars['DateTimeISO']['output'];
  currentPeriodStart: Scalars['DateTimeISO']['output'];
  endsAfterDays: Scalars['Int']['output'];
  endsAfterMonths: Scalars['Int']['output'];
  endsAfterYears: Scalars['Int']['output'];
  endsAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  initialAmount: Scalars['BigInt']['output'];
  merchantInternalCustomerCode: Scalars['String']['output'];
  merchantInternalPaymentPlanCode: Scalars['String']['output'];
  merchantInternalPaymentPlanDescription?: Maybe<Scalars['String']['output']>;
  payload: Scalars['JSON']['output'];
  paymentMethod: MerchantCustomerPaymentMethod;
  paymentMethodId: Scalars['String']['output'];
  periodCount: Scalars['Int']['output'];
  providerCode: Scalars['String']['output'];
  providerError?: Maybe<Scalars['String']['output']>;
  providerLastSyncedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  providerLastVerifiedAt: Scalars['DateTimeISO']['output'];
  providerStatus: PAYMENT_PLAN_STATUS;
  renewalIntervalDays: Scalars['Int']['output'];
  renewalIntervalMonths: Scalars['Int']['output'];
  renewalIntervalYears: Scalars['Int']['output'];
  startedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: PAYMENT_PLAN_STATUS;
  template?: Maybe<MerchantPaymentPlanTemplate>;
  templateId?: Maybe<Scalars['String']['output']>;
  timeAnchor: Scalars['DateTimeISO']['output'];
  transactionProvider: MerchantTransactionProvider;
  transactionProviderId: Scalars['String']['output'];
  transactions: Array<MerchantTransaction>;
  trialEndsAt: Scalars['DateTimeISO']['output'];
  trialPeriodDays: Scalars['Int']['output'];
  trialPeriodMonths: Scalars['Int']['output'];
  trialPeriodYears: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantPaymentPlanCreateSchema = {
  amount: Scalars['BigInt']['input'];
  currency: CURRENCY;
  endsAfterDays: Scalars['Int']['input'];
  endsAfterMonths: Scalars['Int']['input'];
  endsAfterYears: Scalars['Int']['input'];
  initialAmount: Scalars['BigInt']['input'];
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantInternalPaymentPlanCode: Scalars['String']['input'];
  merchantInternalPaymentPlanDescription?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId: Scalars['String']['input'];
  renewalIntervalDays: Scalars['Int']['input'];
  renewalIntervalMonths: Scalars['Int']['input'];
  renewalIntervalYears: Scalars['Int']['input'];
  templateId: Scalars['String']['input'];
  trialPeriodDays: Scalars['Int']['input'];
  trialPeriodMonths: Scalars['Int']['input'];
  trialPeriodYears: Scalars['Int']['input'];
};

export type MerchantPaymentPlanPaginationConnection = {
  __typename?: 'MerchantPaymentPlanPaginationConnection';
  edges: Array<MerchantPaymentPlanPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantPaymentPlanPaginationEdge = {
  __typename?: 'MerchantPaymentPlanPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantPaymentPlan;
};

export type MerchantPaymentPlanTemplate = {
  __typename?: 'MerchantPaymentPlanTemplate';
  amount: Scalars['BigInt']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  currency: CURRENCY;
  description?: Maybe<Scalars['String']['output']>;
  endsAfterDays: Scalars['Int']['output'];
  endsAfterMonths: Scalars['Int']['output'];
  endsAfterYears: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  initialAmount: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  payload: Scalars['JSON']['output'];
  providerCode: Scalars['String']['output'];
  providerError?: Maybe<Scalars['String']['output']>;
  providerLastSyncedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  providerLastVerifiedAt: Scalars['DateTimeISO']['output'];
  providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS;
  renewalIntervalDays: Scalars['Int']['output'];
  renewalIntervalMonths: Scalars['Int']['output'];
  renewalIntervalYears: Scalars['Int']['output'];
  transactionProviderId: Scalars['String']['output'];
  trialPeriodDays: Scalars['Int']['output'];
  trialPeriodMonths: Scalars['Int']['output'];
  trialPeriodYears: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantPaymentPlanTemplateCreateSchema = {
  amount: Scalars['BigInt']['input'];
  currency: CURRENCY;
  description?: InputMaybe<Scalars['String']['input']>;
  endsAfterDays: Scalars['Int']['input'];
  endsAfterMonths: Scalars['Int']['input'];
  endsAfterYears: Scalars['Int']['input'];
  initialAmount: Scalars['BigInt']['input'];
  name: Scalars['String']['input'];
  providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS;
  renewalIntervalDays: Scalars['Int']['input'];
  renewalIntervalMonths: Scalars['Int']['input'];
  renewalIntervalYears: Scalars['Int']['input'];
  trialPeriodDays: Scalars['Int']['input'];
  trialPeriodMonths: Scalars['Int']['input'];
  trialPeriodYears: Scalars['Int']['input'];
};

export type MerchantPaymentPlanTemplatePaginationConnection = {
  __typename?: 'MerchantPaymentPlanTemplatePaginationConnection';
  edges: Array<MerchantPaymentPlanTemplatePaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantPaymentPlanTemplatePaginationEdge = {
  __typename?: 'MerchantPaymentPlanTemplatePaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantPaymentPlanTemplate;
};

export type MerchantPaymentPlanTemplateUpdateSchema = {
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  currency?: InputMaybe<CURRENCY>;
  description?: InputMaybe<Scalars['String']['input']>;
  endsAfterDays?: InputMaybe<Scalars['Int']['input']>;
  endsAfterMonths?: InputMaybe<Scalars['Int']['input']>;
  endsAfterYears?: InputMaybe<Scalars['Int']['input']>;
  initialAmount?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  providerStatus?: InputMaybe<PAYMENT_PLAN_TEMPLATE_STATUS>;
  renewalIntervalDays?: InputMaybe<Scalars['Int']['input']>;
  renewalIntervalMonths?: InputMaybe<Scalars['Int']['input']>;
  renewalIntervalYears?: InputMaybe<Scalars['Int']['input']>;
  trialPeriodDays?: InputMaybe<Scalars['Int']['input']>;
  trialPeriodMonths?: InputMaybe<Scalars['Int']['input']>;
  trialPeriodYears?: InputMaybe<Scalars['Int']['input']>;
};

export type MerchantServerAchTransactionDataSchema = {
  accountNumber: Scalars['String']['input'];
  routingNumber: Scalars['String']['input'];
  secCode?: InputMaybe<TRANSACTION_ACH_SECCODE>;
};

export type MerchantTransaction = {
  __typename?: 'MerchantTransaction';
  action: TRANSACTION_ACTION;
  amount: Scalars['BigInt']['output'];
  billingAddressCity?: Maybe<Scalars['String']['output']>;
  billingAddressCountry?: Maybe<COUNTRY_ISO_2>;
  billingAddressLine1?: Maybe<Scalars['String']['output']>;
  billingAddressLine2?: Maybe<Scalars['String']['output']>;
  billingAddressPostalCode?: Maybe<Scalars['String']['output']>;
  billingAddressState?: Maybe<Scalars['String']['output']>;
  billingEmail?: Maybe<Scalars['String']['output']>;
  billingFirstName?: Maybe<Scalars['String']['output']>;
  billingLastName?: Maybe<Scalars['String']['output']>;
  billingPhone?: Maybe<Scalars['String']['output']>;
  canceledAt?: Maybe<Scalars['DateTimeISO']['output']>;
  clientTransactionSession?: Maybe<MerchantClientTransactionSession>;
  clientTransactionSessionId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use other identifiers instead. */
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  currency: CURRENCY;
  deviceBrowser?: Maybe<Scalars['String']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  deviceIp?: Maybe<Scalars['String']['output']>;
  deviceName?: Maybe<Scalars['String']['output']>;
  deviceOS?: Maybe<Scalars['String']['output']>;
  deviceType?: Maybe<DEVICE_TYPE>;
  disputedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  failedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  merchantInternalCustomerCode?: Maybe<Scalars['String']['output']>;
  merchantInternalTransactionCode?: Maybe<Scalars['String']['output']>;
  payload: Scalars['JSON']['output'];
  paymentMethod?: Maybe<MerchantCustomerPaymentMethod>;
  paymentMethodCode?: Maybe<Scalars['String']['output']>;
  paymentMethodId?: Maybe<Scalars['String']['output']>;
  paymentMethodInitialTransaction?: Maybe<MerchantCustomerPaymentMethod>;
  paymentMethodType?: Maybe<PAYMENT_METHOD>;
  paymentPlan?: Maybe<MerchantPaymentPlan>;
  paymentPlanId?: Maybe<Scalars['String']['output']>;
  providerCode: Scalars['String']['output'];
  providerError?: Maybe<Scalars['String']['output']>;
  providerLastSyncedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  providerLastVerifiedAt: Scalars['DateTimeISO']['output'];
  providerRelatedCode?: Maybe<Scalars['String']['output']>;
  providerStatus: TRANSACTION_STATUS;
  refundedAmount?: Maybe<Scalars['BigInt']['output']>;
  refundedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  relatedTransaction?: Maybe<MerchantTransaction>;
  relatedTransactionId?: Maybe<Scalars['String']['output']>;
  shippingAddressCity?: Maybe<Scalars['String']['output']>;
  shippingAddressCountry?: Maybe<COUNTRY_ISO_2>;
  shippingAddressLine1?: Maybe<Scalars['String']['output']>;
  shippingAddressLine2?: Maybe<Scalars['String']['output']>;
  shippingAddressPostalCode?: Maybe<Scalars['String']['output']>;
  shippingAddressState?: Maybe<Scalars['String']['output']>;
  shippingEmail?: Maybe<Scalars['String']['output']>;
  shippingFirstName?: Maybe<Scalars['String']['output']>;
  shippingLastName?: Maybe<Scalars['String']['output']>;
  shippingPhone?: Maybe<Scalars['String']['output']>;
  startedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: TRANSACTION_STATUS;
  storePaymentMethod?: Maybe<Scalars['Boolean']['output']>;
  succeededAt?: Maybe<Scalars['DateTimeISO']['output']>;
  /** @deprecated Use Payment Session API instead. */
  token?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use Payment Session API instead. */
  tokenExpiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  transactionDate: Scalars['DateTimeISO']['output'];
  transactionError?: Maybe<Scalars['String']['output']>;
  transactionProvider: MerchantTransactionProvider;
  transactionProviderId: Scalars['String']['output'];
  transactionsRelated?: Maybe<Array<MerchantTransaction>>;
  updatedAt: Scalars['DateTimeISO']['output'];
  userAddressCity?: Maybe<Scalars['String']['output']>;
  userAddressCountry?: Maybe<COUNTRY_ISO_2>;
  userAddressLine1?: Maybe<Scalars['String']['output']>;
  userAddressLine2?: Maybe<Scalars['String']['output']>;
  userAddressPostalCode?: Maybe<Scalars['String']['output']>;
  userAddressState?: Maybe<Scalars['String']['output']>;
  userBirthDate?: Maybe<Scalars['DateTimeISO']['output']>;
  userEmail?: Maybe<Scalars['String']['output']>;
  userFirstName?: Maybe<Scalars['String']['output']>;
  userLastName?: Maybe<Scalars['String']['output']>;
  userLegalIdentifier?: Maybe<Scalars['String']['output']>;
  userLegalIdentifierType?: Maybe<Scalars['String']['output']>;
  userLocale?: Maybe<Scalars['String']['output']>;
  userPhone?: Maybe<Scalars['String']['output']>;
  voidedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MerchantTransactionPaginationConnection = {
  __typename?: 'MerchantTransactionPaginationConnection';
  edges: Array<MerchantTransactionPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantTransactionPaginationEdge = {
  __typename?: 'MerchantTransactionPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantTransaction;
};

export type MerchantTransactionProvider = {
  __typename?: 'MerchantTransactionProvider';
  applicationId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  merchantId: Scalars['String']['output'];
  provider: TRANSACTION_PROVIDER;
  providerCode: Scalars['String']['output'];
  status: MERCHANT_TRANSACTION_PROVIDER_STATUS;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantTransactionProviderApplication = {
  __typename?: 'MerchantTransactionProviderApplication';
  addressCity: Scalars['String']['output'];
  addressCountry: COUNTRY_ISO_2;
  addressLine1: Scalars['String']['output'];
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressPostalCode: Scalars['String']['output'];
  addressState: Scalars['String']['output'];
  closedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  entityType: MERCHANT_ENTITY_TYPE;
  id: Scalars['ID']['output'];
  industry: Scalars['String']['output'];
  legalAddressCity: Scalars['String']['output'];
  legalAddressCountry: COUNTRY_ISO_2;
  legalAddressLine1: Scalars['String']['output'];
  legalAddressLine2?: Maybe<Scalars['String']['output']>;
  legalAddressPostalCode: Scalars['String']['output'];
  legalAddressState: Scalars['String']['output'];
  legalIdentifier: Scalars['String']['output'];
  legalIdentifierType: LEGAL_IDENTIFIER_TYPE;
  merchantId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  primaryContactEmail: Scalars['String']['output'];
  primaryContactName: Scalars['String']['output'];
  primaryContactPhone: Scalars['String']['output'];
  provider: TRANSACTION_PROVIDER;
  providerCode: Scalars['String']['output'];
  providerError?: Maybe<Scalars['String']['output']>;
  providerLastSyncedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  providerLastVerifiedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  providerStatus?: Maybe<MERCHANT_TRANSACTION_PROVIDER_APPLICATION_STATUS>;
  startedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: MERCHANT_TRANSACTION_PROVIDER_APPLICATION_STATUS;
  statusDescription?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  websiteUrl: Scalars['String']['output'];
};

export type MerchantTransactionProviderApplicationPaginationConnection = {
  __typename?: 'MerchantTransactionProviderApplicationPaginationConnection';
  edges: Array<MerchantTransactionProviderApplicationPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantTransactionProviderApplicationPaginationEdge = {
  __typename?: 'MerchantTransactionProviderApplicationPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantTransactionProviderApplication;
};

export type MerchantTransactionProviderPaginationConnection = {
  __typename?: 'MerchantTransactionProviderPaginationConnection';
  edges: Array<MerchantTransactionProviderPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantTransactionProviderPaginationEdge = {
  __typename?: 'MerchantTransactionProviderPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantTransactionProvider;
};

export type MerchantUpdateSchema = {
  addressCity?: InputMaybe<Scalars['String']['input']>;
  addressCountry?: InputMaybe<COUNTRY_ISO_2>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressPostalCode?: InputMaybe<Scalars['String']['input']>;
  addressState?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  legalAddressCity?: InputMaybe<Scalars['String']['input']>;
  legalAddressCountry?: InputMaybe<COUNTRY_ISO_2>;
  legalAddressLine1?: InputMaybe<Scalars['String']['input']>;
  legalAddressLine2?: InputMaybe<Scalars['String']['input']>;
  legalAddressPostalCode?: InputMaybe<Scalars['String']['input']>;
  legalAddressState?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  primaryContactEmail?: InputMaybe<Scalars['String']['input']>;
  primaryContactName?: InputMaybe<Scalars['String']['input']>;
  primaryContactPhone?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type MerchantUser = {
  __typename?: 'MerchantUser';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  invitationId?: Maybe<Scalars['String']['output']>;
  isEnabled: Scalars['Boolean']['output'];
  merchant: Merchant;
  merchantId: Scalars['String']['output'];
  role: MERCHANT_USER_ROLE;
  updatedAt: Scalars['DateTimeISO']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type MerchantUserInvitation = {
  __typename?: 'MerchantUserInvitation';
  acceptedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  canceledAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  createdByMerchantUserId: Scalars['String']['output'];
  email: Scalars['String']['output'];
  expiresAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  merchant: Merchant;
  merchantId: Scalars['String']['output'];
  rejectedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  role: MERCHANT_USER_ROLE;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantUserInvitationCreateSchema = {
  email: Scalars['String']['input'];
  expiresAt: Scalars['DateTimeISO']['input'];
  role: MERCHANT_USER_ROLE;
};

export type MerchantUserInvitationPaginationConnection = {
  __typename?: 'MerchantUserInvitationPaginationConnection';
  edges: Array<MerchantUserInvitationPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantUserInvitationPaginationEdge = {
  __typename?: 'MerchantUserInvitationPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantUserInvitation;
};

export type MerchantUserPaginationConnection = {
  __typename?: 'MerchantUserPaginationConnection';
  edges: Array<MerchantUserPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantUserPaginationEdge = {
  __typename?: 'MerchantUserPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantUser;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminAuthenticatorRevoke: Authenticator;
  adminErrorLogMarkAllAsResolved: Scalars['DateTimeISO']['output'];
  adminErrorLogMarkAsResolved: ErrorLog;
  adminMerchantApiKeyCreate: MerchantApiKey;
  adminMerchantApiKeyDelete: Scalars['DateTimeISO']['output'];
  adminMerchantCreate: Merchant;
  adminMerchantResetPublicId: Merchant;
  adminMerchantTransactionProviderApplicationUpdate: MerchantTransactionProviderApplication;
  adminMerchantTransactionProviderCreate: MerchantTransactionProvider;
  adminMerchantTransactionProviderUpdate: MerchantTransactionProvider;
  adminMerchantTransactionProviderUpdateStatus: MerchantTransactionProvider;
  adminMerchantUpdate: Merchant;
  adminMerchantUpdateStatus: Merchant;
  adminMerchantUserCreate: MerchantUser;
  adminMerchantUserUpdate: MerchantUser;
  merchantApiClientTransactionAddPaymentMethodSessionStart: MerchantClientTransactionSession;
  merchantApiClientTransactionAddPaymentMethodSessionVerify: MerchantTransaction;
  merchantApiClientTransactionPaymentSessionStart: MerchantTransaction;
  merchantApiClientTransactionPaymentSessionStartV2: MerchantClientTransactionSession;
  merchantApiClientTransactionPaymentSessionVerify: MerchantTransaction;
  merchantApiCustomerPaymentMethodSyncAll: Array<MerchantCustomerPaymentMethod>;
  merchantApiCustomerPaymentMethodSyncOne: MerchantCustomerPaymentMethod;
  merchantApiPaymentPlanCancel: MerchantPaymentPlan;
  merchantApiPaymentPlanCreate: MerchantPaymentPlan;
  merchantApiPaymentPlanSyncAll: Array<MerchantPaymentPlan>;
  merchantApiPaymentPlanSyncOne: MerchantPaymentPlan;
  merchantApiPaymentPlanTemplateCreate: MerchantPaymentPlanTemplate;
  merchantApiPaymentPlanTemplateSyncAll: Array<MerchantPaymentPlanTemplate>;
  merchantApiPaymentPlanTemplateSyncOne: MerchantPaymentPlanTemplate;
  merchantApiPaymentPlanTemplateUpdate: MerchantPaymentPlanTemplate;
  merchantApiServerAchPaymentTransactionCreate: MerchantTransaction;
  merchantApiServerPaymentMethodTransactionCreate: MerchantTransaction;
  merchantApiTransactionRefund: MerchantTransaction;
  merchantApiTransactionSyncOne: MerchantTransaction;
  merchantApiTransactionVoid: MerchantTransaction;
  userAuthenticatorRevoke: Authenticator;
  userAuthenticatorTotpEnrollmentConfirm: Authenticator;
  userAuthenticatorTotpEnrollmentStart: AuthenticatorEnrollmentSession;
  userAuthenticatorTotpReplacementConfirm: Authenticator;
  userAuthenticatorTotpReplacementStart: AuthenticatorReplacementSession;
  userEmailVerifyOrChangeFinish: User;
  userEmailVerifyOrChangeStart: Scalars['DateTimeISO']['output'];
  userHandleLoginAttempt: Scalars['DateTimeISO']['output'];
  userMerchantApiKeyCreate: MerchantApiKey;
  userMerchantApiKeyDelete: Scalars['Boolean']['output'];
  userMerchantApiKeyShowSecret: Scalars['String']['output'];
  userMerchantCreate: MerchantUser;
  userMerchantCustomerPaymentMethodSyncOne: MerchantCustomerPaymentMethod;
  userMerchantPaymentPlanSyncOne: MerchantPaymentPlan;
  userMerchantPaymentPlanTemplateSyncOne: MerchantPaymentPlanTemplate;
  userMerchantSentInvitationCancel: MerchantUserInvitation;
  userMerchantSentInvitationCreate: MerchantUserInvitation;
  userMerchantTransactionProviderApplicationApply: MerchantTransactionProviderApplication;
  userMerchantTransactionProviderCreate: MerchantTransactionProvider;
  userMerchantTransactionProviderIntegrationLogAuthenticatorSessionCreate: AuthenticatorSession;
  userMerchantTransactionSyncOne: MerchantTransaction;
  userMerchantUpdate: Merchant;
  userPasswordChangeFinish: Scalars['String']['output'];
  userPasswordChangeStart: Scalars['DateTimeISO']['output'];
  userPasswordResetFinish: Scalars['String']['output'];
  userPasswordResetStart: Scalars['String']['output'];
  userReceivedMerchantInvitationAccept: MerchantUserInvitation;
  userReceivedMerchantInvitationReject: MerchantUserInvitation;
  userSessionsClose: Scalars['DateTimeISO']['output'];
  /** This method is used to finish the user sign up process. The string returned is the authentication provider custom token, use it to log in. */
  userSignUpWithEmailFinish: Scalars['String']['output'];
  userSignUpWithEmailStart: Scalars['DateTimeISO']['output'];
  userSignUpWithEmailVerify: Scalars['DateTimeISO']['output'];
  userUpdateData: User;
};


export type MutationadminAuthenticatorRevokeArgs = {
  authenticatorId: Scalars['String']['input'];
};


export type MutationadminErrorLogMarkAsResolvedArgs = {
  errorLogId: Scalars['String']['input'];
};


export type MutationadminMerchantApiKeyCreateArgs = {
  merchantId: Scalars['String']['input'];
};


export type MutationadminMerchantApiKeyDeleteArgs = {
  merchantApiKeyId: Scalars['String']['input'];
};


export type MutationadminMerchantCreateArgs = {
  data: AdminMerchantCreateSchema;
};


export type MutationadminMerchantResetPublicIdArgs = {
  merchantId: Scalars['String']['input'];
};


export type MutationadminMerchantTransactionProviderApplicationUpdateArgs = {
  data: AdminMerchantTransactionProviderApplicationUpdateSchema;
  merchantTransactionProviderApplicationId: Scalars['String']['input'];
};


export type MutationadminMerchantTransactionProviderCreateArgs = {
  data: AdminMerchantTransactionProviderCreateSchema;
};


export type MutationadminMerchantTransactionProviderUpdateArgs = {
  data: AdminMerchantTransactionProviderUpdateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationadminMerchantTransactionProviderUpdateStatusArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
  status: MERCHANT_TRANSACTION_PROVIDER_STATUS;
};


export type MutationadminMerchantUpdateArgs = {
  data: AdminMerchantUpdateSchema;
  merchantId: Scalars['String']['input'];
};


export type MutationadminMerchantUpdateStatusArgs = {
  merchantId: Scalars['String']['input'];
  status: MERCHANT_STATUS;
};


export type MutationadminMerchantUserCreateArgs = {
  data: AdminMerchantUserCreateSchema;
  merchantId: Scalars['String']['input'];
};


export type MutationadminMerchantUserUpdateArgs = {
  data: AdminMerchantUserUpdateSchema;
  merchantUserId: Scalars['String']['input'];
};


export type MutationmerchantApiClientTransactionAddPaymentMethodSessionStartArgs = {
  data: MerchantApiClientTransactionAddPaymentMethodSessionStartSchema;
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
};


export type MutationmerchantApiClientTransactionAddPaymentMethodSessionVerifyArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationmerchantApiClientTransactionPaymentSessionStartArgs = {
  data: MerchantApiClientTransactionPaymentStartSchema;
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
};


export type MutationmerchantApiClientTransactionPaymentSessionStartV2Args = {
  data: MerchantApiClientTransactionPaymentSessionStartSchema;
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
};


export type MutationmerchantApiClientTransactionPaymentSessionVerifyArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationmerchantApiCustomerPaymentMethodSyncAllArgs = {
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiCustomerPaymentMethodSyncOneArgs = {
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanCancelArgs = {
  merchantPaymentPlanId: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanCreateArgs = {
  data: MerchantPaymentPlanCreateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanSyncAllArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanSyncOneArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanTemplateCreateArgs = {
  data: MerchantPaymentPlanTemplateCreateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanTemplateSyncAllArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanTemplateSyncOneArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanTemplateUpdateArgs = {
  data: MerchantPaymentPlanTemplateUpdateSchema;
  merchantPaymentPlanTemplateId: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiServerAchPaymentTransactionCreateArgs = {
  data: MerchantApiServerAchPaymentTransactionCreateSchema;
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
};


export type MutationmerchantApiServerPaymentMethodTransactionCreateArgs = {
  data: MerchantApiServerPaymentMethodTransactionCreateSchema;
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
};


export type MutationmerchantApiTransactionRefundArgs = {
  amount: Scalars['BigInt']['input'];
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationmerchantApiTransactionSyncOneArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationmerchantApiTransactionVoidArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationuserAuthenticatorRevokeArgs = {
  authenticatorChallengePayload: Scalars['JSON']['input'];
  authenticatorId: Scalars['String']['input'];
};


export type MutationuserAuthenticatorTotpEnrollmentConfirmArgs = {
  data: AuthenticatorEnrollmentConfirmSchema;
  payload: TotpEnrollmentConfirmPayloadSchema;
};


export type MutationuserAuthenticatorTotpEnrollmentStartArgs = {
  data: AuthenticatorEnrollmentStartSchema;
};


export type MutationuserAuthenticatorTotpReplacementConfirmArgs = {
  data: AuthenticatorReplacementConfirmSchema;
  payload: TotpReplacementConfirmPayloadSchema;
};


export type MutationuserAuthenticatorTotpReplacementStartArgs = {
  authenticatorChallengePayload: Scalars['JSON']['input'];
  data: AuthenticatorReplacementStartSchema;
};


export type MutationuserEmailVerifyOrChangeFinishArgs = {
  data: UserEmailVerifyOrChangeFinishSchema;
};


export type MutationuserEmailVerifyOrChangeStartArgs = {
  data: UserEmailVerifyOrChangeStartSchema;
};


export type MutationuserHandleLoginAttemptArgs = {
  email: Scalars['String']['input'];
};


export type MutationuserMerchantApiKeyCreateArgs = {
  authenticatorChallengePayload: Scalars['JSON']['input'];
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationuserMerchantApiKeyDeleteArgs = {
  authenticatorChallengePayload: Scalars['JSON']['input'];
  merchantApiKeyId: Scalars['String']['input'];
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationuserMerchantApiKeyShowSecretArgs = {
  authenticatorChallengePayload: Scalars['JSON']['input'];
  merchantApiKeyId: Scalars['String']['input'];
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationuserMerchantCreateArgs = {
  data: MerchantCreateSchema;
};


export type MutationuserMerchantCustomerPaymentMethodSyncOneArgs = {
  merchantId?: InputMaybe<Scalars['String']['input']>;
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode: Scalars['String']['input'];
};


export type MutationuserMerchantPaymentPlanSyncOneArgs = {
  merchantId?: InputMaybe<Scalars['String']['input']>;
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode: Scalars['String']['input'];
};


export type MutationuserMerchantPaymentPlanTemplateSyncOneArgs = {
  merchantId?: InputMaybe<Scalars['String']['input']>;
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode: Scalars['String']['input'];
};


export type MutationuserMerchantSentInvitationCancelArgs = {
  invitationId: Scalars['String']['input'];
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationuserMerchantSentInvitationCreateArgs = {
  data: MerchantUserInvitationCreateSchema;
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationuserMerchantTransactionProviderApplicationApplyArgs = {
  merchantId?: InputMaybe<Scalars['String']['input']>;
  provider: TRANSACTION_PROVIDER;
};


export type MutationuserMerchantTransactionProviderCreateArgs = {
  data: UserMerchantTransactionProviderCreateSchema;
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationuserMerchantTransactionProviderIntegrationLogAuthenticatorSessionCreateArgs = {
  authenticatorChallengePayload: Scalars['JSON']['input'];
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationuserMerchantTransactionSyncOneArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationuserMerchantUpdateArgs = {
  data: MerchantUpdateSchema;
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationuserPasswordChangeFinishArgs = {
  data: UserPasswordChangeFinishSchema;
};


export type MutationuserPasswordResetFinishArgs = {
  data: UserPasswordResetFinishSchema;
};


export type MutationuserPasswordResetStartArgs = {
  data: UserPasswordResetStartSchema;
};


export type MutationuserReceivedMerchantInvitationAcceptArgs = {
  invitationId: Scalars['String']['input'];
};


export type MutationuserReceivedMerchantInvitationRejectArgs = {
  invitationId: Scalars['String']['input'];
};


export type MutationuserSignUpWithEmailFinishArgs = {
  data: UserSignUpWithEmailFinishSchema;
};


export type MutationuserSignUpWithEmailStartArgs = {
  data: UserSignUpWithEmailStartSchema;
};


export type MutationuserSignUpWithEmailVerifyArgs = {
  data: UserSignUpWithEmailVerifySchema;
};


export type MutationuserUpdateDataArgs = {
  data: UserUpdateDataSchema;
};

export enum PAYMENT_METHOD {
  ACH = 'ACH',
  CARD = 'CARD',
  OTHER = 'OTHER'
}

export enum PAYMENT_METHOD_STATUS {
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED',
  EXPIRED = 'EXPIRED'
}

export enum PAYMENT_PLAN_STATUS {
  ACTIVE = 'ACTIVE',
  CANCELED = 'CANCELED',
  ENDED = 'ENDED',
  ERROR = 'ERROR',
  INACTIVE = 'INACTIVE',
  INITIALIZING = 'INITIALIZING'
}

export enum PAYMENT_PLAN_TEMPLATE_STATUS {
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  adminAuthenticators: AuthenticatorPaginationConnection;
  adminErrorLogs: ErrorLogPaginationConnection;
  adminMerchant: Merchant;
  adminMerchantApiKey: MerchantApiKey;
  adminMerchantApiKeys: MerchantApiKeyPaginationConnection;
  adminMerchantTransactionProvider: MerchantTransactionProvider;
  adminMerchantTransactionProviderApplication: MerchantTransactionProviderApplication;
  adminMerchantTransactionProviderApplications: MerchantTransactionProviderApplicationPaginationConnection;
  adminMerchantTransactionProviderCredential: Scalars['JSON']['output'];
  adminMerchantTransactionProviders: MerchantTransactionProviderPaginationConnection;
  adminMerchantUser: MerchantUser;
  adminMerchantUsers: MerchantUserPaginationConnection;
  adminMerchants: MerchantPaginationConnection;
  adminUsers: UserPaginationConnection;
  /** @deprecated Use query `clientPublicTransactionSessionBaseConfig` instead. */
  clientPublicTransactionGetPreSessionData: MerchantClientTransactionPreSessionData;
  clientPublicTransactionSession: MerchantClientPublicTransactionSessionData;
  clientPublicTransactionSessionBaseConfig: MerchantClientTransactionSessionBaseConfig;
  healthCheck: Scalars['DateTimeISO']['output'];
  healthLivenessCheck: Scalars['DateTimeISO']['output'];
  healthReadinessCheck: Scalars['DateTimeISO']['output'];
  merchantApi: Merchant;
  /** @deprecated Use query `merchantApiClientSessionGetBaseConfig` instead. */
  merchantApiClientGetPreSessionData: MerchantClientTransactionPreSessionData;
  merchantApiClientTransactionSession: MerchantClientTransactionSession;
  merchantApiClientTransactionSessionBaseConfig: MerchantClientTransactionSessionBaseConfig;
  merchantApiClientTransactionSessions: MerchantClientTransactionSessionPaginationConnection;
  merchantApiCustomerPaymentMethod: MerchantCustomerPaymentMethod;
  merchantApiCustomerPaymentMethods: MerchantCustomerPaymentMethodPaginationConnection;
  merchantApiPaymentPlan: MerchantPaymentPlan;
  merchantApiPaymentPlanTemplate: MerchantPaymentPlanTemplate;
  merchantApiPaymentPlanTemplates: MerchantPaymentPlanTemplatePaginationConnection;
  merchantApiPaymentPlans: MerchantPaymentPlanPaginationConnection;
  merchantApiTransaction: MerchantTransaction;
  merchantApiTransactionProvider: MerchantTransactionProvider;
  merchantApiTransactionProviders: MerchantTransactionProviderPaginationConnection;
  merchantApiTransactions: MerchantTransactionPaginationConnection;
  user: User;
  userAuthenticator: Authenticator;
  userAuthenticators: AuthenticatorPaginationConnection;
  userMerchant: Merchant;
  userMerchantApiKey: MerchantApiKey;
  userMerchantApiKeys: MerchantApiKeyPaginationConnection;
  userMerchantCustomerPaymentMethod: MerchantCustomerPaymentMethod;
  userMerchantCustomerPaymentMethods: MerchantCustomerPaymentMethodPaginationConnection;
  userMerchantPaymentPlan: MerchantPaymentPlan;
  userMerchantPaymentPlanTemplate: MerchantPaymentPlanTemplate;
  userMerchantPaymentPlanTemplates: MerchantPaymentPlanTemplatePaginationConnection;
  userMerchantPaymentPlans: MerchantPaymentPlanPaginationConnection;
  userMerchantSentInvitation: MerchantUserInvitation;
  userMerchantSentInvitations: MerchantUserInvitationPaginationConnection;
  userMerchantTransaction: MerchantTransaction;
  userMerchantTransactionProvider: MerchantTransactionProvider;
  userMerchantTransactionProviderApplication: MerchantTransactionProviderApplication;
  userMerchantTransactionProviderApplications: MerchantTransactionProviderApplicationPaginationConnection;
  userMerchantTransactionProviderGetCredentialsSchema: Scalars['JSON']['output'];
  userMerchantTransactionProviderIntegrationLog: TransactionProviderIntegrationLog;
  userMerchantTransactionProviderIntegrationLogs: TransactionProviderIntegrationLogPaginationConnection;
  userMerchantTransactionProviders: MerchantTransactionProviderPaginationConnection;
  userMerchantTransactions: MerchantTransactionPaginationConnection;
  userMerchants: MerchantPaginationConnection;
  userReceivedMerchantInvitation: MerchantUserInvitation;
  userReceivedMerchantInvitations: MerchantUserInvitationPaginationConnection;
};


export type QueryadminAuthenticatorsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  entityId?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<AUTHENTICATOR_ENTITY_TYPE>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  status?: InputMaybe<AUTHENTICATOR_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<AUTHENTICATOR_TYPE>;
};


export type QueryadminErrorLogsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  environment?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  handler?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  operation?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  resolved?: InputMaybe<Scalars['Boolean']['input']>;
  resolvedByEmail?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  source?: InputMaybe<Scalars['String']['input']>;
  statusCode?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryadminMerchantArgs = {
  merchantId: Scalars['String']['input'];
};


export type QueryadminMerchantApiKeyArgs = {
  merchantApiKeyId: Scalars['String']['input'];
};


export type QueryadminMerchantApiKeysArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryadminMerchantTransactionProviderArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type QueryadminMerchantTransactionProviderApplicationArgs = {
  merchantTransactionProviderApplicationId: Scalars['String']['input'];
};


export type QueryadminMerchantTransactionProviderApplicationsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  closed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<TRANSACTION_PROVIDER>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<MERCHANT_TRANSACTION_PROVIDER_APPLICATION_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryadminMerchantTransactionProviderCredentialArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type QueryadminMerchantTransactionProvidersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<TRANSACTION_PROVIDER>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  status?: InputMaybe<MERCHANT_TRANSACTION_PROVIDER_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryadminMerchantUserArgs = {
  merchantUserId: Scalars['String']['input'];
};


export type QueryadminMerchantUsersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<MERCHANT_USER_ROLE>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryadminMerchantsArgs = {
  addressCity?: InputMaybe<Scalars['String']['input']>;
  addressCountry?: InputMaybe<COUNTRY_ISO_2>;
  addressPostalCode?: InputMaybe<Scalars['String']['input']>;
  addressState?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<MERCHANT_ENTITY_TYPE>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  legalIdentifier?: InputMaybe<Scalars['String']['input']>;
  legalIdentifierType?: InputMaybe<LEGAL_IDENTIFIER_TYPE>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  publicId?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  status?: InputMaybe<MERCHANT_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryadminUsersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryclientPublicTransactionGetPreSessionDataArgs = {
  merchantPublicId: Scalars['String']['input'];
  transactionCode: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
};


export type QueryclientPublicTransactionSessionArgs = {
  merchantPublicId: Scalars['String']['input'];
  transactionSessionId: Scalars['String']['input'];
};


export type QueryclientPublicTransactionSessionBaseConfigArgs = {
  merchantPublicId: Scalars['String']['input'];
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionSessionId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymerchantApiClientGetPreSessionDataArgs = {
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
};


export type QuerymerchantApiClientTransactionSessionArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymerchantApiClientTransactionSessionBaseConfigArgs = {
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
};


export type QuerymerchantApiClientTransactionSessionsArgs = {
  action?: InputMaybe<TRANSACTION_ACTION>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<CURRENCY>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantInternalCustomerCode?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  paymentPlanId?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  providerStatus?: InputMaybe<CLIENT_TRANSACTION_SESSION_STATUS>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymerchantApiCustomerPaymentMethodArgs = {
  merchantCustomerPaymentMethodId: Scalars['String']['input'];
};


export type QuerymerchantApiCustomerPaymentMethodsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialTransactionId?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantInternalCustomerCode?: InputMaybe<Scalars['String']['input']>;
  methodType?: InputMaybe<PAYMENT_METHOD>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymerchantApiPaymentPlanArgs = {
  merchantPaymentPlanId: Scalars['String']['input'];
};


export type QuerymerchantApiPaymentPlanTemplateArgs = {
  merchantPaymentPlanTemplateId: Scalars['String']['input'];
};


export type QuerymerchantApiPaymentPlanTemplatesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<CURRENCY>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  providerStatus?: InputMaybe<PAYMENT_PLAN_TEMPLATE_STATUS>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymerchantApiPaymentPlansArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<CURRENCY>;
  ended?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantInternalCustomerCode?: InputMaybe<Scalars['String']['input']>;
  merchantInternalPaymentPlanCode?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<PAYMENT_METHOD>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  providerStatus?: InputMaybe<PAYMENT_PLAN_STATUS>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  templateId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymerchantApiTransactionArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymerchantApiTransactionProviderArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type QuerymerchantApiTransactionProvidersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<TRANSACTION_PROVIDER>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  status?: InputMaybe<MERCHANT_TRANSACTION_PROVIDER_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerymerchantApiTransactionsArgs = {
  action?: InputMaybe<TRANSACTION_ACTION>;
  actions?: InputMaybe<Array<TRANSACTION_ACTION>>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  clientTransactionSessionId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CURRENCY>;
  disputed?: InputMaybe<Scalars['Boolean']['input']>;
  failed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantInternalCustomerCode?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  paymentMethodCode?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  paymentMethodType?: InputMaybe<PAYMENT_METHOD>;
  paymentPlanId?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  providerRelatedCode?: InputMaybe<Scalars['String']['input']>;
  relatedTransactionId?: InputMaybe<Scalars['String']['input']>;
  reverted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<TRANSACTION_STATUS>;
  statuses?: InputMaybe<Array<TRANSACTION_STATUS>>;
  succeeded?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  transactionDateFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  transactionDateTo?: InputMaybe<Scalars['DateTimeISO']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserAuthenticatorArgs = {
  authenticatorId: Scalars['String']['input'];
};


export type QueryuserAuthenticatorsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  type: AUTHENTICATOR_TYPE;
};


export type QueryuserMerchantArgs = {
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserMerchantApiKeyArgs = {
  merchantApiKeyId: Scalars['String']['input'];
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserMerchantApiKeysArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserMerchantCustomerPaymentMethodArgs = {
  merchantCustomerPaymentMethodId: Scalars['String']['input'];
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserMerchantCustomerPaymentMethodsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  initialTransactionId?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  merchantInternalCustomerCode?: InputMaybe<Scalars['String']['input']>;
  methodType?: InputMaybe<PAYMENT_METHOD>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserMerchantPaymentPlanArgs = {
  merchantId?: InputMaybe<Scalars['String']['input']>;
  merchantPaymentPlanId: Scalars['String']['input'];
};


export type QueryuserMerchantPaymentPlanTemplateArgs = {
  id: Scalars['String']['input'];
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserMerchantPaymentPlanTemplatesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<CURRENCY>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  providerStatus?: InputMaybe<PAYMENT_PLAN_TEMPLATE_STATUS>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserMerchantPaymentPlansArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<CURRENCY>;
  ended?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  merchantInternalCustomerCode?: InputMaybe<Scalars['String']['input']>;
  merchantInternalPaymentPlanCode?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<PAYMENT_METHOD>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  providerStatus?: InputMaybe<PAYMENT_PLAN_STATUS>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  templateId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserMerchantSentInvitationArgs = {
  invitationId: Scalars['String']['input'];
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserMerchantSentInvitationsArgs = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  expired?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  rejected?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserMerchantTransactionArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserMerchantTransactionProviderArgs = {
  merchantId?: InputMaybe<Scalars['String']['input']>;
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type QueryuserMerchantTransactionProviderApplicationArgs = {
  merchantId?: InputMaybe<Scalars['String']['input']>;
  merchantTransactionProviderApplicationId: Scalars['String']['input'];
};


export type QueryuserMerchantTransactionProviderApplicationsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  closed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<TRANSACTION_PROVIDER>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<MERCHANT_TRANSACTION_PROVIDER_APPLICATION_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserMerchantTransactionProviderGetCredentialsSchemaArgs = {
  format: TRANSACTION_PROVIDER_CREDENTIALS_SCHEMA_FORMAT;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  provider: TRANSACTION_PROVIDER;
};


export type QueryuserMerchantTransactionProviderIntegrationLogArgs = {
  authenticatorSessionId: Scalars['String']['input'];
  merchantId?: InputMaybe<Scalars['String']['input']>;
  transactionProviderIntegrationLogId: Scalars['String']['input'];
};


export type QueryuserMerchantTransactionProviderIntegrationLogsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  authenticatorSessionId: Scalars['String']['input'];
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantCustomerPaymentMethodCode?: InputMaybe<Scalars['String']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  merchantPaymentPlanCode?: InputMaybe<Scalars['String']['input']>;
  merchantPaymentPlanTransactionCode?: InputMaybe<Scalars['String']['input']>;
  merchantTransactionCode?: InputMaybe<Scalars['String']['input']>;
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<TRANSACTION_PROVIDER>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  succeeded?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserMerchantTransactionProvidersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<TRANSACTION_PROVIDER>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  status?: InputMaybe<MERCHANT_TRANSACTION_PROVIDER_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserMerchantTransactionsArgs = {
  action?: InputMaybe<TRANSACTION_ACTION>;
  actions?: InputMaybe<Array<TRANSACTION_ACTION>>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  clientTransactionSessionId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CURRENCY>;
  disputed?: InputMaybe<Scalars['Boolean']['input']>;
  failed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  merchantInternalCustomerCode?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  paymentMethodCode?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  paymentMethodType?: InputMaybe<PAYMENT_METHOD>;
  paymentPlanId?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  providerRelatedCode?: InputMaybe<Scalars['String']['input']>;
  relatedTransactionId?: InputMaybe<Scalars['String']['input']>;
  reverted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<TRANSACTION_STATUS>;
  statuses?: InputMaybe<Array<TRANSACTION_STATUS>>;
  succeeded?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  transactionDateFrom?: InputMaybe<Scalars['DateTimeISO']['input']>;
  transactionDateTo?: InputMaybe<Scalars['DateTimeISO']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserMerchantsArgs = {
  addressCity?: InputMaybe<Scalars['String']['input']>;
  addressCountry?: InputMaybe<COUNTRY_ISO_2>;
  addressPostalCode?: InputMaybe<Scalars['String']['input']>;
  addressState?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<MERCHANT_ENTITY_TYPE>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  legalIdentifier?: InputMaybe<Scalars['String']['input']>;
  legalIdentifierType?: InputMaybe<LEGAL_IDENTIFIER_TYPE>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  publicId?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  status?: InputMaybe<MERCHANT_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserReceivedMerchantInvitationArgs = {
  invitationId: Scalars['String']['input'];
};


export type QueryuserReceivedMerchantInvitationsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export enum SORT_ORDER {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type ShippingDataSchema = {
  shippingAddressCity?: InputMaybe<Scalars['String']['input']>;
  /** Country using the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format (e.g. US, UK, etc.). */
  shippingAddressCountry: COUNTRY_ISO_2;
  shippingAddressLine1?: InputMaybe<Scalars['String']['input']>;
  shippingAddressLine2?: InputMaybe<Scalars['String']['input']>;
  shippingAddressPostalCode?: InputMaybe<Scalars['String']['input']>;
  /** State using the [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format for main country subdivisions, provinces, states (e.g. [for US] → NY, IN, CA, etc.). The [iso-3166-2](https://www.npmjs.com/package/iso-3166-2) package is suggested. */
  shippingAddressState?: InputMaybe<Scalars['String']['input']>;
  shippingEmail: Scalars['String']['input'];
  shippingFirstName: Scalars['String']['input'];
  shippingLastName: Scalars['String']['input'];
  shippingPhone?: InputMaybe<Scalars['String']['input']>;
};

export type SortingFieldSchema = {
  field: Scalars['String']['input'];
  order: SORT_ORDER;
};

export enum TRANSACTION_ACH_SECCODE {
  CCD = 'CCD',
  TEL = 'TEL',
  UNKNOWN = 'UNKNOWN',
  WEB = 'WEB'
}

export enum TRANSACTION_ACTION {
  AUTHENTICATION = 'AUTHENTICATION',
  AUTHORIZATION = 'AUTHORIZATION',
  CHARGEBACK = 'CHARGEBACK',
  CREDIT = 'CREDIT',
  MODIFICATION = 'MODIFICATION',
  PAYMENT = 'PAYMENT',
  PAYOUT = 'PAYOUT',
  REFUND = 'REFUND',
  SETTLE = 'SETTLE',
  UNKNOWN = 'UNKNOWN',
  VOID = 'VOID'
}

export enum TRANSACTION_PROVIDER {
  NUVEI = 'NUVEI'
}

export enum TRANSACTION_PROVIDER_CREDENTIALS_SCHEMA_FORMAT {
  JSON_SCHEMA_D07 = 'JSON_SCHEMA_D07'
}

export enum TRANSACTION_STATUS {
  DECLINED = 'DECLINED',
  ERROR = 'ERROR',
  EXPIRED = 'EXPIRED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  STARTED = 'STARTED',
  SUCCEEDED = 'SUCCEEDED',
  UNKNOWN = 'UNKNOWN'
}

export type TotpEnrollmentConfirmPayloadSchema = {
  code: Scalars['String']['input'];
};

export type TotpReplacementConfirmPayloadSchema = {
  code: Scalars['String']['input'];
};

export type TransactionProviderIntegrationLog = {
  __typename?: 'TransactionProviderIntegrationLog';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  merchantCustomerPaymentMethodCode?: Maybe<Scalars['String']['output']>;
  merchantId?: Maybe<Scalars['String']['output']>;
  merchantPaymentPlanCode?: Maybe<Scalars['String']['output']>;
  merchantPaymentPlanTransactionCode?: Maybe<Scalars['String']['output']>;
  merchantTransactionCode?: Maybe<Scalars['String']['output']>;
  merchantTransactionProviderId?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  payload?: Maybe<Scalars['JSON']['output']>;
  provider: TRANSACTION_PROVIDER;
  request: Scalars['JSON']['output'];
  response: Scalars['JSON']['output'];
  succeeded: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  url: Scalars['String']['output'];
};

export type TransactionProviderIntegrationLogPaginationConnection = {
  __typename?: 'TransactionProviderIntegrationLogPaginationConnection';
  edges: Array<TransactionProviderIntegrationLogPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TransactionProviderIntegrationLogPaginationEdge = {
  __typename?: 'TransactionProviderIntegrationLogPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: TransactionProviderIntegrationLog;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerificationId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAdmin: Scalars['Boolean']['output'];
  merchants: Array<MerchantUser>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  phoneVerificationId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type UserDataSchema = {
  userAddressCity?: InputMaybe<Scalars['String']['input']>;
  /** Country using the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format (e.g. US, UK, etc.). */
  userAddressCountry: COUNTRY_ISO_2;
  userAddressLine1?: InputMaybe<Scalars['String']['input']>;
  userAddressLine2?: InputMaybe<Scalars['String']['input']>;
  userAddressPostalCode?: InputMaybe<Scalars['String']['input']>;
  /** State using the [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format for main country subdivisions, provinces, states (e.g. [for US] → NY, IN, CA, etc.). The [iso-3166-2](https://www.npmjs.com/package/iso-3166-2) package is suggested. */
  userAddressState?: InputMaybe<Scalars['String']['input']>;
  userBirthDate?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userEmail: Scalars['String']['input'];
  userFirstName: Scalars['String']['input'];
  userLastName: Scalars['String']['input'];
  userLegalIdentifier?: InputMaybe<Scalars['String']['input']>;
  userLegalIdentifierType?: InputMaybe<Scalars['String']['input']>;
  userLocale?: InputMaybe<Scalars['String']['input']>;
  userPhone?: InputMaybe<Scalars['String']['input']>;
};

export type UserEmailVerifyOrChangeFinishSchema = {
  email: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserEmailVerifyOrChangeStartSchema = {
  email: Scalars['String']['input'];
};

export type UserMerchantTransactionProviderCreateSchema = {
  credentials: Scalars['JSON']['input'];
  provider: TRANSACTION_PROVIDER;
};

export type UserPaginationConnection = {
  __typename?: 'UserPaginationConnection';
  edges: Array<UserPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserPaginationEdge = {
  __typename?: 'UserPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: User;
};

export type UserPasswordChangeFinishSchema = {
  updatedPassword: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserPasswordResetFinishSchema = {
  email: Scalars['String']['input'];
  updatedPassword: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserPasswordResetStartSchema = {
  email: Scalars['String']['input'];
};

export type UserSignUpWithEmailFinishSchema = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserSignUpWithEmailStartSchema = {
  email: Scalars['String']['input'];
};

export type UserSignUpWithEmailVerifySchema = {
  email: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserUpdateDataSchema = {
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type MerchantClientTransactionSessionBaseFragmentFragment = { __typename?: 'MerchantClientTransactionSession', id: string, action: TRANSACTION_ACTION, status: CLIENT_TRANSACTION_SESSION_STATUS, providerCode: string, providerStatus: CLIENT_TRANSACTION_SESSION_STATUS, providerError?: string | null, providerLastSyncedAt?: Date | null, providerLastVerifiedAt: Date, token?: string | null, tokenExpiresAt?: Date | null, payload: any, amount: bigint, currency: CURRENCY, merchantInternalCustomerCode?: string | null, merchantInternalTransactionCode?: string | null, startedAt?: Date | null, completedAt?: Date | null, canceledAt?: Date | null, storePaymentMethod?: boolean | null, transactionProviderId: string, paymentMethodId?: string | null, paymentPlanId?: string | null, createdAt: Date, updatedAt: Date, deviceId?: string | null, deviceIp?: string | null, deviceBrowser?: string | null, deviceOS?: string | null, deviceName?: string | null, deviceType?: DEVICE_TYPE | null, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressCity?: string | null, billingAddressState?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressPostalCode?: string | null, shippingFirstName?: string | null, shippingLastName?: string | null, shippingEmail?: string | null, shippingPhone?: string | null, shippingAddressLine1?: string | null, shippingAddressLine2?: string | null, shippingAddressCity?: string | null, shippingAddressState?: string | null, shippingAddressCountry?: COUNTRY_ISO_2 | null, shippingAddressPostalCode?: string | null, userFirstName?: string | null, userLastName?: string | null, userEmail?: string | null, userPhone?: string | null, userBirthDate?: Date | null, userLocale?: string | null, userLegalIdentifier?: string | null, userLegalIdentifierType?: string | null, userAddressLine1?: string | null, userAddressLine2?: string | null, userAddressCity?: string | null, userAddressState?: string | null, userAddressCountry?: COUNTRY_ISO_2 | null, userAddressPostalCode?: string | null };

export type MerchantTransactionProviderFragmentFragment = { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, applicationId?: string | null, merchantId: string, createdAt: Date, updatedAt: Date };

export type MerchantClientTransactionSessionFragmentFragment = { __typename?: 'MerchantClientTransactionSession', id: string, action: TRANSACTION_ACTION, status: CLIENT_TRANSACTION_SESSION_STATUS, providerCode: string, providerStatus: CLIENT_TRANSACTION_SESSION_STATUS, providerError?: string | null, providerLastSyncedAt?: Date | null, providerLastVerifiedAt: Date, token?: string | null, tokenExpiresAt?: Date | null, payload: any, amount: bigint, currency: CURRENCY, merchantInternalCustomerCode?: string | null, merchantInternalTransactionCode?: string | null, startedAt?: Date | null, completedAt?: Date | null, canceledAt?: Date | null, storePaymentMethod?: boolean | null, transactionProviderId: string, paymentMethodId?: string | null, paymentPlanId?: string | null, createdAt: Date, updatedAt: Date, deviceId?: string | null, deviceIp?: string | null, deviceBrowser?: string | null, deviceOS?: string | null, deviceName?: string | null, deviceType?: DEVICE_TYPE | null, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressCity?: string | null, billingAddressState?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressPostalCode?: string | null, shippingFirstName?: string | null, shippingLastName?: string | null, shippingEmail?: string | null, shippingPhone?: string | null, shippingAddressLine1?: string | null, shippingAddressLine2?: string | null, shippingAddressCity?: string | null, shippingAddressState?: string | null, shippingAddressCountry?: COUNTRY_ISO_2 | null, shippingAddressPostalCode?: string | null, userFirstName?: string | null, userLastName?: string | null, userEmail?: string | null, userPhone?: string | null, userBirthDate?: Date | null, userLocale?: string | null, userLegalIdentifier?: string | null, userLegalIdentifierType?: string | null, userAddressLine1?: string | null, userAddressLine2?: string | null, userAddressCity?: string | null, userAddressState?: string | null, userAddressCountry?: COUNTRY_ISO_2 | null, userAddressPostalCode?: string | null, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, applicationId?: string | null, merchantId: string, createdAt: Date, updatedAt: Date } };

export type ClientPublicTransactionSessionBaseConfigQueryVariables = Exact<{
  merchantPublicId: Scalars['String']['input'];
  transactionSessionId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
}>;


export type ClientPublicTransactionSessionBaseConfigQuery = { __typename?: 'Query', clientPublicTransactionSessionBaseConfig: { __typename?: 'MerchantClientTransactionSessionBaseConfig', provider: TRANSACTION_PROVIDER, data:
      | { __typename?: 'MerchantClientTransactionSessionGenericBaseConfig', provider: TRANSACTION_PROVIDER, publicKey?: string | null }
      | { __typename?: 'MerchantClientTransactionSessionNuveiBaseConfig', provider: TRANSACTION_PROVIDER, merchantId: string, merchantSiteId: string, env: string }
     } };

export type ClientPublicTransactionSessionQueryVariables = Exact<{
  merchantPublicId: Scalars['String']['input'];
  transactionSessionId: Scalars['String']['input'];
}>;


export type ClientPublicTransactionSessionQuery = { __typename?: 'Query', clientPublicTransactionSession: { __typename?: 'MerchantClientPublicTransactionSessionData', provider: TRANSACTION_PROVIDER, baseConfig:
      | { __typename?: 'MerchantClientTransactionSessionGenericBaseConfig', provider: TRANSACTION_PROVIDER, publicKey?: string | null }
      | { __typename?: 'MerchantClientTransactionSessionNuveiBaseConfig', provider: TRANSACTION_PROVIDER, merchantId: string, merchantSiteId: string, env: string }
    , transactionSession: { __typename?: 'MerchantClientTransactionSession', id: string, action: TRANSACTION_ACTION, status: CLIENT_TRANSACTION_SESSION_STATUS, providerCode: string, providerStatus: CLIENT_TRANSACTION_SESSION_STATUS, providerError?: string | null, providerLastSyncedAt?: Date | null, providerLastVerifiedAt: Date, token?: string | null, tokenExpiresAt?: Date | null, payload: any, amount: bigint, currency: CURRENCY, merchantInternalCustomerCode?: string | null, merchantInternalTransactionCode?: string | null, startedAt?: Date | null, completedAt?: Date | null, canceledAt?: Date | null, storePaymentMethod?: boolean | null, transactionProviderId: string, paymentMethodId?: string | null, paymentPlanId?: string | null, createdAt: Date, updatedAt: Date, deviceId?: string | null, deviceIp?: string | null, deviceBrowser?: string | null, deviceOS?: string | null, deviceName?: string | null, deviceType?: DEVICE_TYPE | null, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressCity?: string | null, billingAddressState?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressPostalCode?: string | null, shippingFirstName?: string | null, shippingLastName?: string | null, shippingEmail?: string | null, shippingPhone?: string | null, shippingAddressLine1?: string | null, shippingAddressLine2?: string | null, shippingAddressCity?: string | null, shippingAddressState?: string | null, shippingAddressCountry?: COUNTRY_ISO_2 | null, shippingAddressPostalCode?: string | null, userFirstName?: string | null, userLastName?: string | null, userEmail?: string | null, userPhone?: string | null, userBirthDate?: Date | null, userLocale?: string | null, userLegalIdentifier?: string | null, userLegalIdentifierType?: string | null, userAddressLine1?: string | null, userAddressLine2?: string | null, userAddressCity?: string | null, userAddressState?: string | null, userAddressCountry?: COUNTRY_ISO_2 | null, userAddressPostalCode?: string | null, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, applicationId?: string | null, merchantId: string, createdAt: Date, updatedAt: Date } } } };

export const MerchantClientTransactionSessionBaseFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantClientTransactionSessionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantClientTransactionSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastSyncedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deviceId"}},{"kind":"Field","name":{"kind":"Name","value":"deviceIp"}},{"kind":"Field","name":{"kind":"Name","value":"deviceBrowser"}},{"kind":"Field","name":{"kind":"Name","value":"deviceOS"}},{"kind":"Field","name":{"kind":"Name","value":"deviceName"}},{"kind":"Field","name":{"kind":"Name","value":"deviceType"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"shippingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"shippingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"shippingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"shippingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"userFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"userLastName"}},{"kind":"Field","name":{"kind":"Name","value":"userEmail"}},{"kind":"Field","name":{"kind":"Name","value":"userPhone"}},{"kind":"Field","name":{"kind":"Name","value":"userBirthDate"}},{"kind":"Field","name":{"kind":"Name","value":"userLocale"}},{"kind":"Field","name":{"kind":"Name","value":"userLegalIdentifier"}},{"kind":"Field","name":{"kind":"Name","value":"userLegalIdentifierType"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressPostalCode"}}]}}]} as unknown as DocumentNode<MerchantClientTransactionSessionBaseFragmentFragment, unknown>;
export const MerchantTransactionProviderFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"applicationId"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<MerchantTransactionProviderFragmentFragment, unknown>;
export const MerchantClientTransactionSessionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantClientTransactionSessionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantClientTransactionSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantClientTransactionSessionBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantClientTransactionSessionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantClientTransactionSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastSyncedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deviceId"}},{"kind":"Field","name":{"kind":"Name","value":"deviceIp"}},{"kind":"Field","name":{"kind":"Name","value":"deviceBrowser"}},{"kind":"Field","name":{"kind":"Name","value":"deviceOS"}},{"kind":"Field","name":{"kind":"Name","value":"deviceName"}},{"kind":"Field","name":{"kind":"Name","value":"deviceType"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"shippingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"shippingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"shippingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"shippingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"userFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"userLastName"}},{"kind":"Field","name":{"kind":"Name","value":"userEmail"}},{"kind":"Field","name":{"kind":"Name","value":"userPhone"}},{"kind":"Field","name":{"kind":"Name","value":"userBirthDate"}},{"kind":"Field","name":{"kind":"Name","value":"userLocale"}},{"kind":"Field","name":{"kind":"Name","value":"userLegalIdentifier"}},{"kind":"Field","name":{"kind":"Name","value":"userLegalIdentifierType"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressPostalCode"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"applicationId"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<MerchantClientTransactionSessionFragmentFragment, unknown>;
export const ClientPublicTransactionSessionBaseConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ClientPublicTransactionSessionBaseConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantPublicId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionSessionId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_PROVIDER"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientPublicTransactionSessionBaseConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantPublicId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantPublicId"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionSessionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionSessionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProvider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantClientTransactionSessionNuveiBaseConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchantSiteId"}},{"kind":"Field","name":{"kind":"Name","value":"env"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantClientTransactionSessionGenericBaseConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ClientPublicTransactionSessionBaseConfigQuery, ClientPublicTransactionSessionBaseConfigQueryVariables>;
export const ClientPublicTransactionSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ClientPublicTransactionSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantPublicId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionSessionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientPublicTransactionSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantPublicId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantPublicId"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionSessionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionSessionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"baseConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantClientTransactionSessionNuveiBaseConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchantSiteId"}},{"kind":"Field","name":{"kind":"Name","value":"env"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantClientTransactionSessionGenericBaseConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionSession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantClientTransactionSessionFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantClientTransactionSessionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantClientTransactionSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastSyncedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"deviceId"}},{"kind":"Field","name":{"kind":"Name","value":"deviceIp"}},{"kind":"Field","name":{"kind":"Name","value":"deviceBrowser"}},{"kind":"Field","name":{"kind":"Name","value":"deviceOS"}},{"kind":"Field","name":{"kind":"Name","value":"deviceName"}},{"kind":"Field","name":{"kind":"Name","value":"deviceType"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"shippingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"shippingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"shippingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"shippingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"shippingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"userFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"userLastName"}},{"kind":"Field","name":{"kind":"Name","value":"userEmail"}},{"kind":"Field","name":{"kind":"Name","value":"userPhone"}},{"kind":"Field","name":{"kind":"Name","value":"userBirthDate"}},{"kind":"Field","name":{"kind":"Name","value":"userLocale"}},{"kind":"Field","name":{"kind":"Name","value":"userLegalIdentifier"}},{"kind":"Field","name":{"kind":"Name","value":"userLegalIdentifierType"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"userAddressPostalCode"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"applicationId"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantClientTransactionSessionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantClientTransactionSession"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantClientTransactionSessionBaseFragment"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}}]}}]} as unknown as DocumentNode<ClientPublicTransactionSessionQuery, ClientPublicTransactionSessionQueryVariables>;