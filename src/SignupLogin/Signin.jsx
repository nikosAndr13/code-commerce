import React from "react";
import Text from "./Inputs/Inputs";
import { inputsInfo } from "../Data";
import styles from "../SignupLogin/SignIn.module.css";

const Signin = ({
  revealPassword,
  trackState,
  handleSignIn,
  accountData,
  error,
}) => {
  return (
    <>
      <form onSubmit={handleSignIn}>
        {inputsInfo.map((item) => (
          <div key={item.name}>
            <Text
              {...item}
              onChange={trackState}
              autoComplete="off"
              value={accountData[item.name]}
              onClick={revealPassword}
              error={error[item.name]}
            />
          </div>
        ))}
        <button className={`${styles.buttons} ${styles.pink}`} type="submit">
          SAVE
        </button>
        or
        <button className={`${styles.buttons} ${styles.blue}`}>
          SIGN UP WITH FACEBOOK
        </button>
      </form>
    </>
  );
};

export default Signin;
