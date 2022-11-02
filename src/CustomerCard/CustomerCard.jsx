import React from "react";
import { shoppingCart } from "../Data";
import CardItem from "./CardItems/CardItem";
import styles from "../CustomerCard/CustomerCard.module.css"

class Customercard extends React.Component {
  state = {};

  render() {
    return (
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
        {shoppingCart.map(item => (
          <div key={item.product} className={`${styles.cardItem}`}>
            <CardItem data={item}/>
          </div>
        ))}
      </div>
    );
  }
}

export default Customercard;
