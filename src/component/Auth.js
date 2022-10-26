import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo.png"
import "./Auth.css"
const Auth = () => {
  return (
    <div>
      <img className='a6' src={logo} alt="" />
      <div className='aaa'>
        <b><label className='a4' htmlFor="Email">Email</label></b><br />
        <input className='a1' type="text" placeholder='Email'/><br />
        <b><label className='a5' htmlFor="Password">Password</label></b><br />
        <input className='a2' type="text" placeholder='Password'/><br />
        <button className='a3'>Log-in</button>
      <h4 className='a7'>Don't have an account <Link to="/signup">sign-up</Link></h4>
      </div>
    </div>
  )
}

export default Auth
