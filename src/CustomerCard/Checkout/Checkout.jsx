import React from "react";
import Inputs from "../../SignupLogin/Inputs/Inputs"
import styles from "./checkout.module.css"
import {calcSum, calcDiscount} from "../../Data";
import SummaryItem from "./SummaryItem";
import { cardIcons } from "../../assets/icons";


class Checkout extends React.Component { 

  handleChange = ({target: {name, value}}) => {
    const {trackAnyState} = this.props;
    trackAnyState(name, value)
  }

  calcTotal = () => {
    const {value, shoppingCartObj, shipPrice, trackAnyState} = this.props;
    const totalAfterDiscount = (Number(calcDiscount(value, calcSum(shoppingCartObj))) + Number(shipPrice)).toFixed(2)
    trackAnyState('totalCart', totalAfterDiscount)
  }

  componentDidUpdate = () => {
    setTimeout(() => {
      this.calcTotal()
    },50)
  }

  blurNumber = (card) => {
    card = card.substring(0, card.length-4) + card.substring(card.length- 4);
    const blurredCard =  card.substring(0, card.length - 4)
    return blurredCard.replace(/./g, '*') + card.substring(card.length - 4)
  }
  
  render() {
    const {shoppingCartObj, length, trackAnyState, shipPrice, value, id, totalCart, name, shippingInfo, cardInfo, cardType} = this.props;
    const discountAmount = (calcSum(shoppingCartObj) - calcDiscount(value, calcSum(shoppingCartObj))).toFixed(2)
    return (
      <div className={`${styles.Checkout}`}>
        <div>
          <div className={`${styles.summary}`}>Summary</div>
          <div className={`${styles.discount}`}>
            <Inputs
            onChange={this.handleChange}
            type='text'
            name='discountCode'
            value={value}
            placeholder={'DISCOUNT CODE'}
            />
          </div>
          <div className={`${styles.itemScroll}`}>
            {Object.values(shoppingCartObj).map(item => (
              (item.inCart) 
              ? <SummaryItem 
                  key={item.product}
                  data={item}
                  /> 
              : ''
            ))} 
          </div> 
          <hr/>
        <div className={`${styles.CheckoutInfo}`}>
          <div> 
            <div>Cart Subtotal</div> 
            <div>{calcSum(shoppingCartObj)}</div> 
          </div>
          <div>
            <div>Shipping and Handling</div>
            <div>{Number(shipPrice).toFixed(2)}</div>
          </div>
          <div>
            <div>Discount</div>
            {discountAmount}
          </div>
          <div>
            <div>Cart Total</div>
            <div>{totalCart}</div> 
          </div>
          <div>
              <div>Shipping</div>
              <div style={{display: 'flex', flexDirection: 'column'}}>
              {(shippingInfo !== undefined) 
              ? (Object.values(shippingInfo).forEach(info => 
                (
                    <h6>{info}</h6>
                    )))
                    : ''}
              </div>
          </div>
          <div>
              <div>Payment</div>
              {(cardType && cardInfo !== undefined)
              ? 
                <>
                  <img src={cardIcons[cardType]} alt='card' className={styles.imgWidth}/>
                  <div>{this.blurNumber(cardInfo.cardNumber)}</div>
                </>
              : ''
              }
          </div>
        </div>
        </div>
        <div className={`${styles.inputsWrapper} ${styles.shipBackground}`}>
          <button 
            type='submit'
            disabled={length === 0 ? true : false}
            onClick={() => {trackAnyState(name, true)}}
            className={`${styles.inputsBorder}`}
            form={id}
            >CONTINUE
            </button> 
          </div>
      </div>
    )
  }
}

export default Checkout;