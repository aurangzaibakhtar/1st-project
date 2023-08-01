import React from 'react';
function Register() {
  return (
    <>
        <div className="content">
          <div className="sign">Sign Up</div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="First Name" />
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Last Name" />
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="+92" />
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Enter Email or username" />
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          </div>
          <button type="button" className="btn btn-primary">REGISTER NOW</button>
          
     <div className='continue'>or&nbsp;continue&nbsp;with</div>
    </div>
    </>
  )
}

export default Register;
