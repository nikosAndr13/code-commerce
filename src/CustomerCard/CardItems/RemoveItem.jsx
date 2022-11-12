import React from "react";
import X from "../../assets/x-solid.svg";
import styles from "./CardItem.module.css"

const removeItem = ({onClick, name}) => {
  return (
    <>
        <img src={X} alt='X' className={`${styles.X} ${styles.imgWidth}`} onClick={onClick} name={name}/>
    </>
  )}

export default removeItem;