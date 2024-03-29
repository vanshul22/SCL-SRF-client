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
      .then(async res => {
        // Getting Response here
        let response_json = await res.json();
        // Handle response 
        if (response_json.isLoggedIn === "password matched") {
          console.log(response_json.isLoggedIn);
          alert("Logged in successfully");
          navigate("/welcome");
        }
        else if (response_json.isLoggedIn === "invalid password") {
          console.log(response_json.isLoggedIn);
          alert("Invalid password");
        }
        else if (response_json.isLoggedIn === "invalid email") {
          console.log(response_json.isLoggedIn);
          alert("Email does not matched from any of the registered mail.");
        }
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