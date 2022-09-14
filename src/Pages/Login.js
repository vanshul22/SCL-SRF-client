import React from 'react'

const Login = () => {
  return (
    <form className='login container-sm'>
      <h2 className='my-4'>Superior CodeLabs Login</h2>

      <div className="mb-3 row">
        <label htmlFor="inputEmail" className="col-sm-2 col-form-label"> Email :</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com" />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label"> Password :</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" placeholder='Password' />
        </div>
      </div>

      <button type="submit" className="btn btn-dark mt-4">Login</button>

    </form>
  )
}

export default Login;