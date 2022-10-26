import React from 'react'
import Navbar from './component/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from "./component/Home"
import Auth from './component/Auth'
import Signup from './component/Signup'
import Left from './component/Left'
import Right from './component/Right'
import Middlebar from './component/Middlebar'
import Question from './component/Question'
import AskQuestion from './component/AskQuestion'
// import Questiondetails from './component/Questiondetails'
import Displayquestions from './component/Displayquestions'

const App = () => {
  return (
    <>
      {/* <h1>stack overflow</h1> */}
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/> }/>
      <Route exact path='/left' element={<Left/>}/>
      <Route exact path='/Auth' element={<Auth/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/Right' element={<Right/>}/>
      <Route exact path='/middle' element={<Middlebar/>}/>
      <Route exact path='/Question' element={<Question/>}/>
      <Route exact path='/AskQuestion' element={<AskQuestion/>}/>
      <Route exact path='/Question/:id' element={<Displayquestions/>}/>
    </Routes>
    </>
  )
}

export default App
