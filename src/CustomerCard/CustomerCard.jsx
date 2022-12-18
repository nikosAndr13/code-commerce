import React from "react";
import CardItem from "./CardItems/CardItem";
import styles from "../CustomerCard/CustomerCard.module.css"
import Checkout from "./Checkout/Checkout";

class Customercard extends React.Component {

  render() {
    const { trackNestedState, 
            shoppingCartObj,
            discountCode,
            remove, 
            shipPrice,
            trackAnyState,
            totalCart,
          } = this.props;
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
          {Object.values(shoppingCartObj).map(item => (
            <div key={item.product} className={`${styles.cardItem}`}>
              <CardItem 
                data={item}
                trackNestedState={trackNestedState}
                value={(shoppingCartObj[item.product] !== undefined) ? shoppingCartObj[item.product].quantity : ''}
                totalPrice={shoppingCartObj[item.product] !== undefined ? (shoppingCartObj[item.product].totalPrice) : ''}
                remove={remove}
                />
            </div>
         ))}
       </div>
        <div>
           <Checkout
            shoppingCartObj={shoppingCartObj}
            length={Object.values(shoppingCartObj).length}
            value={discountCode}
            shipPrice={(!isNaN(shipPrice)) ? shipPrice : 0}
            trackAnyState={trackAnyState}
            totalCart={totalCart}
            name={'goToShipping'}
            /> 
        </div>
      </div>
    );
  }
}

export default Customercard;
