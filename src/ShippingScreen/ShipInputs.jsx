import React from "react";
import styles from "../SignupLogin/Inputs/Inputs.module.css"

const Input = ({name, onChange, value, placeholder, errorM }) => {
  return (
  <div className={`${styles.errorWrapper}`}>
    <div className={`${styles.inputsWrapper}`}>
      <input 
        type='text' 
        name={name} 
        onChange={onChange}
        value={value}
        className={`${styles.inputsBorder}`} 
        placeholder={placeholder}
        autoComplete='off'
        />
    </div>
      <h5>{errorM}</h5>
  </div>
  )
}


export default Input;