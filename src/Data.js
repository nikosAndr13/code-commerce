export const inputsInfo = [
  {label: 'Your Email Address*', type:"text", name:"email"},
  {label: 'Password*', type:'password', name:'password'},
  {label: 'First Name*', type:"text", name:"firstName"},
  {label: 'Surname*', type:"text", name:"surname"},
  {label: 'Postcode', type:"text", name:'postalCode'},
]

const confirmPassword = {label: 'Create Password*', type:"password", name:'create', };

export const createNewAccount = Array.from(inputsInfo);
createNewAccount.splice(1,0, confirmPassword);

export const accountData = {
  email: '',
  password: '',
  firstName:'',
  surname:'',
  postalCode:'',
}

export const createAccountData = JSON.parse(JSON.stringify(accountData));
createAccountData.create = '';

