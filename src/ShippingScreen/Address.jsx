import React from "react";
import styles from "./shippingScreen.module.css"
import Select from "./Select";
import { countries, cities, states } from "../countries";

const Address = ({trackState, shippingInfo, errors}) => {
  const dropDownMenu = [
    {array: countries, name: 'Country'},
    {array: cities, name: 'city'},
    {array: states, name: 'state',},
  ]
  return (
    <div className={`${styles.Details} ${styles.Address}`}>
      {dropDownMenu.map(item => {
        return (
          <div key={item.name} className={`${styles.Details}`}>
          {item.name}
          <Select
            Array={item.array}
            onChange={trackState}
            value={shippingInfo[item.name]}
            name={item.name}
            errorM={errors[item.name]}
            select={'Select'}
          />
          </div>
          )})}
    </div>
  )
}

export default Address;