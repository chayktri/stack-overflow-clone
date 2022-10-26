import React from 'react'
import "./AskQuestion.css"

const AskQuestion = () => {
  return (
    <div className='ask-question'>
        <div className="ask-ques-contain">
            <h1>Ask a Public Question</h1>
            <form action="">
                <div className="ask-form-contain">
                    <label htmlFor="Ask-ques-title">
                        <h4>Title</h4>
                        <p>Be Specific and imagine you are asking a question to another person</p>
                        <input type="text" name='questiontitle' id='ask-ques-title'/>
                    </label>
                    <label htmlFor="Ask-ques-body">
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer your question</p>
                        <textarea type="text" name='questiontitle' cols="30"rows="10" id='ask-ques-body'/>
                    </label>
                    <label htmlFor="Ask-ques-tags">
                        <h4>Tags</h4>
                        <p>Add upto 5 tags to describe what the question is about</p>
                        <input type="text" name='questiontitle' id='ask-ques-tags'/>
                    </label>
                </div>
                <input type="submit" value="Review your question" className="review-btn" />
            </form>
        </div>
    </div>
  )
}

export default AskQuestion
