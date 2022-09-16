import React, { useState } from 'react';
import Signinput from '../Components/Signinput';
import Submit from '../Components/Submit';

const Login = () => {
  const [value, setValue] = useState({ email: "", password: "" });

  return (
    <form className='login container-sm' autoComplete='off'>
      <h2 className='my-4'>Superior CodeLabs Login</h2>

      <Signinput id="email" label="Email:" inputType="email" placeholder="Your Email" value={value} setValue={setValue} />

      <Signinput id="password" label="Password:" inputType="password" placeholder='Password' value={value} setValue={setValue} />

      <Submit isDisable={(value.email).length < 5 | (value.password).length < 8 | (value.password).length > 15} classesName='btn btn-dark mt-4' value='Login'/>

    </form>
  )
}

export default Login;