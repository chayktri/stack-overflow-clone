import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo.png"
import "./Navbar.css"
import Avatar from './Avatar'
const Navbar = () => {

  const user = null;

  return (
    <>
    <div className='navbar'>
        <Link to= '/' className='nav'>
            <img className='img' src={logo}/>
        </Link>
        <div className='a'>
        <ul>
            <li>
                <button href="" className='nav-item'>about</button>
                <button href="" className='nav-item'>product</button>
                <button href="" className='nav-item'>for team</button>
            </li>
        </ul>
        </div>
        <input className='b' type="text" placeholder='search'/>
        {user===null?
        <Link to="/Auth" className='btn'>Login</Link>:<>
        <Avatar backgroundColor="blue" py="8px" px="7px" borderRadius="50%" color="white" fontSize="20px">N</Avatar>
        <button className='btn'>Logout</button>
        </>}
    </div>
    </>
  )
}

export default Navbar
