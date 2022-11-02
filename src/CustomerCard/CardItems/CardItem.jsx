import React from "react";
import X from "../../assets/x-solid.svg";
import styles from "./CardItem.module.css";

const CardItem = ({data}) => {
  const {product, img, color, size, price, quantity, gender} = data;
  return (
  <>
  <img src={X} alt='X' className={styles.X}/>
  <img src={img} alt='Item' className={styles.itemImg}/>
  <div className={styles.productInfo}>
    {gender}<br/>
    {product}<br/>
    Color: {color}<br/>
    size: {size}
  </div>
  ${price}
  {quantity}
  </>
)}

export default CardItem;