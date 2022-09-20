import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SignInput from '../Components/SignInput';
import Submit from '../Components/Submit';


const Signup = () => {

  // using usenavigate hook...
  const navigate = useNavigate();

  // creating state from useState...
  const [value, setValue] = useState({ name: "", email: "", mobile: "", password: "", cpassword: "" });

  const signupSubmit = (e) => {

    // to stop reloading of page.
    e.preventDefault();

    const URL = "http://localhost:8080/";
    // using fetch api here
    fetch(`${URL}signup`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        name: value.name, email: value.email, mobile: value.mobile, password: value.password
      })
    })
      .then(res => {
        // Handle response 
        console.log('Response: ', res);
        // Redirecting to login page...
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch(err => {
        // Handle error 
        console.log('Error message: ', err);
      });
  }
  return (
    <div className="signup">
      <form onSubmit={signupSubmit} className='container-sm '>

        <h2 className='mb-4 user-select-none'>Superior CodeLabs Sign up</h2>
        <div className='form-inputs px-4'>
          <SignInput id="name" label="Name:" inputType="text" placeholder='Your Name' value={value} setValue={setValue} />

          <SignInput id="email" label="Email:" inputType="email" placeholder="Your Email" value={value} setValue={setValue} />

          <SignInput id="mobile" label="Mobile:" inputType="number" placeholder='Mobile Number' value={value} setValue={setValue} />

          <SignInput id="password" label="Password:" inputType="password" placeholder='Password' value={value} setValue={setValue} />

          <SignInput id="cpassword" label="Confirm Password:" inputType="password" placeholder='Confirm Password' value={value} setValue={setValue} />

          <Submit isDisable={value.password !== value.cpassword | (value.name).length < 3 | (value.email).length < 5 | (value.mobile).length !== 10 | (value.password).length < 8 | (value.password).length > 15} classesName='btn btn-dark mt-4' value='Sign Up' />
        </div>
      </form>
    </div>
  )
}

export default Signup;