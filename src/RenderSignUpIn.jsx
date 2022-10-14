import React from "react";
import Signin from "./SignupLogin/Signin";
import Signup from "./SignupLogin/Signup";
import X from "../src/assets/x-solid.svg";
import styles from "../src/RenderSignUpIn.module.css"
import { accountData } from "./Data";


class RenderSignUpIn extends React.Component{
    constructor(props) {
      super(props); 
      this.state = {
        signedUp: false,
        accountData: accountData,
        signedUpAccounts: [],
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
         [name]: '',
       }
     }));
     this.setState((prevState) => ({
       accountData: {
         ...prevState.accountData,
         [name]: value,
       }
     }))
  }

  revealPassword = (e) => {
    const inputType = e.target.previousSibling.type;
    (inputType === 'password') 
    ? e.target.previousSibling.type = 'text' 
    : e.target.previousSibling.type = 'password'
   }

   handleSignUp = () => {
    
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
        />) 
        : <Signup
        revealPassword={this.revealPassword}
        trackState={this.trackState}

        />}

    </>
  )}
}


export default RenderSignUpIn;