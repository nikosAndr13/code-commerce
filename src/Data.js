import Belt from "./assets/belt.png";
import Jeans from "./assets/Jeans.png";
import Hoodie from "./assets/Hoodie.png";
import Biker from "./assets/biker.png";
import Navy from "./assets/navyT-shirt.png";

export const inputsInfo = [
  { label: "Your Email Address*", type: "text", name: "email" },
  { label: "Password*", type: "password", name: "password" },
  { label: "First Name*", type: "text", name: "firstName" },
  { label: "Surname*", type: "text", name: "surname" },
  { label: "Postcode", type: "text", name: "postalCode" },
];

export const signInInfo = [
  { label: "Your Email Address*", type: "text", name: "email" },
  { label: "Password*", type: "password", name: "password" },
];

const confirmPassword = {
  label: "Confirm Password*",
  type: "password",
  name: "confirm",
};

export const createNewAccount = Array.from(inputsInfo);
createNewAccount.splice(2, 0, confirmPassword);

export const defaultValues = {
  email: "",
  password: "",
  firstName: "",
  surname: "",
  postalCode: "",
};

export const calcSum = (cart) => {
  if (cart.length !== 0) {
  return Number(
  Object.values(cart)
   .map(({ quantity, price }) => { return Number(quantity) * Number(price); })
   .reduce((a, b) => a + b)
  ).toFixed(2)
  } 
  return cart.length
}

export const calcDiscount = (value, cartTotal) => {
    if (value === 'discount20') return (cartTotal - (cartTotal * (20/100))).toFixed(2);
    if  (value === 'codeCommerce50') return (cartTotal - (cartTotal * (50/100))).toFixed(2);
    if  (value === 'Free90') return (cartTotal - (cartTotal * (90/100))).toFixed(2);
    return cartTotal
  }

export const removeItem = (object, property) => {
  delete object[property];
  return object;
}


export const shoppingItemsObj = {
  "Black Belt": {
    price: 19.90.toFixed(2),
    quantity: '',
    totalPrice: '',
    product: 'Black Belt',
    img: `${Belt}`,
    color: 'Space Black', 
    size: 'One size',
    gender: 'Women',
    inCart: false,
  },
  "Biker Jacket": {
    price: 59.90.toFixed(2),
    quantity: '',
    totalPrice: '',
    product: 'Biker Jacket', 
    img: `${Biker}`, 
    color: 'Leather Black',
    size: 'Large', 
    gender: 'Men',
    inCart: false,
  },
  Jeans: {
    price: 39.90.toFixed(2),
    quantity: '',
    totalPrice: '',
    product: 'Jeans',
    img: `${Jeans}`, 
    color: 'Light Blue', 
    size: 'Medium',
    gender: 'Men',
    inCart: false,
  },
  Hoodie: {
    price: 29.90.toFixed(2),
    quantity: '',
    totalPrice: '',
    product: 'Hoodie',
    img: `${Hoodie}`,
    color: 'Black',
    size: 'Large',
    gender: 'Women',
    inCart: false,
  },
  "T-shirt": {
    price: 14.90.toFixed(2),
    quantity: '',
    totalPrice: '',
    product: 'T-shirt',
    img: `${Navy}`,
    color: 'Navy Blue',
    size: 'Large',
    gender: 'Women',
    inCart: false,
  },
}

export const shippingInfo = {
  "name": '',
  "address":'',
  "email": '',
  "Country": '',
  city:'',
  state:'',
  "zip":'',
  "phone":'',
  "phone2": '',
}

export const shippingError = {
  "name": '',
  "address":'',
  "email": '',
  "Country": '',
  city:'',
  state:'',
  "zip":'',
  "phone":'',
  "phone2": '',
}

export const shippingFees = {
  STANDARD: 5,
  EXPRESS: 10,
}

export const cardInfo = {
  cardHolderName: '',
  cardNumber: '',
  CVV:'',
  Year: '',
  Month:'',
}

export const Months = []

for (let i = 1; i <= 12; i++) {
  if (i < 10) {Months.push(`${'0' + i}`)}
  else {Months.push(i)}
}

export const Years = []

for (let i = 2023; i < 2028; i++) {
  Years.push(i)
}

export let totalAfterDiscount;

export const signedUpUsers = [
  {
    email: "nickos2014andriopoulos@gmail.com",
    password: "2014201420Ni!",
    firstName: "Nikos",
    lastName: "Andriopoulos",
    postalCode: "12345",
  },
]

