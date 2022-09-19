import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInput from '../Components/SignInput';
import Submit from '../Components/Submit';

const Login = () => {
  const [value, setValue] = useState({ email: "", password: "" });

  // using usenavigate hook...
  const navigate = useNavigate();

  const loginSubmit = (e) => {

    // to stop reloading of page.
    e.preventDefault();

    const URL = "http://localhost:8080/";
    // using fetch api here
    fetch(`${URL}login`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        email: value.email, password: value.password
      })
    })
      .then(res => {
        // Handle response 
        if (res) {
          // Redirecting to login page...
          console.log("Password matched...");
          // After 2 seconds it will go to home page...
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
        else console.log("Invalid Password...");
      })
      .catch(err => {
        // Handle error 
        console.log('Error message: ', err);
      });
  }

  return (
    <div className='login-section py-5'>
      <form className='login container-sm' autoComplete='off' onSubmit={loginSubmit}>
        <h2 className='mb-5 user-select-none login-heading'>Superior CodeLabs Login</h2>

        <SignInput id="email" label="Email:" inputType="email" placeholder="Your Email" value={value} setValue={setValue} />

        <SignInput id="password" label="Password:" inputType="password" placeholder='Password' value={value} setValue={setValue} />

        <Submit isDisable={(value.email).length < 5 | (value.password).length < 8 | (value.password).length > 15} classesName='btn btn-dark mt-4' value='Login' />

      </form>
    </div>
  )
}

export default Login;