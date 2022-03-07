import avatar2 from "../../../assets/images/users/avatar-3.jpg";
import React from "react";
import { Container } from "reactstrap";
import BackBtn from "../../BackBtn";
const Comments = ({ comment }) => {
  const timeAgo = (prevDate) => {
    const diff = Number(new Date()) - prevDate;
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;
    switch (true) {
      case diff < minute:
        const seconds = Math.round(diff / 1000);
        return `${seconds} ${seconds > 1 ? "seconds" : "second"} ago`;
      case diff < hour:
        return Math.round(diff / minute) + " minutes ago";
      case diff < day:
        return Math.round(diff / hour) + " hours ago";
      case diff < month:
        return Math.round(diff / day) + " days ago";
      case diff < year:
        return Math.round(diff / month) + " months ago";
      case diff > year:
        return Math.round(diff / year) + " years ago";
      default:
        return "";
    }
  };
  // console.log("comment", comment.partner.businessName);

  return (
    <div>
      <div className="single-ticket-container">
        <div className="single-ticket-header">
          <div className="single-ticket-status"></div>
          <p style={{ marginRight: "13px" }}>
            <b>comment</b>
          </p>

          <div className="single-ticket-title">
            <h6>
              <small>
                {"  "}
                <i class="fas fa-clock"></i>&nbsp;
                <span>
                  {timeAgo(new Date(comment.createdTimestamp).getTime())}
                </span>
              </small>
            </h6>
            <p>{comment.comment}</p>
          </div>
        </div>
        <div className="single-ticket-footer">
          <div className="ticket-assign">
            <img src={<i class="fas fa-user-circle"></i>} alt="" />
            <div>
              <p>Raised By</p>
              <h6>{comment.partner?.businessName} </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
