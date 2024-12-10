import { AccruPay, PaymentField } from '..'

const { merchantId, merchantSiteId } = JSON.parse(import.meta.env.VITE_NUVEI_CONFIG);

const config = {
  env: 'int',
  merchantId,
  merchantSiteId,
}

function App() {
  return (
    <AccruPay 
      provider={'nuvei'} 
      config={config}
    >
      <h2>Payment Form</h2>
      <p>Name</p>
      <PaymentField.CardHolderName 
        placeholder="Name on Card"
      />
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
      <br />
      <PaymentField.SubmitBtn>
        {(submitFn) => (<button onClick={() => submitFn().then(() => alert('payment success'))}>Submit</button>)}
      </PaymentField.SubmitBtn>
    </AccruPay>
  )
}

export default App
