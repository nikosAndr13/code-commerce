import React from "react";
import styles from "./CardItem.module.css";
import Increase from "./Increase";
import RemoveItem from "./RemoveItem";

class CardItem extends React.Component {
  render() {
    const {product, img, color, size, price, gender} = this.props.data;
    const {trackNestedState, totalPrice, value, remove,} = this.props;
  return (
    <>
      <div className={styles.productInfo}>
        <div style={{display: 'flex'}}>
          <RemoveItem name={product} onClick={remove}/>
          <img src={img} alt='Item' className={styles.itemImg} />
          {gender}<br/>
          {product}<br/> 
          Color: {color}<br/>
          size: {size}
        </div>
      </div>      
        <div className={styles.inputs}>
          ${price}
          <Increase 
            onChange={trackNestedState}
            name={product}
            value={value}
          />
        <div style={{width: '40px'}}>
          ${totalPrice}
        </div>
      </div>
  </>
)}
}

export default CardItem;