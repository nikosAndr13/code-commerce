import React from "react";
import Signin from "./SignupLogin/Signin";
import Signup from "./SignupLogin/Signup";
import X from "../src/assets/x-solid.svg";
import styles from "../src/RenderSignUpIn.module.css"
import {
  emailValidation,
  passwordValidation,
  firstNameValidation,
  surNameValidation,
  postalCodeValidation,
} from './validations';

class RenderSignUpIn extends React.Component{
    constructor(props) {
      super(props); 
      this.state = {
        signedUp: false,
        }
      }

  
  handleSignUpRender = () => {
      this.state.signedUp
      ? this.setState({signedUp: false})
      : this.setState({signedUp:true})
  }


   trackState = ({target: {name,value}}) => {
     this.setState((prevState) => ({
       accountData: {
         ...prevState.accountData,
         [name]: value,
        }
      }))
    console.log(name);
    console.log(value);
  }

  handleValidations = (name, value) => {
    // let errorText;
    switch(name) {
        case 'email' :
            emailValidation(value);
        break;
      case 'password':  
            passwordValidation(value);
        break;
      case 'firstName' : 
            firstNameValidation(value);
        break;
      case 'surname' :
            surNameValidation(value);
        break;
      case 'postalCode' :
            postalCodeValidation(value);
        break;   
         default: break;
    }
  }

  handleBlur = ({target: {name, value}}) => {
    this.handleValidations(name,value);
  }  

  revealPassword = (e) => {
    const inputType = e.target.previousSibling.type;
    (inputType === 'password') 
    ? e.target.previousSibling.type = 'text' 
    : e.target.previousSibling.type = 'password'
   }


  render() {
    const radioData = [
      {label:'SIGN IN', type: 'radio', name:'signIn', key:"sign In"},
      {label:'CREATE ACCOUNT', type:'radio', name:'signIn', key:"create"},
    ]
  return (
    <>  
      <div>
        <div>
         {radioData.map(( item ) => (
          <label key={item.key}>
            <input className={styles.radio}
            type={item.type} name={item.name} onClick={this.handleSignUpRender} defaultChecked/>
            {item.label}
          </label>
         ))} 
        </div>
        <img className={styles.imgWidth} src={X} alt="X"/>
        </div>
        <br/>
        {this.state.signedUp 
        ? (<Signin
        revealPassword={this.revealPassword}
        trackState={this.trackState}
        handleBlur={this.handleBlur}
        />) 
        : <Signup
        revealPassword={this.revealPassword}
        trackState={this.trackState}
        handleBlur={this.handleBlur}
        />}

    </>
  )}
}


export default RenderSignUpIn;