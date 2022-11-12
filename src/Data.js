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
  confirm:'',
  firstName: "",
  surname: "",
  postalCode: "",
};

export const shoppingCart = [
  {product: 'Black Belt', img: `${Belt}`, color: 'Space Black', size: 'One size', price: 19.90.toFixed(2), gender: 'Women'},
  {product: 'Biker Jacket', img: `${Biker}`, color: 'Leather Black', size: 'Large', price: 59.90.toFixed(2), gender: 'Men'},
  {product: 'Jeans', img: `${Jeans}`, color: 'Light Blue', size: 'Medium', price: 39.90.toFixed(2), gender: 'Men'},
  {product: 'Hoodie', img: `${Hoodie}`, color: 'Black', size: 'Large', price: 29.90.toFixed(2), gender: 'Women'},
  {product: 'T-shirt', img: `${Navy}`, color: 'Navy Blue', size: 'Large', price: 14.90.toFixed(2), gender: 'Women'},
]

export const shoppingItemsObj = {
  "Black Belt": {
    price: 19.90.toFixed(2),
    quantity: '',
    totalPrice: '',
  },
  "Biker Jacket": {
    price: 59.90.toFixed(2),
    quantity: '',
    totalPrice: '',
  },
  Jeans: {
    price: 39.90.toFixed(2),
    quantity: '',
    totalPrice: '',
  },
  Hoodie: {
    price: 29.90.toFixed(2),
    quantity: '',
    totalPrice: '',
  },
  "T-shirt": {
    price: 14.90.toFixed(2),
    quantity: '',
    totalPrice: '',
  },
}
