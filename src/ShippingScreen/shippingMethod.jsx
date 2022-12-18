import React from "react";
import { shippingFees } from "../Data";

const ShippingMethod = ({shipFee, name}) => {
  const radioInputs = [
    {title: 'STANDARD', text: 'Delivery in 4-6 Business Days-Free ($40min.)'},
    {title: 'EXPRESS', text: `Delivery in 1-3 Business Days - $${shippingFees.EXPRESS}`}
  ]
  return(
    <>
  <h2>Shipping options</h2>
  {radioInputs.map((option => (
    <div key={option.title} style={{display:'flex', gap:'10px'}}>
      <input type="radio" value={shippingFees[option.title]} onClick={shipFee} id={option.title} name={name} required/>
      <label style={{display: 'flex', gap: '20px'}}>
        <div>{option.title}</div>
        <div>{option.text}</div>
        </label>
    </div>
  )))}
  </>
)}

export default ShippingMethod;