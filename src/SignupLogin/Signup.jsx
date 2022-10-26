import React from "react";
import Text from "./Inputs/Inputs";
import { createNewAccount } from "../Data";
import styles from "../SignupLogin/SignUp.module.css";

const Signup = ({revealPassword, handleBlur, trackState, handleSubmit, checkForExistingAccount, error}) => {
  console.log(error)
  return (
    <>
      <form onSubmit={handleSubmit}>
        {createNewAccount.map((item) => (
          <div key={item.name}>
            <Text
              {...item}
              onChange={trackState}
              autoComplete='off'
              onClick={revealPassword}
              onBlur={handleBlur}
              account={checkForExistingAccount}
              error={error && error[item.name] ? error[item.name] : null} 
              />
          </div>
        ))}
        <button className={`${styles.buttons} ${styles.pink}`} type="submit">SAVE</button>
        or
        <button className={`${styles.buttons} ${styles.blue}`}>SIGN UP WITH FACEBOOK</button>
      </form>
    </>
  );
}
  

export default Signup;
