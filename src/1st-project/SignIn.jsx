import React from 'react';
function SignIn() {
  return (
    <div>
  
        <div className="content">
          <div className="sign">Sign In</div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="Enter Email or username" />
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          </div>
          <button type="button" className="btn btn-primary">SIGN IN</button>

     <div className='continue'>or&nbsp;continue&nbsp;with</div>
    </div>
    </div>
       
  )
  
}
export default SignIn;
