import React from 'react'
import "./Questiondetails.css"
import Avatar from "./Avatar"
import { Params, useParams ,Link } from 'react-router-dom'
import upvotes from "../VOTE.png"
import downvotes from "../downvote.png"
import Displayans from './Displayans'
const Questiondetails = () => {
  const {id} = useParams();
  var questionlist = [{
    _id:"1",
    upvotes:3,
    downVotes:2,
    noofans:2,
    questiontitle:"What is a function?",
    questionbody:"It meant to be",
    questionTags:["java","node js","react js","mongo db"],
    userposted:"mano",
    userId:1,
    askedOn:"jan1",
    answer:[{
        answerBody:"Answer",
        userAnswered:"Kumar",
        answeredOn:"jan 2",
        userId: 1
    }]
},
{
    _id:"2",
    upvotes:3,
    downVotes:2,
    noofans:2,
    questiontitle:"What is a node?",
    questionbody:"It meant to be",
    questionTags:["java","node js","react js","mongo db"],
    userposted:"mano",
    userId:2,
    askedOn:"jan1",
    answer:[{
        answerBody:"Answer",
        userAnswered:"Kumar",
        answeredOn:"jan 2",
        userId: 2
    }]
},
{
    _id:"3",
    upvotes:3,
    downVotes:2,
    noofans:2,
    questiontitle:"What is a react?",
    questionbody:"It meant to be",
    questionTags:["java","node js","react js","mongo db"],
    userposted:"mano",
    userId:3,
    askedOn:"jan1",
    answer:[{
        answerBody:"Answer",
        userAnswered:"Kumar",
        answeredOn:"jan 2",
        userId: 3
    }]
}]
  return (
    <div>
      {
        questionlist.filter(questions=>questions._id===id).map((questions)=>(
          <div  key={questions._id}>
            <section className="quesiddetail">
              <div className='quesdet'>
                <h1 className='h1'>{questions.questiontitle}</h1>
                <div className="quesiddetail2"></div>
                <div className="quesvotes">
                  <div className="left">
                  <img src={upvotes} alt=" " width={18} height={12}/>
                  <p className='p'>{questions.upvotes - questions.downVotes}</p>
                  <img src={downvotes} alt="" width={18} height={12}/>
                  </div>
                  <div className='questag'>
                    <div className="para">
                  <p className='quesbody'>{questions.questionbody}</p>
                    </div>
                    <div className="tagss">
                    {
                      questions.questionTags.map((tag) =>(
                          <p key={tag}>{tag}</p>
                      ))
                    }
                    </div>
                  </div>
                </div>
                <div style={{"width":"100%"}}>
                  <div className='userques'>
                    <div className='btn-ans'>
                      <button type='button'>Share</button>
                      <button type='button'>Delete</button>
                    </div>
                    <div className="containnameasked">

                    <div className='ondatename'>
                      <p>asked {questions.askedOn}</p>
                    </div>
                    <div className="namecontain">
                      
                    <div className="name">
                  <Link to={`/user/$(question.userID)`} >
                    <Avatar backgroundColor="orange" px="10px" py ="10px"color ="black"borderRadius="0px" fontSize="13px"cursor ="pointer">{questions.userposted.charAt(0).toUpperCase()}</Avatar>
                  </Link>
                    </div>
                  <div className="name1">
                    {questions.userposted}
                  </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
            {
              questions.noofans !==0 &&(
                  <h3>{questions.noofans} answers</h3>
              )
            }
            <Displayans key={questions._id} questions={questions}/>
            <h3>Your Answer</h3>
            <form >
              <textarea name="" id="" cols="80" rows="10"></textarea><br />
              <input type="submit" className='post-class-btn'  value='post your ans'/>
            </form>
            <p>
              Browse other question tagged
              {
                questions.questionTags.map((tag)=>(
                  <Link to = '/Tag' style={
                    {
                      "textDecoration":"none"
                    }
                  }>{tag}</Link>
                )
                )
              }
              <br></br>
              or
              {
                <Link to ='/AskQuestion' style ={{"textDecoration":"none","color": "blue"}}>Ask your own question</Link>
              }
            </p>
            </section>
          </div>
          
        ))

      }
    </div>
  )
}

export default Questiondetails
