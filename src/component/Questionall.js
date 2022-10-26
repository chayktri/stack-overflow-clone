  import React from "react";
import { Link } from "react-router-dom";
import "./Questionall.css";

const Questionall = ({ questions }) => {
  return (
    <>
      <div className="displayanscontainer">
        <div className="ques-contain">
          {/* {console.log(questions.votes)} */}
          <p>{questions.votes}</p>
          <p>Votes</p>
        </div>
        <div className="noofanscontain">
          <p>{questions.noofans}</p>
          <p>answers</p>
        </div>
        <div className="container-details">
          <Link className="detaillink" to={`/Question/${questions._id}`}>
            {questions.questiontitle}
          </Link>
          <div className="display-tag-time">
            <div className="display-tags">
              {questions.questionTags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </div>
            <div className="display-time">
            <p>
              asked {questions.askedOn} {questions.userposted}
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questionall;
