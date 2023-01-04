import React from "react";
import Checkout from "../CustomerCard/Checkout/Checkout";
import Inputs from "../SignupLogin/Inputs/Inputs";
import styles from '../Payment/Payment.module.css';
import button from '../ShippingScreen/shippingScreen.module.css';
import Expiry from "./Expiry";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";

class Payment extends React.Component {

  handleChange = ({target: {name, value}}) => {
    const {trackState, handleSplitCard} = this.props;
    trackState('cardInfo', name, value)
    handleSplitCard(name, value)
  }


  handleBlur = (event) => {
    const {handleCardValidations} = this.props;
    const {name, value} = event.target;
    handleCardValidations(name, value)
  }
  
  componentDidUpdate = () => {
    const {cardError, cardInfo, trackAnyState} = this.props;
    const noError = Object.values(cardError).every(value => value === "");
    const allFilled = Object.values(cardInfo).every(value => value !== "");
    setTimeout(() => {
      if (noError && allFilled) {
        trackAnyState('isDisabled',false)
      } 
      if (!noError && !allFilled){trackAnyState('isDisabled', true)}
      if (!noError && allFilled){trackAnyState('isDisabled', true)}
    },50)

  }

  render() {
    const {
      shoppingCartObj, 
      discountCode, 
      shipPrice,
      cardInfo,
      shippingInfo,
      cardError,
      cardType,
      isDisabled,
      totalCart,
      trackAnyState,
      goToShipping,
      proceedToPayment,
      ConfirmationScreen,
     } = this.props;
    const infoInputs = [
      {name: 'cardNumber', title: 'CARD NUMBER', error: 'cardError'},
      {name: 'cardHolderName', title: 'CARDHOLDER NAME', error: 'cardHolderError'},
      {name: 'EXPIRE DATE', child: <Expiry handleChange={this.handleChange} handleBlur={this.handleBlur}/>},
      {name: 'CVV', title: 'CVV', error: 'CVV'}
    ]
    return (
      <>
        <ProgressBar
          shipping={goToShipping}
          card={proceedToPayment}
          confirm={ConfirmationScreen}
        />
      <div className={`${styles.paymentWrapper}`}>
        <form>
          <div className={`${styles.paymentInfo}`}>
            <h1>Payment</h1>
              {infoInputs.map(field => {
                if (field.name === 'EXPIRE DATE') {
                  return (
                    <div key={field.name} className={styles.dateWrapper}>
                      <p>{field.name}</p>
                      {field.child}
                    </div>
                    )
                } else {
                return (
                    <Inputs
                    onChange={this.handleChange}
                    value={cardInfo[field.name]}
                    name={field.name}
                    key={field.name}
                    onBlur={this.handleBlur}
                    label={field.title}
                    maxLength={19}
                    error={cardError[field.error]}
                    cardType={cardType}
                    />
              )}})}
          </div>
          <button 
            type='submit' 
            disabled={isDisabled} 
            onClick={() => {trackAnyState('ConfirmationScreen', true)}}> PAY {totalCart} 
          </button>
          <div className={`${button.bottomButtons}`}>
            <button 
            type='button' 
            onClick={() => {trackAnyState('proceedToPayment', false)}}>BACK TO ADDRESS
            </button>
          </div>
        </form>
        <Checkout
          shoppingCartObj={shoppingCartObj}
          trackState={trackAnyState}
          value={discountCode}
          id={'shippingInfo'}
          shipPrice={Number(shipPrice)}
          trackAnyState={trackAnyState}
          totalCart={totalCart}
          name={'ConfirmationScreen'}
          shippingInfo={shippingInfo}
          cardInfo={cardInfo}
          cardType={cardType}
          isDisabled={isDisabled}
        /> 
      </div>
      </>
    )
  }

  
}

export default Payment;