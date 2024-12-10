import Nuvei from './providers/Nuvei/NuveiElements';
import Stripe from 

function elements({
  provider
}) {
  if (provider === 'nuvei'){
    return {
      CardHolderName: Nuvei.CardHolderName,
      CreditCardNumber: Nuvei.CreditCardNumber,
      CreditCardExpiration: Nuvei.CreditCardExpiration,
      CreditCardCvc: Nuvei.CreditCardCvc,
      SubmitBtn: Nuvei.SubmitBtn,
    }
  }

  if (provider === 'stripe'){
    return {
      CardHolderName: stripe.CardHolderName,
      CreditCardNumber: stripe.CreditCardNumber,
      CreditCardExpiration: Nuvei.CreditCardExpiration,
      CreditCardCvc: Nuvei.CreditCardCvc,
      SubmitBtn: Nuvei.SubmitBtn,
    }
  }
}