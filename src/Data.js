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
  confirm: "",
  firstName: "",
  surname: "",
  postalCode: "",
};

export const errorValues = {
  email: "",
  password: "",
  firstName: "",
  surname: "",
  postalCode: "",
};
