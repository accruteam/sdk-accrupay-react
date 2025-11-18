import { useState } from "react";
import AccruPay, {
  CURRENCY,
  COUNTRY_ISO_2,
  TRANSACTION_PROVIDER,
  DEVICE_TYPE,
} from "@accrupay/node";
import { fakerEN_US as faker } from "@faker-js/faker";
import type {
  MerchantClientTransactionSession,
  AccruPayParams,
} from "@accrupay/react";

type AccruPayEnvironment = NonNullable<AccruPayParams["environment"]>;

interface SessionConfigurationProps {
  environment: AccruPayEnvironment;
  merchantPublicId: string;
  secret: string;
  onSessionCreated: (session: MerchantClientTransactionSession) => void;
  onReset?: () => void;
  onUseSession?: (sessionId: string) => void;
  isSDKLoaded?: boolean;
}

interface FormData {
  amount: string;
  currency: string;
  merchantInternalCustomerCode: string;
  merchantInternalTransactionCode: string;
  transactionProvider: TRANSACTION_PROVIDER;
  storePaymentMethod: boolean;
  billing: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: COUNTRY_ISO_2;
    postalCode: string;
  };
  shipping: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: COUNTRY_ISO_2;
    postalCode: string;
  };
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthDate: string;
    locale: string;
    legalIdentifier: string;
    legalIdentifierType: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: COUNTRY_ISO_2;
    postalCode: string;
  };
  device: {
    id: string;
    ip: string;
    browser: string;
    os: string;
    name: string;
    type: DEVICE_TYPE | null;
  };
}

const initialFormData: FormData = {
  amount: "",
  currency: "USD",
  merchantInternalCustomerCode: "",
  merchantInternalTransactionCode: "",
  transactionProvider: TRANSACTION_PROVIDER.NUVEI,
  storePaymentMethod: false,
  billing: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: COUNTRY_ISO_2.US,
    postalCode: "",
  },
  shipping: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: COUNTRY_ISO_2.US,
    postalCode: "",
  },
  user: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    locale: "",
    legalIdentifier: "",
    legalIdentifierType: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: COUNTRY_ISO_2.US,
    postalCode: "",
  },
  device: {
    id: "",
    ip: "",
    browser: "",
    os: "",
    name: "",
    type: null,
  },
};

