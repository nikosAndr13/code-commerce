import React from "react";
import styles from "../../CustomerCard/CardItems/CardItem.module.css"

const SummaryItem = ({data}) => {
  const {price, quantity, product, color, size, img } = data;
  return (
    <>
      <div className={`${styles.SummaryItem}`}>
        <div>
          <img src={img} alt='Black Belt' className={`${styles.summaryImg}`}/>
        </div>
        <div className={`${styles.summaryInfo}`}>
          <div className={`${styles.product}`}><p>{product}</p></div>
          <p>Qty: {quantity}</p>
          <p>Color: {color}</p>
          <div className={`${styles.priceWrapper}`}>
            <p>Size: {size}</p>
            <p className={styles.price}>{price}</p>
          </div>
          </div>
      </div>
    </>
  )
}

export default SummaryItem;