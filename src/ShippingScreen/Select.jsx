import React from "react";
import style from "../SignupLogin/Inputs/Inputs.module.css"
import styles from "../ShippingScreen/shippingScreen.module.css"

const Select = ({Array, onChange, name, value, errorM, select}) => {
  return (
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <select 
      className={`${style.inputsWrapper} ${styles.inputsBorder}`}
      value={value}
      name={name}
      onChange={onChange}
      >
       <option defaultValue={"Select"}>{select}</option>
       {Array.map(country => (
         <option key={country} value={country} name={name}>{country}</option>
       ))}
      </select>
      <h5>{errorM}</h5>
    </div>
  )
}

export default Select;