export function SessionConfiguration({
  environment,
  secret,
  onSessionCreated,
  onReset,
  onUseSession,
  isSDKLoaded = false,
}: SessionConfigurationProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [createdSession, setCreatedSession] =
    useState<MerchantClientTransactionSession | null>(null);

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateNestedField = <
    K extends keyof FormData,
    N extends keyof FormData[K],
  >(
    section: K,
    field: N,
    value: FormData[K][N],
  ) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...(prev[section] as object),
        [field]: value,
      },
    }));
  };

  const handleLoadRandomData = () => {
    const now = new Date();
    const dateStr = now.toISOString().slice(2, 10).replace(/-/g, "");
    const randomId = faker.string.alphanumeric(8).toLowerCase();
    const prefix = `sdk-playground-${dateStr}`;

    const availableCurrencies = [CURRENCY.USD];
    const availableCountries = [COUNTRY_ISO_2.US];
    const availableTransactionProviders = Object.values(TRANSACTION_PROVIDER);
    const availableDeviceTypes = Object.values(DEVICE_TYPE);

    setFormData({
      amount: faker.finance.amount({ min: 1, max: 1000, dec: 2 }),
      currency: faker.helpers.arrayElement(availableCurrencies),
      merchantInternalCustomerCode: `${prefix}-${randomId}`,
      merchantInternalTransactionCode: `${prefix}-${faker.string.alphanumeric(8).toLowerCase()}`,
      transactionProvider: faker.helpers.arrayElement(
        availableTransactionProviders,
      ),
      storePaymentMethod: faker.datatype.boolean(),
      billing: {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phone: "",
        addressLine1: faker.location.streetAddress(),
        addressLine2: faker.location.secondaryAddress(),
        city: faker.location.city(),
        state: faker.location.state({ abbreviated: true }),
        country: faker.helpers.arrayElement(availableCountries),
        postalCode: faker.location.zipCode(),
      },
      shipping: {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phone: "",
        addressLine1: faker.location.streetAddress(),
        addressLine2: faker.location.secondaryAddress(),
        city: faker.location.city(),
        state: faker.location.state({ abbreviated: true }),
        country: faker.helpers.arrayElement(availableCountries),
        postalCode: faker.location.zipCode(),
      },
      user: {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phone: "",
        birthDate: faker.date.birthdate().toISOString().split("T")[0],
        locale: "en-US",
        legalIdentifier: faker.string.numeric(11),
        legalIdentifierType: "SSN",
        addressLine1: faker.location.streetAddress(),
        addressLine2: faker.location.secondaryAddress(),
        city: faker.location.city(),
        state: faker.location.state({ abbreviated: true }),
        country: faker.helpers.arrayElement(availableCountries),
        postalCode: faker.location.zipCode(),
      },
      device: {
        id: faker.string.uuid(),
        ip: faker.internet.ip(),
        browser: faker.helpers.arrayElement([
          "Chrome",
          "Firefox",
          "Safari",
          "Edge",
        ]),
        os: faker.helpers.arrayElement([
          "Windows",
          "macOS",
          "Linux",
          "iOS",
          "Android",
        ]),
        name: faker.helpers.arrayElement(["Mobile", "Tablet", "Desktop"]),
        type: faker.helpers.arrayElement(availableDeviceTypes),
      },
    });
  };

  const handleCreateSession = async () => {
    if (
      !formData.amount ||
      !formData.currency ||
      !formData.merchantInternalCustomerCode ||
      !formData.transactionProvider
    ) {
      const error = new Error(
        "Amount, currency, customer code, and transaction provider are required",
      );
      console.error("[SessionCreationForm] Validation error:", error);
      setError(error);
      return;
    }

    if (
      !formData.billing.firstName ||
      !formData.billing.lastName ||
      !formData.billing.email
    ) {
      const error = new Error(
        "Billing first name, last name, and email are required",
      );
      console.error("[SessionCreationForm] Validation error:", error);
      setError(error);
      return;
    }

    setIsCreating(true);
    setError(null);

    try {
      const sdkEnvironment: "qa" | "production" =
        environment === "production" ? "production" : "qa";

      const sdk = new AccruPay({
        apiSecret: secret,
        environment: sdkEnvironment,
      });

      const amountInCents = BigInt(
        Math.round(parseFloat(formData.amount) * 100),
      );

      const currencyEnum =
        (formData.currency.toUpperCase() as keyof typeof CURRENCY) in CURRENCY
          ? (CURRENCY[
              formData.currency.toUpperCase() as keyof typeof CURRENCY
            ] as CURRENCY)
          : CURRENCY.USD;

      const sessionData: {
        amount: bigint;
        currency: CURRENCY;
        merchantInternalCustomerCode: string;
        merchantInternalTransactionCode: string;
        storePaymentMethod: boolean;
        billing: {
          billingFirstName: string;
          billingLastName: string;
          billingEmail: string;
          billingAddressCountry: COUNTRY_ISO_2;
          billingAddressLine1?: string;
          billingAddressLine2?: string;
          billingAddressCity?: string;
          billingAddressState?: string;
          billingAddressPostalCode?: string;
          billingPhone?: string;
        };
        shipping?: {
          shippingFirstName: string;
          shippingLastName: string;
          shippingEmail: string;
          shippingAddressCountry: COUNTRY_ISO_2;
          shippingAddressLine1?: string;
          shippingAddressLine2?: string;
          shippingAddressCity?: string;
          shippingAddressState?: string;
          shippingAddressPostalCode?: string;
          shippingPhone?: string;
        };
        user?: {
          userFirstName: string;
          userLastName: string;
          userEmail: string;
          userAddressCountry: COUNTRY_ISO_2;
          userAddressLine1?: string;
          userAddressLine2?: string;
          userAddressCity?: string;
          userAddressState?: string;
          userAddressPostalCode?: string;
          userPhone?: string;
          userBirthDate?: Date;
          userLocale?: string;
          userLegalIdentifier?: string;
          userLegalIdentifierType?: string;
        };
        device?: {
          deviceId?: string;
          deviceIp?: string;
          deviceBrowser?: string;
          deviceOS?: string;
          deviceName?: string;
          deviceType?: DEVICE_TYPE;
        };
      } = {
        amount: amountInCents,
        currency: currencyEnum,
        merchantInternalCustomerCode: formData.merchantInternalCustomerCode,
        merchantInternalTransactionCode:
          formData.merchantInternalTransactionCode || "",
        storePaymentMethod: formData.storePaymentMethod,
        billing: {
          billingFirstName: formData.billing.firstName,
          billingLastName: formData.billing.lastName,
          billingEmail: formData.billing.email,
          billingAddressCountry: formData.billing.country,
          ...(formData.billing.addressLine1 && {
            billingAddressLine1: formData.billing.addressLine1,
          }),
          ...(formData.billing.addressLine2 && {
            billingAddressLine2: formData.billing.addressLine2,
          }),
          ...(formData.billing.city && {
            billingAddressCity: formData.billing.city,
          }),
          ...(formData.billing.state && {
            billingAddressState: formData.billing.state,
          }),
          ...(formData.billing.postalCode && {
            billingAddressPostalCode: formData.billing.postalCode,
          }),
          ...(formData.billing.phone && {
            billingPhone: formData.billing.phone,
          }),
        },
      };

      if (
        formData.shipping.firstName ||
        formData.shipping.lastName ||
        formData.shipping.email ||
        formData.shipping.addressLine1
      ) {
        sessionData.shipping = {
          shippingFirstName:
            formData.shipping.firstName || formData.billing.firstName,
          shippingLastName:
            formData.shipping.lastName || formData.billing.lastName,
          shippingEmail: formData.shipping.email || formData.billing.email,
          shippingAddressCountry: formData.shipping.country,
          ...(formData.shipping.addressLine1 && {
            shippingAddressLine1: formData.shipping.addressLine1,
          }),
          ...(formData.shipping.addressLine2 && {
            shippingAddressLine2: formData.shipping.addressLine2,
          }),
          ...(formData.shipping.city && {
            shippingAddressCity: formData.shipping.city,
          }),
          ...(formData.shipping.state && {
            shippingAddressState: formData.shipping.state,
          }),
          ...(formData.shipping.postalCode && {
            shippingAddressPostalCode: formData.shipping.postalCode,
          }),
          ...(formData.shipping.phone && {
            shippingPhone: formData.shipping.phone,
          }),
        };
      }

      if (
        formData.user.firstName ||
        formData.user.lastName ||
        formData.user.email ||
        formData.user.addressLine1
      ) {
        const userData: {
          userFirstName: string;
          userLastName: string;
          userEmail: string;
          userAddressCountry: COUNTRY_ISO_2;
          userAddressLine1?: string;
          userAddressLine2?: string;
          userAddressCity?: string;
          userAddressState?: string;
          userAddressPostalCode?: string;
          userPhone?: string;
          userBirthDate?: Date;
          userLocale?: string;
          userLegalIdentifier?: string;
          userLegalIdentifierType?: string;
        } = {
          userFirstName: formData.user.firstName || formData.billing.firstName,
          userLastName: formData.user.lastName || formData.billing.lastName,
          userEmail: formData.user.email || formData.billing.email,
          userAddressCountry: formData.user.country,
          ...(formData.user.addressLine1 && {
            userAddressLine1: formData.user.addressLine1,
          }),
          ...(formData.user.addressLine2 && {
            userAddressLine2: formData.user.addressLine2,
          }),
          ...(formData.user.city && { userAddressCity: formData.user.city }),
          ...(formData.user.state && {
            userAddressState: formData.user.state,
          }),
          ...(formData.user.postalCode && {
            userAddressPostalCode: formData.user.postalCode,
          }),
          ...(formData.user.phone && { userPhone: formData.user.phone }),
          ...(formData.user.locale && { userLocale: formData.user.locale }),
          ...(formData.user.legalIdentifier && {
            userLegalIdentifier: formData.user.legalIdentifier,
          }),
          ...(formData.user.legalIdentifierType && {
            userLegalIdentifierType: formData.user.legalIdentifierType,
          }),
        };
        if (formData.user.birthDate) {
          userData.userBirthDate = new Date(formData.user.birthDate);
        }
        sessionData.user = userData;
      }

      if (
        formData.device.id ||
        formData.device.ip ||
        formData.device.browser ||
        formData.device.os ||
        formData.device.name ||
        formData.device.type
      ) {
        sessionData.device = {
          ...(formData.device.id && { deviceId: formData.device.id }),
          ...(formData.device.ip && { deviceIp: formData.device.ip }),
          ...(formData.device.browser && {
            deviceBrowser: formData.device.browser,
          }),
          ...(formData.device.os && { deviceOS: formData.device.os }),
          ...(formData.device.name && { deviceName: formData.device.name }),
          ...(formData.device.type && { deviceType: formData.device.type }),
        };
      }

      const session = await sdk.transactions.clientSessions.payments.start({
        transactionProvider: formData.transactionProvider,
        data: sessionData,
      });

      setCreatedSession(session);
      onSessionCreated(session);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      console.error(
        "[SessionCreationForm] Session creation error:",
        error,
        err,
      );
      setError(error);
    } finally {
      setIsCreating(false);
    }
  };

  const availableCountries = Object.values(COUNTRY_ISO_2);
  const availableCurrencies = Object.values(CURRENCY).filter(
    c => typeof c === "string",
  ) as string[];
  const deviceTypes = Object.values(DEVICE_TYPE);

  return (
    <div>
      <div className="control-actions" style={{ marginBottom: "1rem" }}>
        <button
          type="button"
          onClick={handleLoadRandomData}
          disabled={isCreating}
          className="btn btn-secondary"
          data-testid="btn-load-random-data"
        >
          Load Random Data
        </button>
      </div>

      <div className="control-group">
        <label htmlFor="session-amount">Amount *</label>
        <input
          id="session-amount"
          type="number"
          step="0.01"
          min="0"
          value={formData.amount}
          onChange={e => updateField("amount", e.target.value)}
          placeholder="0.00"
          className="control-input"
          disabled={isCreating}
        />
      </div>

      <div className="control-group">
        <label htmlFor="session-currency">Currency *</label>
        <select
          id="session-currency"
          value={formData.currency}
          onChange={e => updateField("currency", e.target.value)}
          className="control-input"
          disabled={isCreating}
        >
          {availableCurrencies.map(curr => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <label htmlFor="session-customer-code">Customer Code *</label>
        <input
          id="session-customer-code"
          type="text"
          value={formData.merchantInternalCustomerCode}
          onChange={e =>
            updateField("merchantInternalCustomerCode", e.target.value)
          }
          placeholder="customer-123"
          className="control-input"
          disabled={isCreating}
        />
      </div>

      <div className="control-group">
        <label htmlFor="session-transaction-code">Transaction Code</label>
        <input
          id="session-transaction-code"
          type="text"
          value={formData.merchantInternalTransactionCode}
          onChange={e =>
            updateField("merchantInternalTransactionCode", e.target.value)
          }
          placeholder="txn-123"
          className="control-input"
          disabled={isCreating}
        />
      </div>

      <div className="control-group">
        <label>
          <input
            type="checkbox"
            checked={formData.storePaymentMethod}
            onChange={e => updateField("storePaymentMethod", e.target.checked)}
            disabled={isCreating}
          />
          Store Payment Method
        </label>
      </div>

      <div className="control-group">
        <label htmlFor="session-provider">Transaction Provider *</label>
        <div className="provider-buttons">
          {Object.values(TRANSACTION_PROVIDER).map(provider => (
            <button
              key={provider}
              type="button"
              onClick={() => updateField("transactionProvider", provider)}
              disabled={isCreating}
              className={`btn-provider ${
                formData.transactionProvider === provider ? "active" : ""
              }`}
            >
              {provider}
            </button>
          ))}
        </div>
        <small className="control-hint">
          Select the payment provider for this transaction session (required)
        </small>
      </div>

      <div className="control-group">
        <h4>Billing Information *</h4>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="billing-first-name">First Name *</label>
            <input
              id="billing-first-name"
              type="text"
              value={formData.billing.firstName}
              onChange={e =>
                updateNestedField("billing", "firstName", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="billing-last-name">Last Name *</label>
            <input
              id="billing-last-name"
              type="text"
              value={formData.billing.lastName}
              onChange={e =>
                updateNestedField("billing", "lastName", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="billing-email">Email *</label>
            <input
              id="billing-email"
              type="email"
              value={formData.billing.email}
              onChange={e =>
                updateNestedField("billing", "email", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="billing-phone">Phone</label>
            <input
              id="billing-phone"
              type="tel"
              value={formData.billing.phone}
              onChange={e =>
                updateNestedField("billing", "phone", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="billing-address-line1">Address Line 1</label>
            <input
              id="billing-address-line1"
              type="text"
              value={formData.billing.addressLine1}
              onChange={e =>
                updateNestedField("billing", "addressLine1", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="billing-address-line2">Address Line 2</label>
            <input
              id="billing-address-line2"
              type="text"
              value={formData.billing.addressLine2}
              onChange={e =>
                updateNestedField("billing", "addressLine2", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="billing-city">City</label>
            <input
              id="billing-city"
              type="text"
              value={formData.billing.city}
              onChange={e =>
                updateNestedField("billing", "city", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="billing-state">State</label>
            <input
              id="billing-state"
              type="text"
              value={formData.billing.state}
              onChange={e =>
                updateNestedField("billing", "state", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="billing-country">Country *</label>
            <select
              id="billing-country"
              value={formData.billing.country}
              onChange={e =>
                updateNestedField(
                  "billing",
                  "country",
                  e.target.value as COUNTRY_ISO_2,
                )
              }
              className="control-input"
              disabled={isCreating}
            >
              {availableCountries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="form-col">
            <label htmlFor="billing-postal-code">Postal Code</label>
            <input
              id="billing-postal-code"
              type="text"
              value={formData.billing.postalCode}
              onChange={e =>
                updateNestedField("billing", "postalCode", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
      </div>

      <div className="control-group">
        <h4>Shipping Information (Optional)</h4>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="shipping-first-name">First Name</label>
            <input
              id="shipping-first-name"
              type="text"
              value={formData.shipping.firstName}
              onChange={e =>
                updateNestedField("shipping", "firstName", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="shipping-last-name">Last Name</label>
            <input
              id="shipping-last-name"
              type="text"
              value={formData.shipping.lastName}
              onChange={e =>
                updateNestedField("shipping", "lastName", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="shipping-email">Email</label>
            <input
              id="shipping-email"
              type="email"
              value={formData.shipping.email}
              onChange={e =>
                updateNestedField("shipping", "email", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="shipping-phone">Phone</label>
            <input
              id="shipping-phone"
              type="tel"
              value={formData.shipping.phone}
              onChange={e =>
                updateNestedField("shipping", "phone", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="shipping-address-line1">Address Line 1</label>
            <input
              id="shipping-address-line1"
              type="text"
              value={formData.shipping.addressLine1}
              onChange={e =>
                updateNestedField("shipping", "addressLine1", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="shipping-address-line2">Address Line 2</label>
            <input
              id="shipping-address-line2"
              type="text"
              value={formData.shipping.addressLine2}
              onChange={e =>
                updateNestedField("shipping", "addressLine2", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="shipping-city">City</label>
            <input
              id="shipping-city"
              type="text"
              value={formData.shipping.city}
              onChange={e =>
                updateNestedField("shipping", "city", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="shipping-state">State</label>
            <input
              id="shipping-state"
              type="text"
              value={formData.shipping.state}
              onChange={e =>
                updateNestedField("shipping", "state", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="shipping-country">Country</label>
            <select
              id="shipping-country"
              value={formData.shipping.country}
              onChange={e =>
                updateNestedField(
                  "shipping",
                  "country",
                  e.target.value as COUNTRY_ISO_2,
                )
              }
              className="control-input"
              disabled={isCreating}
            >
              {availableCountries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="form-col">
            <label htmlFor="shipping-postal-code">Postal Code</label>
            <input
              id="shipping-postal-code"
              type="text"
              value={formData.shipping.postalCode}
              onChange={e =>
                updateNestedField("shipping", "postalCode", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
      </div>

      <div className="control-group">
        <h4>User Information (Optional)</h4>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="user-first-name">First Name</label>
            <input
              id="user-first-name"
              type="text"
              value={formData.user.firstName}
              onChange={e =>
                updateNestedField("user", "firstName", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="user-last-name">Last Name</label>
            <input
              id="user-last-name"
              type="text"
              value={formData.user.lastName}
              onChange={e =>
                updateNestedField("user", "lastName", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="user-email">Email</label>
            <input
              id="user-email"
              type="email"
              value={formData.user.email}
              onChange={e => updateNestedField("user", "email", e.target.value)}
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="user-phone">Phone</label>
            <input
              id="user-phone"
              type="tel"
              value={formData.user.phone}
              onChange={e => updateNestedField("user", "phone", e.target.value)}
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="user-birth-date">Birth Date</label>
            <input
              id="user-birth-date"
              type="date"
              value={formData.user.birthDate}
              onChange={e =>
                updateNestedField("user", "birthDate", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="user-locale">Locale</label>
            <input
              id="user-locale"
              type="text"
              value={formData.user.locale}
              onChange={e =>
                updateNestedField("user", "locale", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="user-legal-identifier">Legal Identifier</label>
            <input
              id="user-legal-identifier"
              type="text"
              value={formData.user.legalIdentifier}
              onChange={e =>
                updateNestedField("user", "legalIdentifier", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="user-legal-identifier-type">
              Legal Identifier Type
            </label>
            <input
              id="user-legal-identifier-type"
              type="text"
              value={formData.user.legalIdentifierType}
              onChange={e =>
                updateNestedField("user", "legalIdentifierType", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="user-address-line1">Address Line 1</label>
            <input
              id="user-address-line1"
              type="text"
              value={formData.user.addressLine1}
              onChange={e =>
                updateNestedField("user", "addressLine1", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="user-address-line2">Address Line 2</label>
            <input
              id="user-address-line2"
              type="text"
              value={formData.user.addressLine2}
              onChange={e =>
                updateNestedField("user", "addressLine2", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="user-city">City</label>
            <input
              id="user-city"
              type="text"
              value={formData.user.city}
              onChange={e => updateNestedField("user", "city", e.target.value)}
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="user-state">State</label>
            <input
              id="user-state"
              type="text"
              value={formData.user.state}
              onChange={e => updateNestedField("user", "state", e.target.value)}
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="user-country">Country</label>
            <select
              id="user-country"
              value={formData.user.country}
              onChange={e =>
                updateNestedField(
                  "user",
                  "country",
                  e.target.value as COUNTRY_ISO_2,
                )
              }
              className="control-input"
              disabled={isCreating}
            >
              {availableCountries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="form-col">
            <label htmlFor="user-postal-code">Postal Code</label>
            <input
              id="user-postal-code"
              type="text"
              value={formData.user.postalCode}
              onChange={e =>
                updateNestedField("user", "postalCode", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
      </div>

      <div className="control-group">
        <h4>Device Information (Optional)</h4>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="device-id">Device ID</label>
            <input
              id="device-id"
              type="text"
              value={formData.device.id}
              onChange={e => updateNestedField("device", "id", e.target.value)}
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="device-ip">Device IP</label>
            <input
              id="device-ip"
              type="text"
              value={formData.device.ip}
              onChange={e => updateNestedField("device", "ip", e.target.value)}
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="device-browser">Browser</label>
            <input
              id="device-browser"
              type="text"
              value={formData.device.browser}
              onChange={e =>
                updateNestedField("device", "browser", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="device-os">OS</label>
            <input
              id="device-os"
              type="text"
              value={formData.device.os}
              onChange={e => updateNestedField("device", "os", e.target.value)}
              className="control-input"
              disabled={isCreating}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="device-name">Device Name</label>
            <input
              id="device-name"
              type="text"
              value={formData.device.name}
              onChange={e =>
                updateNestedField("device", "name", e.target.value)
              }
              className="control-input"
              disabled={isCreating}
            />
          </div>
          <div className="form-col">
            <label htmlFor="device-type">Device Type</label>
            <select
              id="device-type"
              value={formData.device.type || ""}
              onChange={e =>
                updateNestedField(
                  "device",
                  "type",
                  e.target.value ? (e.target.value as DEVICE_TYPE) : null,
                )
              }
              className="control-input"
              disabled={isCreating}
            >
              <option value="">None</option>
              {deviceTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="control-actions">
        <button
          onClick={handleCreateSession}
          disabled={
            isCreating ||
            !formData.amount ||
            !formData.merchantInternalCustomerCode ||
            !formData.billing.firstName ||
            !formData.billing.lastName ||
            !formData.billing.email
          }
          className="btn btn-primary"
          data-testid="btn-create-session"
        >
          {isCreating ? "Creating..." : "Create Session"}
        </button>
      </div>

      {error && (
        <div className="error-display">
          <div className="error-message">
            <strong>Error:</strong> {error.message}
          </div>
        </div>
      )}

      {createdSession && (
        <div className="session-result">
          <h4>Session Created</h4>
          <div className="status-item">
            <span className="status-label">Session ID:</span>
            <span className="status-value">{createdSession.id}</span>
          </div>
          <div className="status-item">
            <span className="status-label">Token:</span>
            <span className="status-value">{createdSession.token}</span>
          </div>
          {!isSDKLoaded && onUseSession && createdSession.id && (
            <div style={{ marginTop: "12px" }}>
              <button
                type="button"
                onClick={() => onUseSession(createdSession.id)}
                className="btn btn-primary"
                style={{ width: "100%" }}
                data-testid="btn-use-session"
              >
                Use Session in Client Config
              </button>
            </div>
          )}
          {onReset && (
            <div style={{ marginTop: "8px" }}>
              <button
                type="button"
                onClick={onReset}
                className="btn btn-secondary"
                style={{ width: "100%" }}
                data-testid="btn-reset-session"
              >
                Reset Session Form
              </button>
            </div>
          )}
          <pre className="json-display">
            {JSON.stringify(createdSession, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
