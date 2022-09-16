import React, { useState } from 'react';
import Inputs from './Inputs';
import Submit from './Submit';
import "./Form.css";

const Form = () => {

  // Defining use state here...
  const [value, setValue] = useState({ name: "", email: "", mobile: "", cource: "" });

  // using OnSubmit handler here
  const submitHandler = (e) => {

    // to stop reloading of page.
    // e.preventDefault();

    const URL = "http://localhost:8080/";
    // using fetch api here
    fetch(`${URL}registeruser`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        name: value.name, email: value.email, mobile: value.mobile, cource: value.cource
      })
    })
      .then(res => {
        // Handle response 
        console.log('Response: ', res);
      })
      .catch(err => {
        // Handle error 
        console.log('Error message: ', err);
      });
  }

  return (
    <form onSubmit={submitHandler}>

      <div className='form-fields'>

        <Inputs type="text" id="name" label="Name" placeholder="Enter your name" value={value} setValue={setValue} />
        <Inputs type="email" id="email" label="Email" placeholder="Enter your email" value={value} setValue={setValue} />
        <Inputs type="number" id="mobile" label="Number" placeholder="Enter your mobile number" value={value} setValue={setValue} />
        <Inputs type="text" id="cource" label="Cource" placeholder="Enter your cource name" value={value} setValue={setValue} />

      </div>

      <div className="center">
        <Submit classesName='form-submit' value='Submit' isDisable="" />
      </div>
    </form>
  )
}

export default Form;