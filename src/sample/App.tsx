import { AccruPay, form } from '../AccruPay';
import './styles.scss';

const App = () => {
  const provider = 'nuvei';
  const AccruPaymentForm = form(provider)!;

  return (
    <AccruPay preferredProvider={provider}>
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
          <AccruPaymentForm.SubmitBtn />
        </div>
      </div>
    </AccruPay>
  )
}

export default App;
