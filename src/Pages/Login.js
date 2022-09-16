import React, { useState } from 'react';
import SignInput from '../Components/SignInput';
import Submit from '../Components/Submit';

const Login = () => {
  const [value, setValue] = useState({ email: "", password: "" });

  return (
    <form className='login container-sm' autoComplete='off'>
      <h2 className='my-4'>Superior CodeLabs Login</h2>

      <SignInput id="email" label="Email:" inputType="email" placeholder="Your Email" value={value} setValue={setValue} />

      <SignInput id="password" label="Password:" inputType="password" placeholder='Password' value={value} setValue={setValue} />

      <Submit isDisable={(value.email).length < 5 | (value.password).length < 8 | (value.password).length > 15} classesName='btn btn-dark mt-4' value='Login'/>

    </form>
  )
}

export default Login;