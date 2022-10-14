import React from "react";
import Text from "./Inputs/Inputs";
import { createAccountData, createNewAccount } from "../Data";
import styles from "../SignupLogin/SignUp.module.css";


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountData: createAccountData,
    }
  }

  // trackState = ({target: {name,value}}) => {
  //   this.setState((prevState) => ({
  //     accountData: {
  //       ...prevState.accountData,
  //       [name]: '',
  //     }
  //   }));
  //   this.setState((prevState) => ({
  //     accountData: {
  //       ...prevState.accountData,
  //       [name]: value,
  //     }
  //   }))
  // }

  render() {  
    const {accountData} = this.state;
    const {revealPassword, trackState} = this.props;
    return (
    <>
        {createNewAccount.map((item) => (
          <div key={item.name}>
            <Text 
            {...item} 
            onChange={trackState}
            value={accountData && accountData[item.name]}
            autoComplete='off'
            onClick={revealPassword}
            />
          </div>
        ))}
        <button className={`${styles.buttons} ${styles.pink}`} type="submit">SAVE</button>
        or
        <button className={`${styles.buttons} ${styles.blue}`}>
          SIGN UP WITH FACEBOOK
        </button>
    </>
    )
  }
}

export default Signup;
