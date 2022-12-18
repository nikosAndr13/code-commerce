import React from "react";
import Input from "../ShippingScreen/ShipInputs"
import styles from "./shippingScreen.module.css"
import ShippingMethod from "./shippingMethod"
import Address from "./Address";
import Checkout from "../CustomerCard/Checkout/Checkout"
import ProgressBar from "../ProgressBar/ProgressBar";
class ShippingScreen extends React.Component {

  handleChange = ({target: {name, value}}) => {
    const {trackState} = this.props;
    trackState('shippingInfo', name, value)
  }

  render() {
    const {shippingInfo, 
           shoppingCartObj, 
           discountCode, 
           errors, 
           shipFee,
           shipPrice,
           handleSubmit,
           trackAnyState,
           totalCart,
           goToShipping,
           proceedToPayment,
           ConfirmationScreen,
          } = this.props;
    const shippingArray = [
      {title: "Address Title", name: 'address',
      },
      {title: "Name-Surname", name: 'name',
      },
      {title: "Email Address",  name: 'email',
        styles: {width: '83.85%'},
      },
      { title: "Zip Code",  name: 'zip',
        child: <Address 
                trackState={this.handleChange} 
                shippingInfo={shippingInfo}
                errors={errors}
                />, 
        styles:{display:'flex', gap:'10px'}},
      {title: "Phone", name: 'phone'},
      {title: "2nd Number", name: 'phone2'},
    ]
    return (
      <>
      <ProgressBar
         shipping={goToShipping}
         card={proceedToPayment}
         confirm={ConfirmationScreen}
        />
      <div className={`${styles.shippingScreenWrapper}`}>
      <div className={`${styles.title}`}>SHIPPING INFORMATION</div>
      <div style={{display: 'flex', gap:'30px', width: '77rem'}}>
        <form onSubmit={handleSubmit} id='shippingInfo' className={`${styles.shippingForm}`}>
          {shippingArray.map(item => (
            <div key={item.title} className={`${styles.Details}`}>
              <p>{item.title}</p>
              <div style={{...item.styles}}>
              <Input
              onChange={this.handleChange}
              name={item.name}
              value={shippingInfo[item.name]}
              placeholder={item.title}
              errorM={errors[item.name]}
              required={true}
              />
              {item.child}
            </div>
          </div>
        ))}
        <ShippingMethod
          name='shipFee'
          shipFee={shipFee}
          />
        </form>
          <Checkout
            shoppingCartObj={shoppingCartObj}
            trackState={trackAnyState}
            value={discountCode}
            id={'shippingInfo'}
            shipPrice={Number(shipPrice)}
            trackAnyState={trackAnyState}
            totalCart={totalCart}
            shippingInfo={shippingInfo}
            />
    </div>
      <div className={`${styles.bottomButtons}`}>
        <button onClick={() => {trackAnyState('goToShipping', false)}}>BACK TO CART</button>
      </div>
    </div>
    </>
  )}
}


export default ShippingScreen;