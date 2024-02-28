import React, { useState } from 'react'
import   "../Components/loginSignup.css";



import user_icon from '../Components/Assets/person.png'
import email_icon from '../Components/Assets/email.png'
import password_icon from '../Components/Assets/password.png'







const LoginSignup = () => {

  const [action , setaction] = useState ("Login")
  return (
    <>
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
      <div className="inputs">
         {action==="Login"?<div> </div>:<div className="input">
            <img src={user_icon}  />
            <input type="text" placeholder="Name" />
        </div> } 
         
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email ID" />
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">forgot password <span>click here!</span></div>}
      <div className="submit-container">
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setaction("Sign Up")}} >Sign Up</div>
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setaction("Login")}} >Login</div>

      </div>
    </div>
    </>
  )
}

export default LoginSignup
