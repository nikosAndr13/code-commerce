import React from "react";
import styles from "../Inputs/Inputs.module.css";
import Eye from "../../assets/eye-solid.svg";

const Text = ({label, name, type, onClick, error, value, ...props}) => (
  <>
    <label>
      <div style={{ paddingBottom: '10px' }}>{label}</div>
      <div className={styles.inputsWrapper}>
        <input className={styles.inputsBorder} {...props} type={type} value={value} name={name} />
        {(type === 'password')
          ? <img className={styles.imgWidth} src={Eye} alt="eye" onClick={onClick} />
          : ''}
      </div>
      {error && <small style={{ color: "red" }}>{error}</small>}
      <br />
      {(name === 'password')
        ? <small>Password must be 8-20 characters, including: at least:
            one capital letter, one small letter, one number and one
            special character -!@#$%^&*()_+
          </small>
        : ''}
    </label>
  </>
)

export default Text;