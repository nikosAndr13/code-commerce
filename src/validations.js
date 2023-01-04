const passwordRegex = /^(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.*[^a-z])(?=.{8,20})/;
const nameRegex = /^([^0-9]*)$/;
export const postalRegex = /^\d+$/;
const MASTERCARD = /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/;
const VISA = /^4[0-9]{2,}$/;
const AMERICAN_EXPRESS = /^3[47][0-9]{5,}$/;
const DISCOVER = /^6(?:011|5[0-9]{2})[0-9]{3,}$/;

export const emailValidation = (email) => 
  (!email.includes('@') || (email.length === 0))
  ? 'Invalid Email. Must have @'
  : '';

export const passwordValidation = (password) => {
  return (!passwordRegex.test(password) || (password.length === 0)) 
  ? 'Insert a valid password'
  : ''
}

export const firstNameValidation = (firstName) => 
  (!nameRegex.test(firstName) || (firstName.length === 0))
  ? 'Your name is not valid'
  : ''

export const surNameValidation = (surName) => 
  (!nameRegex.test(surName) || (surName.length === 0))
  ? 'Your name is not valid'
  : ''

export const postalCodeValidation = (postalCode) => 
  (!postalRegex.test(postalCode) )
  ? 'Invalid. Contains letters'
  : ''

export const inputVerifyError = (text) => (text === '') ? 'Required' : ''

export const cards = {
  MASTERCARD: MASTERCARD,
  VISA: VISA,
  AMERICAN_EXPRESS: AMERICAN_EXPRESS,
  DISCOVER: DISCOVER,
}

export const cardValidations = (cardNumber) => {
  for (const card in cards) {
    if (cardNumber.replace(/[^\d]/g, '').match(cards[card])) {
      if (cardNumber || cardNumber.length < 19) {
        return cardNumber && /^[1-6]{1}[0-9]{14,15}$/i.test(cardNumber.replace(/[^\d]/g, '').trim())
          ? ''
          : 'Enter a Valid Card';
      }
    }
  }
  return 'Enter Valid Card';
}

export const CvvValidation = (cvv) => 
   !postalRegex.test(cvv) || cvv.length < 3 
   ? 'Invalid CVV format. Must be 3 characters or more'
   : ''

export const isDisabled = true;

