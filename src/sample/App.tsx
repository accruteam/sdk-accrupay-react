import { AccruPay, form } from '../AccruPay';
import { ProvidersConfiguration } from '../types';
import './styles.scss';

async function getProviders(): Promise<ProvidersConfiguration> {
  return [
    { name: 'nuvei', config: JSON.parse(import.meta.env.VITE_NUVEI_CONFIG || '{}') },
    { name: 'stripe', config: JSON.parse(import.meta.env.VITE_STRIPE_CONFIG || '{}') },
  ]
}

const App = () => {
  const provider = 'nuvei';
  const AccruPaymentForm = form(provider)!;

  return (
    <AccruPay 
      amount={500}
      preferredProvider={provider}
      preReleaseGetProviders={getProviders}
    >
      <div>
        <h2>Payment Form</h2>
        <p>Name</p>
        <div>
          <AccruPaymentForm.CardHolderName placeholder="Name on Card" />
        </div>
        <p>Credit Card Number</p>
        <div style={{ border: '1px solid gray'}}>
          <AccruPaymentForm.CreditCardNumber />
        </div>
        <p>Expiration Date</p>
        <div style={{ border: '1px solid gray'}}>
          <AccruPaymentForm.CreditCardExpiration />
        </div>
        <p>Verification Code</p>
        <div style={{ border: '1px solid gray'}}>
          <AccruPaymentForm.CreditCardCvc />
        </div>
        <div>
          <AccruPaymentForm.SubmitBtn 
            text={"Submit"} 
            onSuccess={() => alert('Payment success')} 
            onError={(error) => alert(error)}
          />
        </div>
      </div>
    </AccruPay>
  )
}

export default App;
