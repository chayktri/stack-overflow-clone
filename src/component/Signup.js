import React from 'react'
import { Link } from 'react-router-dom';
import "./Signup.css";  

const Signup = () => {
  return (
    <div className='contain'>
        <div className="contain1">
            <h2><b>Join the Stack overflow community</b></h2>
            <p>
                Get unstuck - ask a question <br/>
                Unlock new priveliges like voting and commenting <br/>
                save your favorite tags,filter and jobs <br/>
                Earn reputation and badges <br/>
            </p>
            </div>
        <div className="contain2">

        <b><label className='  b1  ' htmlFor="Display name">Display name</label></b>
        <input className=' b2   ' type="text" placeholder='Display name'/><br />
      <b><label className=' b3   ' htmlFor="Email">Email</label></b>
        <input className='  b4  ' type="text" placeholder='Email'/><br />
        <b><label className=' b5   ' htmlFor="Password">Password</label></b>
        <input className='   b6 ' type="text" placeholder='Password'/><br />
        <p className='b7'>Password must contain atleast eight characters including one lettter and number</p>
        <input className='b8' type="checkbox" />
        <b><p className='b9'>otp  in to recieve timely updates ,invitation , announcements and digests</p></b>
        <button className=' b10   '>sign-up</button><br />
        <p className='b11'>by clicking sign-up you agree to our terms and conditions mentioned above</p>
        <h4 style={
            {
                "textAlign":"center",
                "marginTop":"0px"
            }
        }>Already have an account? <Link to="/Auth">Login</Link></h4>
        </div>
    </div>
  )
}

export default Signup
