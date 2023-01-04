import React from "react";
import Checkout from "../CustomerCard/Checkout/Checkout";
import Check from '../assets/circle-check-regular.svg'
import styles from './Confirmation.module.css'
import ProgressBar from "../ProgressBar/ProgressBar";

const Confirmation = ({
  shoppingCartObj, 
  totalCart, 
  shipPrice,
  trackAnyState,
  discountCode, 
  shippingInfo,
  goToShipping,
  proceedToPayment,
  ConfirmationScreen
}) => {
  return (
    <>
  <ProgressBar
     shipping={goToShipping}
     card={proceedToPayment}
     confirm={ConfirmationScreen}
  />
  <div className={`${styles.ConfirmationWrapper}`}>
    <div className={`${styles.Confirmation}`}>
      <h1>Confirmation</h1>
      <div className={`${styles.OrderConfirm}`}>
        <img src={`${Check}`} alt='check'/>
        <h2>Congratulations.</h2>
        <h2>You order is accepted.</h2>
        <p>
          Click the buttons below
        </p>
        <div className={`${styles.ButtonWrapper}`}>
          <div>
            <button>Track Order</button>
          </div>
          <div>
            <button onClick={() => {trackAnyState('ConfirmationScreen', false)}}>Back To Home Page</button>
          </div>
        </div>
      </div>
    </div>
    <Checkout
      shoppingCartObj={shoppingCartObj}
      trackState={trackAnyState}
      value={discountCode}
      shipPrice={Number(shipPrice)}
      trackAnyState={trackAnyState}
      totalCart={totalCart}
      shippingInfo={shippingInfo}
      /> 
  </div>
  </>
  )
}

export default Confirmation;
