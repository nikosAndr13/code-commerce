import React from "react";
import styles from "../CardItems/increase.module.css"

const Increase = ({value, onChange, name}) => {
  return (
      <>
        <input type='text' value={value} name={name} onChange={onChange} className={styles.input}/> 
      </>
    )
  }

export default Increase;