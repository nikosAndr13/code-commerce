const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.*[^a-z])(?=.{8,20})/;
const nameRegex = /^([^0-9]*)$/;
const postalRegex = /^\d+$/;

export const emailValidation = (email) => 
  (!emailRegex.test(email))
  ? 'Insert a valid email address'
  : ''


export const passwordValidation = (password) => 
  (!passwordRegex.test(password) || (password.length === 0)) 
  ? 'Insert a valid password'
  : ''


export const firstNameValidation = (firstName) => 
  (!nameRegex.test(firstName))
  ? 'Your name is not valid'
  : ''

export const surNameValidation = (surName) => 
  (!nameRegex.test(surName))
  ? 'Your name is not valid'
  : ''

export const postalCodeValidation = (postalCode) => 
  (!postalRegex.test(postalCode))
  ? 'Enter a valid Zip/Postal Code'
  : ''
