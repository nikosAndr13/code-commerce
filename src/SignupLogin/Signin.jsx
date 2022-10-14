import React from "react";
import Text from "./Inputs/Inputs";
import { inputsInfo , accountData} from "../Data";
import styles from "../SignupLogin/SignIn.module.css"


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      accountData: accountData,
      defaultUser: {
        email: 'nickos2014andriopoulos@gmail.com',
        password: '2014201420Ni!',
        firstName: 'Nikos',
        lastName: 'Andriopoulos',
        postalCode: '12345',
      }
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

  render() {  
    const {accountData} = this.state;
    const {revealPassword, handleBlur, trackState} = this.props;
    return (
      <>
      {inputsInfo.map((item) => (
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
      <button className={`${styles.buttons} ${styles.pink}`} type='submit'>SAVE</button>
      or
      {/* <hr/>
      or
      <hr/> */}
      <br/>
      <button className={`${styles.buttons} ${styles.blue}`}>SIGN UP WITH FACEBOOK</button>
    </>
    )
  }
}

export default Signin;