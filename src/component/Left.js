import React from 'react'
import "./Left.css"
import { Link } from 'react-router-dom'
const Left = () => {
  return (
    <div>

      <div className='x'>
        <div className="home-left">
        <Link to="/" activeClassName="active" className='x1'>Home</Link>
        </div>
        <h1 className='x2'>PUBLIC</h1>
        <ul>
          <li className='leftli'>
        <Link  activeClassName="active" to="/Question" className='x3'>Questions</Link>
        <Link  activeClassName="active" to="/Tags" className='x3'>Tags</Link>
        <Link  activeClassName="active" to="/users" className='x3'>Users</Link>

          </li>
        </ul>
      </div>
    </div>
 
    
  )
}

export default Left
