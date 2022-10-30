import React from "react";
import Customercard from "./CustomerCard/CustomerCard";
import { defaultValues } from "./Data";
import RenderSignUpIn from "./RenderSignUpIn";
import {
  emailValidation,
  passwordValidation,
  firstNameValidation,
  surNameValidation,
  postalCodeValidation,
} from "./validations";

class Codecommerce extends React.Component {
  state = {
    successfulSignIn: false,
    accountData: defaultValues,
    error: defaultValues,
    signedUpUsers: [
      {
        email: "nickos2014andriopoulos@gmail.com",
        password: "2014201420Ni!",
        firstName: "Nikos",
        lastName: "Andriopoulos",
        postalCode: "12345",
      },
    ],
  };
  
  trackState = ({ target: { name, value } }) => {
    this.setState((prevState) => ({
      accountData: {
        ...prevState.accountData,
        [name]: value,
      },
    }));
  };

  resetForms = () => {
    this.setState({
      accountData:defaultValues,
      error:defaultValues,
    })
  }

  checkForError = () => {
    const {error} = this.state;
    for (const key in (error)) {
      if (error[key] !== '') 
      return false
    }
    return true
  };

  checkForExistingAccount = () => {
    const {signedUpUsers} = this.state;
    const existingAccount = signedUpUsers.find( ({email}) => email === this.state.accountData.email)
     if (existingAccount !== undefined) {
       return true;
     } else return false;
  }

  checkForExistingPassword = () => {
    const {signedUpUsers} = this.state;
    const existingPassword = signedUpUsers.find( ({password}) => password === this.state.accountData.password)
    if (existingPassword !== undefined) {
      return true;
    } else 
    // this.setState((prevState) => ({ error: {...prevState.error, password: 'Wrong Password'}}))
    return false;

  }

  handleValidations = () => {
    const {email, password, firstName, surname, postalCode} = this.state.accountData;
    this.setState((prevState) => ({
      error: { ...prevState.error, email: emailValidation(email) },
    }));
    this.setState((prevState) => ({
      error: { ...prevState.error, password: passwordValidation(password) },
    }));
    this.setState((prevState) => ({
      error: { ...prevState.error, confirm: this.confirmPassword() },
    }));  
    this.setState((prevState) => ({
      error: { ...prevState.error, firstName: firstNameValidation(firstName) },
    }));
    this.setState((prevState) => ({
      error: { ...prevState.error, surname: surNameValidation(surname) },
    }));
    this.setState((prevState) => ({
      error: { ...prevState.error,postalCode: postalCodeValidation(postalCode) },
    }));
  }

  confirmPassword = () => {
    const { password, confirm } = this.state.accountData;
    return (password === confirm)
      ? ""
      : "Passwords don't match";
  };
  
  handleSignIn = (e) => {
    e.preventDefault();
    (this.checkForError() && this.checkForExistingAccount() && this.checkForExistingPassword()) 
    ? this.setState({successfulSignIn: true})
    : this.setState({successfulSignIn: false});

    if (!this.checkForExistingPassword()) {
     this.setState((prevState) => ({error: {...prevState.error, password: 'Wrong Password'}})) 
    } else {this.setState((prevState) => ({error: {...prevState.error, password: ''}}))}

     if (!this.checkForExistingAccount()) {
      this.setState((prevState) => ({error: {...prevState.error, email: 'Account Does not Exist'}}))
    } else {this.setState((prevState) => ({error: {...prevState.error, email: ''}}))}
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleValidations();
    if (this.checkForError() && !this.checkForExistingAccount()) {
      this.setState((prevState) => {
        const { email, password, firstName, lastName, postalCode } = this.state.accountData;
        const newUser = {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          postalCode: postalCode,
        };
        return {
          signedUpUsers: [...prevState.signedUpUsers, newUser],
        };
      });
    }
    if (this.checkForExistingAccount())
       {this.setState((prevState => ({error: {...prevState.error, email:'Account Already exists'}}))
    )}
  };
  
  render() {
    return (
      <>
        {this.state.successfulSignIn 
        ? (<Customercard />) 
        : (<RenderSignUpIn 
          signedUpUsers={this.state.signedUpUsers}
          accountData={this.state.accountData}
          error={this.state.error}
          checkForError={this.checkForError}
          trackState={this.trackState}
          handleSignIn={this.handleSignIn}
          handleSubmit={this.handleSubmit}
          resetForms={this.resetForms}
          successfulSignIn={this.state.successfulSignIn}
          confirmPassword={this.confirmPassword}
          />
        )}
      </>
    );
  }
}

export default Codecommerce;
