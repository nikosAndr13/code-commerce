import React from "react";
import Text from "./Inputs/Inputs";
import { signInInfo } from "../Data";
import styles from "../SignupLogin/SignIn.module.css";

const Signin = ({revealPassword, trackState, handleSignIn, accountData, error }) => (
  <>
    <form onSubmit={handleSignIn}>
      {signInInfo.map((item) => (
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
    </form>
  </>
);

export default Signin;
