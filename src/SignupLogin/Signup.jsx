import React from "react";
import Text from "./Inputs/Inputs";
import { createAccountData, createNewAccount } from "../Data";
import styles from "../SignupLogin/SignUp.module.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountData: createAccountData,
      signedUpUsers: [
        {
          email: 'nickos2014andriopoulos@gmail.com',
          password: '2014201420Ni!',
          firstName: 'Nikos',
          lastName: 'Andriopoulos',
          postalCode: '12345',
        }
      ],
    }
  }

  // trackState = ({target: {name,value}}) => {
  //   this.setState((prevState) => ({
  //     accountData: {
  //       ...prevState.accountData,
  //       [name]: value,
  //     }
  //   }))
  // }

  
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
    const {email, password, firstName, lastName, postalCode} = this.state.accountData;
    const newUser = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      postalCode: postalCode,
    }
    return {
      signedUpUsers: [...prevState.signedUpUsers, newUser],
    }})
  }

  // handleValidations = (name, value) => {
  //   // let errorText;
  //   switch(name) {
  //       case 'email' :
  //           emailValidation(value);
  //       break;
  //     case 'password':  
  //           passwordValidation(value);
  //       break;
  //     case 'firstName' : 
  //           firstNameValidation(value);
  //       break;
  //     case 'lastName' :
  //           surNameValidation(value);
  //       break;
  //     case 'postalCode' :
  //           postalCodeValidation(value);
  //       break;   
  //        default: break;
  //   }
  // }

  // handleBlur = ({target: {name, value}}) => {
  //   this.handleValidations(name,value);
  // }  

  render() {  
    const {accountData} = this.state;
    const {revealPassword, handleBlur, trackState} = this.props;
    return (
    <>
      <form onSubmit={this.handleSubmit}>
        {createNewAccount.map((item) => (
          <div key={item.name}>
            <Text 
            {...item} 
            onChange={trackState}
            value={accountData && accountData[item.name]}
            autoComplete='off'
            onClick={revealPassword}
            onBlur={handleBlur}
            />
          </div>
        ))}
        <button className={`${styles.buttons} ${styles.pink}`} type="submit">SAVE</button>
        or
        <button className={`${styles.buttons} ${styles.blue}`}>
          SIGN UP WITH FACEBOOK
        </button>
      </form>
    </>
    )
  }
}

export default Signup;
