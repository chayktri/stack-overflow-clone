import React from 'react'
import "./Right.css"
const Right = () => {

const tags=["c","css","express","firebase","html","react","python","Mongo db","django"]
  return (
    <div>
    <div className='yz'>
    <div className='y'>
        <div className='y1'>
            <div className='y11'>
                <h5 className='r1'>The Overflow Block</h5>
            </div>
            <div className='y12'>
                <p>Observability is key to future software</p>
                <p>Podcast 374:How valuable is your screen name</p>
            </div>
        </div>
        <div className='y2'>
            <div className='y21'><h5 className='r2'>Featured on Meta</h5></div>
            <div className='y22'>
                <p>Review queue workflows -Final release....</p>
                <p>Please welcome valued associate:#958</p>
                <p>Outdated Answers:accepted answer is now pinned on stack overflow</p>
            </div>
        </div>
        <div className='y3'>
            <div className='y31'><h5 className='r3'>Hot Meta Post</h5></div>
            <div className='y32'>
                <p>why spam flag denied,yet question is marked spam?</p>
                <p>What is best course of action </p>
                <p>is link "how to ask" a useful comment</p>
            </div>
        </div>
    </div>
    <div className='z'>
        <div className='m1'><h3>Watched Tags</h3></div>
        <hr></hr>
        <div className='m2'>
            {
                tags.map((tag)=>{
                    return <p>{tag}</p>
                })
            }
        </div>
    </div>
    </div>
    </div>

  )
}

export default Right
