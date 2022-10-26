import React from 'react'
import "./Home.css"
import Left from './Left'
import Middlebar from './Middlebar'
import Right from './Right'
const Home = () => {
  return (
    <>
    <div className='hme'>
      <Left/>
      <Middlebar/>
      <Right/>
    </div>
    </>
  )
}

export default Home
