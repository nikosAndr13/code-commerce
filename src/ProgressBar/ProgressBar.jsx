import React from "react";
import check from '../assets/check-solid.svg';
import truck from "../assets/truck-solid.svg";
import cardIcon from '../assets/credit-card-solid.svg'
import confirmIcon from "../assets/circle-check-solid.svg"
import styles from './progressBar.module.css'

const ProgressBar = ({shipping, card, confirm}) => {
  let background;
  
  const progressStyle = (value) => {if (value) {return background = {backgroundColor: 'rgb(62,62,61)'}}}

  const bar = [
    {title: 'Cart', src: check, value: true, barVal: shipping},
    {title: 'Shipping', src: truck, value: shipping, barVal: card},
    {title: 'Payment', src: cardIcon, value: card, barVal: confirm},
    {title: 'Confirm', src: confirmIcon, value: confirm, barVal: confirm},
  ]

  return (
  <div className={styles.barWrapper}>
    {bar.map(bar => {return (
      <React.Fragment key={bar.title}>
        <div>
          <div className={`${styles.iconWrapper}`} style={progressStyle(bar.value)}>
            <img src={bar.src} alt={bar.title}/>
          </div>
        <p style={{marginRight: '-2.5rem',}}>{bar.title}</p>
        </div>
        {bar.title !== 'Confirm' 
        ? <div className={`${styles.progressLines}`} style={progressStyle(bar.barVal)}></div>
        : ''
        }
      </React.Fragment>
    )})}
  </div>
  )
}

export default ProgressBar;