import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import "./Displayans.css"
const Displayans = ({questions}) => {
  return (
    <div>
        {
            questions.answer.map((ans)=>(
                <div>
                <p>{ans.answerBody}</p>
                <div className='ansnewbtn'>
                    <div className='butonans'>
                    <button type='button' className='sharebtn'>Share</button>
                    <button type='button' className='sharebtn'>delete</button>
                <hr style={
                    {
                        "margin-top":" 48px",
                       "width": "403px"
                    }
                }></hr>
                    </div>
                    <div>
                <p>answered on {ans.answeredOn}</p>
                <div style={
                    {
                        "display":"flex",
                        "justifyContent":"space-between",
                        "width":"93px",
                        "alignItems":"center"
                    }
                }>
                <Link to={`/user/$(question.userID)`} >
                        <Avatar backgroundColor="Green" px="10px" py ="10px"color ="white"borderRadius="4px" fontSize="13px"cursor ="pointer">{questions.userposted.charAt(0).toUpperCase()}</Avatar>
                      </Link>
                        <div>
                            {ans.userAnswered}
                        </div>
                </div>
                    </div>
                </div>
                </div>
            ))

        }
    </div>
  )
}

export default Displayans
