import React from 'react'
import logo from  '../image/logo.png'
import './SignUp.css';
import { Link } from 'react-router-dom';
export default function SignUp() {
  return (
    <div className='SignUp'>
 <div className='form-container'>
    <div className='form'>
    <img  classname='SignUpLogo' src={logo}alt=''/>
    <p className='loginPara'>
        Sign Up to see photo and videos <br/> from your friends
    </p>
    <div>
        <input type="email" name="email" id="email"
         placeholder="Email"/>
    </div>
    <div>
        <input type="text" name="name" id="name"
         placeholder="Full Name"/>
    </div>
    <div>
        <input type="text" name="username" id="username"
         placeholder="Username"/>
    </div>
    <div>
        <input type="Password" name="Password" id="Password"
         placeholder="Password"/>
    </div>

    <p className="loginPara" style={{fontSize:"12px",margin:"3px 0px"}}>
        By signing up, you agree to out Terms,<br/>privacy policy and cookies policy.
    </p>
    <input type="Submit" id='submit-btn' value='Sign Up'/>
    </div>
   <div className='form2'>
    Already have a account?
    <Link to="/signin">
    <span style={{color:"blue",cursor:"pointer"}}>Sign In</span>
    </Link>
  
   </div>
 </div>

    </div>
  )
}
