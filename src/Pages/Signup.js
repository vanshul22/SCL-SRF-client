import React from 'react';

const Signup = () => {
  return (
    <form className='signup container-sm'>
      <h2 className='my-4'>Superior CodeLabs Sign up</h2>

      <div className="mb-3 row">
        <label htmlFor="signupName" className="col-sm-2 col-form-label"> Name :</label>
        <div className="col-sm-10">
          <input type="text" class="form-control" id="signupName" placeholder='Your Name' />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="signupEmail" className="col-sm-2 col-form-label"> Email :</label>
        <div className="col-sm-10">
          <input type="email" class="form-control" id="signupEmail" placeholder="Your Email" />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="signupNumber" className="col-sm-2 col-form-label"> Mobile :</label>
        <div className="col-sm-10">
          <input type="number" class="form-control" id="signupNumber" placeholder="Mobile Number" />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="signupPassword" className="col-sm-2 col-form-label"> Password :</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="signupPassword" placeholder='Password'/>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="signupCPassword" className="col-sm-2 col-form-label"> Confirm Password :</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="signupCPassword" placeholder='Confirm Password'/>
        </div>
      </div>

      <button type="submit" className="btn btn-dark mt-4">Sign Up</button>

    </form>
  )
}

export default Signup;