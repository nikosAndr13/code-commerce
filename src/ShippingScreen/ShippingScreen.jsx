import React from "react";
import Input from "../ShippingScreen/ShipInputs"
import styles from "./shippingScreen.module.css"
import style from "../SignupLogin/Inputs/Inputs.module.css"
import { cities, countries, states } from "../countries";
import ShippingMethod from "./shippingMethod"

class ShippingScreen extends React.Component {
  render() {
    return (
    <div className={`${styles.shippingScreenWrapper}`}>
    <div className={`${styles.title}`}>SHIPPING INFORMATION</div>
    <form>
      <div className={`${styles.Details}`}>
        <p>Address Title</p>
        <Input />
      </div>
      <div className={`${styles.Details}`}>
        <p>Name-Surname</p>
        <Input/>
      </div>
      <div className={`${styles.Details}`}>
        <p>Your Address</p>
        <div style={{width:'85%'}}><Input/></div>
      </div>
      <div className={`${styles.Details}`}>
        <p>Zip Code</p>
        <div className={`${styles.Details} ${styles.Address}`}>
          <Input/>
          Country 
          <select className={`${style.inputsWrapper} ${styles.inputsBorder}`}>
            <option disabled selected>Select</option>
            {countries.map(country => (
              <option key={country}>{country}</option>
            ))}
          </select>
          City 
          <select className={`${style.inputsWrapper} ${styles.inputsBorder}`}>
            <option disabled selected>Select</option>
            {cities.map(city => (
              <option key={city}>{city}</option>
            ))}
          </select>
          State 
          <select className={`${style.inputsWrapper} ${styles.inputsBorder}`}>
            <option disabled selected>Select</option>
            {states.map(item => (
              <option key={item.acronym}>{item.state}</option>
            ))}
          </select>
        </div>
      </div>
      <div className={`${styles.Details}`}>
        <p>Phone Number</p>
        <Input/>
      </div>
      <div className={`${styles.Details}`}>
        <p>2nd Number <small>(optional)</small></p>
        <Input/>
      </div>
    </form>
      <ShippingMethod/>
    </div>
  )}
}

export default ShippingScreen;