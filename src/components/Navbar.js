import React from 'react';
import logo from  "../image/logo.png"
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
     <img src={ logo}alt=''/>
     <ul className='nav-menu'>
<Link to='/Signin'>
    <li>SignIn</li>
</Link>
<Link to='/SignUp'>
    <li>SignUp</li>
</Link>
<Link to='/Profile'>
    <li>Profile</li>
</Link>
     </ul>
    </div>
  )
}
