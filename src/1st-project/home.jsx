import React, { useState } from "react";
import Register from "./register";
// import shampi from "../src/shampi.jpg";
import SignIn from "./SignIn";

function Home() {
  const [value, setValue] = useState("SignIn");
  return (
    <div>
    
    <div className='shamp'>Aurangzeb</div>
    <div style={{width:"70%",margin:"0 auto",display:"flex", justifyContent:"space-around"}}>
    <div>
        <h1>Sign In To</h1>
        <h5>Lorem, ipsum dolor sit</h5>
        <p>
          If you dont have an account rejister
          <br />
          you can &nbsp;
          {value === "SignIn" ? 
        <button className="goli"
          onClick={() => {
            setValue ("Register")
          }}
        >
         Register Now
        </button>
       : 
        <button className="goli"
          onClick={() => {
            setValue ("SignIn")
          }}
        >
          Sign in 
        </button>
      }
        </p>
       
        <figure className="">
          {/* <img src={shampi} alt="" className="" /> */}
        </figure>
      </div>
      
      
      {value === "SignIn" ? <SignIn /> : <Register />}
    </div>
    </div>

  );
}
export default Home;
