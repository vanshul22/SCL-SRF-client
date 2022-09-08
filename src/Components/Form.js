import React from 'react';
import Inputs from './Inputs';
import Submit from './Submit';
import "./Form.css";

const Form = () => {
  return (
    <div className='form-fields'>
      <Inputs type="text" id="name" label="Name" placeholder="Enter your name"/>
      <Inputs type="email" id="email" label="Email" placeholder="Enter your email"/>
      <Inputs type="number" id="number" label="Number" placeholder="Enter your mobile number"/>
      <Inputs type="text" id="cource" label="Cource" placeholder="Enter your cource name"/>
      <Submit />
    </div>
  )
}

export default Form;