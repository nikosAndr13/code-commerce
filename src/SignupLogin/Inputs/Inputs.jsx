import React from "react";
import styles from "../Inputs/Inputs.module.css";
import Eye from "../../assets/eye-solid.svg";
import Question from "../../assets/circle-question-regular.svg";
import { cardIcons } from "../../assets/icons";

const Text = ({label, name, type, onClick, error, value, onChange, onBlur, cardType, placeholder}) => {
  return (
  <>
    <label>
      <p style={{ paddingBottom: '10px' }}>{label}</p>
      <div style={{display:'flex', flexDirection:'column'}}>
      {
        (name === 'CVV')
          ?
          <div style={{display:'flex', gap:'10px'}}>
            <div className={styles.inputsWrapper} style={{ width: '5rem' }}>
              <input 
                className={styles.inputsBorder} 
                type={type} 
                value={value} 
                onChange={onChange} 
                name={name} 
                onBlur={onBlur} 
                autoComplete='off'
                />
              {(type === 'password')
                ? <img className={styles.imgWidth} src={Eye} alt="eye" onClick={onClick} />
                : ''}
            </div>
            <img className={styles.imgWidth} src={Question} alt='question' />
          </div>
          :
          <div className={styles.inputsWrapper}>
            <input 
              className={styles.inputsBorder}
              type={type}
              value={value}
              onChange={onChange} 
              name={name} 
              onBlur={onBlur}
              placeholder={placeholder} 
              autoComplete='off'
              />
            {(type === 'password')
              ? <img className={styles.imgWidth} src={Eye} alt="eye" onClick={onClick} />
              : ''}
            {(name === 'cardNumber' && cardType !== '')
              ? <img src={cardIcons[cardType]} alt='card' className={styles.cardIcons}/>
              : ''
            }
          </div>
      }
      {error && <small style={{ color: "red" }}>{error}</small>}
      </div>
      <br />
      {(name === 'password')
        ? <small>Password must be 8-20 characters, including: at least:
            one capital letter, one small letter, one number and one
            special character -!@#$%^&*()_+
          </small>
        : ''}
    </label>
  </>
)}

export default Text;