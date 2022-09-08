import React, { useState } from 'react';
import "./Inputs.css"

const Inputs = (props) => {
  const [value, setValue] = useState({ name: "", email: "", number: "", cource: "" });

  const changingValue = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
    // console.log(value);
  }


  return (
    <>
      <div className='input-container'>
        <input type={props.type} id={props.id} className='text-input' value={value.id} onChange={changingValue} autoComplete="off" placeholder={props.placeholder} />
        <label className='label' htmlFor={props.id}>{props.label}</label>
      </div>
    </>
  )
}

export default Inputs;