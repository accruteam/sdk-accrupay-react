import { useEffect, useState } from 'react';
import { AccruPay, PaymentField } from '../providers/Nuvei';
import './styles.scss';
import { getProvider } from '../api/api';



const App = () => {
  const [provider, setProvider] = useState('nuvei');
  const [config, setConfig] = useState('nuvei');
  useEffect(async () => {
    // Do API things here
    const newProvider = await getProvider();
    const newConfig = await getConfig();
    setProvider(newProvider)
    setConfig(newConfig)
  }, [])
  return (
  <div>
    <AccruPay>
      <div>
        <h2>Payment Form</h2>
        <p>Name</p>
        <div className='myinput'>
          <PaymentField.CardHolderName placeholder="Name on Card"/>
        </div>
        <p>Credit Card Number</p>
        <div style={{ border: '1px solid gray'}}>
          <PaymentField.CreditCardNumber />
        </div>
        <p>Expiration Date</p>
        <div style={{ border: '1px solid gray'}}>
          <PaymentField.CreditCardExpiration />
        </div>
        <p>Verification Code</p>
        <div style={{ border: '1px solid gray'}}>
          <PaymentField.CreditCardCvc />
        </div>
        <div className='mySubmitButton'>
          <PaymentField.SubmitBtn>
        </div>
      </div>
    </AccruPay>
  </div>
  )
}

export default App;
