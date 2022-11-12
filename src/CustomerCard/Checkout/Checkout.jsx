import React from "react";
import Inputs from "../../SignupLogin/Inputs/Inputs"
import styles from "./checkout.module.css"

const Checkout = ({shoppingCartObj, shoppingCart, proceedToShipping, trackState, value}) => {

  const calcSum = () => Number(
    Object.values(shoppingCartObj)
      .map(({ quantity, price }) => { return Number(quantity) * Number(price); })
      .reduce((a, b) => a + b)
  ).toFixed(2)

  const applyDiscounts = () => {
      switch (value) {
        case 'discount20': return (calcSum() - (calcSum() * (20/100))).toFixed(2);
        case 'codeCommerce50': return (calcSum() - (calcSum() * (50/100))).toFixed(2);
        case 'takeItForFree90': return (calcSum() - (calcSum() * (90/100))).toFixed(2);
        default:return calcSum();
      }
  }
  
    return (
      <div className={`${styles.Checkout}`}>
        <div>
          <div className={`${styles.summary}`}>Summary</div>
            <hr/>
          <div className={`${styles.discount}`}>
            <Inputs
            onChange={trackState}
            type='text'
            name='discountCode'
            value={value}
            placeholder={'DISCOUNT CODE'}
            />
          </div>
          <hr/>
        <div className={`${styles.CheckoutInfo}`}>
          <div> 
            <div>Card Subtotal</div> 
            <div>{calcSum()}</div>
          </div>
          <div>
            <div>Shipping and Handling</div>
            <div>-</div>
          </div>
          <div>
            <div>Discount</div>
            <div>{(calcSum() - applyDiscounts()).toFixed(2)}</div>
          </div>
          <div>
            <div>Card Total</div>
            <div>{applyDiscounts()}</div>
          </div>
        </div>
        </div>
        <div className={`${styles.inputsWrapper, styles.shipBackground}`}>
          <button 
            type="submit" 
            disabled={shoppingCart.length === 0 ? true : false}
            onClick={proceedToShipping}
            className={`${styles.inputsBorder}`}
            >Go to Shipping
            </button> 
          </div>
      </div>
    )
  }

export default Checkout;