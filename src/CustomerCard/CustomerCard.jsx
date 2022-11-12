import React from "react";
import { shoppingCart, shoppingItemsObj} from "../Data";
import CardItem from "./CardItems/CardItem";
import styles from "../CustomerCard/CustomerCard.module.css"
import Checkout from "./Checkout/Checkout";

class Customercard extends React.Component {
  state = {
    shoppingCartObj: shoppingItemsObj,
    shoppingCart: shoppingCart,
  };

  trackNestedState = ({target: {name , value}}) => {
    this.setState(prevState => ({
      shoppingCartObj: {
        ...prevState.shoppingCartObj,
        [name]: {
          ...prevState.shoppingCartObj[name],
          quantity: value,
          totalPrice: ((this.state.shoppingCartObj[name].price) * value).toFixed(2)
        }
      },
    }))
  }

  remove = ({target : { name }}) => {
    const {shoppingCart} = this.state;
    const filtered = shoppingCart.filter(item => (item.product !== name))
      this.setState({shoppingCart: filtered})
  }

  render() {
    const {shoppingCartObj, shoppingCart} = this.state;
    const {trackState, discountCode} = this.props;
    return (
      <div className={`${styles.CustomerCard}`}>
        <div className={`${styles.cardWrapper}`}>
          <div className={`${styles.productBar}`}>
            <div>
              Product
            </div>
            <div className={`${styles.sideProductBar}`}>
              <div>Price</div>
             <div>Quantity</div>
              <div>Total Price</div>
            </div>
         </div>
          {this.state.shoppingCart.map(item => (
            <div key={item.product} className={`${styles.cardItem}`}>
              <CardItem 
                data={item}
                trackNestedState={this.trackNestedState}
                value={(shoppingCartObj[item.product] !== undefined) ? shoppingCartObj[item.product].quantity : ''}
                totalPrice={shoppingCartObj[item.product] !== undefined ? (shoppingCartObj[item.product].totalPrice) : ''}
                remove={this.remove}
                />
            </div>
         ))}
       </div>
        <div>
           <Checkout
            shoppingCartObj={this.state.shoppingCartObj}
            shoppingCart={shoppingCart}
            proceedToShipping={this.props.proceedToShipping}
            trackState={trackState}
            value={discountCode}
            /> 
        </div>
      </div>
    );
  }
}

export default Customercard;
