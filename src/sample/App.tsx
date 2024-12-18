import { AccruPay, form } from '../AccruPay';
import './styles.scss';

const App = () => {
  const provider = 'nuvei';
  const AccruPaymentForm = form(provider)!;

  return (
    <AccruPay 
      preferredProvider={provider}
      preReleaseGetProviders={async () => [{ name: 'nuvei', config: JSON.parse(import.meta.env.VITE_NUVEI_CONFIG || '{}') }]}
    >
      <div>
        <h2>Payment Form</h2>
        <p>Name</p>
        <div className='myinput'>
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
