import React from "react";
import Select from '../ShippingScreen/Select'
import {Months, Years} from '../Data';

const Expiry = ({handleChange, handleBlur}) => {
  const dates = [
    {Array: Months, id:'Month',},
    {Array: Years, id:'Year',},
  ]
  return (
  <>
    {dates.map(input => {
          return (
           <Select
             Array={input.Array}
             key={input.id}
             onChange={handleChange}
             name={input.id}
             select={input.id}
             onBlur={handleBlur}
           />
        )
    })}
  </>
)}

export default Expiry