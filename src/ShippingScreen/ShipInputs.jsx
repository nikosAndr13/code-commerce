import React from "react";
import styles from "../SignupLogin/Inputs/Inputs.module.css"

const Input = () => (
  <>
    <div className={`${styles.inputsWrapper}`}>
      <input type='text' name='name' className={`${styles.inputsBorder}`} autoComplete='off'/>
    </div>
  </>
)

export default Input;