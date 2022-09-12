import React from 'react';
import "./Inputs.css";

const Inputs = (props) => {

  const changingValue = (e) => {

    // Setting value of each element from here by useState.
    props.setValue({ ...props.value, [e.target.id]: e.target.value });

    // If statement for holding label upside of input.
    if (e.target.value !== "") {
      e.target.nextElementSibling.classList.add("filled");
    } else {
      e.target.nextElementSibling.classList.remove("filled");
    }
  }

  return (
    <div className='input-container'>
      <input type={props.type} id={props.id} className='text-input' value={props.value.id} onChange={changingValue} autoComplete="off" placeholder={props.placeholder} required minLength={3} />
      <label className='label' htmlFor={props.id}>{props.label}</label>
    </div>
  )
}

export default Inputs;