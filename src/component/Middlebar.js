import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Middlebar.css"
import { Link , useNavigate } from 'react-router-dom'
import Questionlist from './Questionlist'

const Middlebar = () => {

    const location = useLocation();
    const history = useNavigate();
    const user =1;
    var questionlist = [{
        _id:1,
        votes:3,
        // downVotes:2,
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
            userId: 2
        }]
    },
    {
        _id:2,
        votes:3,
        // downVotes:2,
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
        _id:3,
        votes:3,
        // downVotes:2,
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
            userId: 2
        }]
    }]
const redirect = ()=>{
    if(user==null){
        alert("login or signup to ask a question")
        history("/auth")
    }
    else{
        history("/AskQuestion")
    }
}

  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
            location.pathname==="/"?<h1>Top Questions</h1>:<h1>All Question</h1>
        }
        <button onClick={redirect} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
            questionlist==null?
            <h1>Loading...</h1>:
            <>
            <p>
                {questionlist.length} questions
            </p>
                <Questionlist questionlist={questionlist}/>
            </>
        }
      </div>
    </div>
  )
}

export default Middlebar;
