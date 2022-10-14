const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,20})');
const nameRegex = /^([^0-9]*)$/;
const postalRegex = /^\d+$/;

export const emailValidation = (email) => {
  (!emailRegex.test(email))
  ? console.log('Insert a valid email address')
  : console.log('you are good')
}

export const passwordValidation = (password) => {
  (!passwordRegex.test(password)) 
  ? console.log('Insert a valid password address')
  : console.log('you are good')
}

export const firstNameValidation = (firstName) => {
  (!nameRegex.test(firstName))
  ? console.log('Set a valid name bro')
  : console.log('Cool name'); 
} 

export const surNameValidation = (surName) => {
  (!nameRegex.test(surName))
  ? console.log('Set a valid name bro')
  : console.log('Cool name'); 
} 

export const postalCodeValidation = (postalCode) => {
  (!postalRegex.test(postalCode))
  ? console.log('You fix that')
  : console.log('You good')
}