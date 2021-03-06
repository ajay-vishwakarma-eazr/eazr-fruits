import React, { useState, useEffect } from "react";
import "./singleticket.scss";
import profile from "../../../assets/images/nouser.png";
import { Modal, ModalBody } from "reactstrap";
import Comment from "../SupportComments/Comment";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const SingleTicket = ({
  ticketId,
  ticketImage,
  ticketStatus,
  ticketTitle,
  fullName,
  ticketTime,
  ticketDescription,
  ticketAssignedTo,
  ticketRaisedBy,
  businessProfilePicture,
  profile,
  // ticketPriority,
  // ticketCategory,
  // ticketDue,
}) => {
  const dispatch = useDispatch();
  const status = {
    0: "New",
    1: "Open",
    2: "Closed",
  };


  const getStatusColor = () => {
    if (ticketStatus === 2) {
      return "#d9534f";
    } else if (ticketStatus === 1) {
      return "#0371e3";
    } else if (ticketStatus === 0) {
      return "#5cb85c";
    }
  };

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

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

  // const handleComments=()=>{
  // showComment===true ? <SupportComments/> : setShowComment(false);
  // }

  // console.log(timeAgo(new Date(ticketTime).getTime()));
  return (
    <>
      <div className="single-ticket-container">
        <div className="single-ticket-header">
          <div className="single-ticket-status">
            <p> {ticketId}</p>
            <span className="status" style={{ background: getStatusColor() }}>
              {   ticketStatus == 0
                ? status[0]
                : ticketStatus == 2
                ? status[2]
                : ticketStatus == 1
                ? status[1]:"error"}
            </span>
          </div>
          <div className="single-ticket-title">
            <h6>
              {ticketTitle}
              <span>{" "}</span>
              <span>{timeAgo(new Date(ticketTime).getTime())}</span>
            </h6>
            <p>{ticketDescription}</p>
          </div>
        </div>
        <div className="single-ticket-footer">
          <div className="ticket-actions">
            <i className="mdi mdi-pin-outline"></i>
            <i className="mdi mdi-star-outline"></i>

            <Link to={`/support-comment/${ticketId}`}>
              <i className="mdi mdi-message-minus-outline" />
            </Link>
          </div>
          <div className="ticket-assign">
            <img src={ticketImage} alt="" />
            <div>
              <p>Assigned To</p>
              <h6>{fullName}</h6>
            </div>
          </div>
          <div className="ticket-assign">
            <img
              src={businessProfilePicture ? businessProfilePicture : profile}
              alt=""
            />
            <div>
              <p>Raised By</p>
              <h6>{ticketRaisedBy} </h6>
            </div>
          </div>
          {/* <div>
          <p>Priority</p>
          <h6 style={{ color: ticketPriority === "Critical" && "red" }}>
            {ticketPriority}
          </h6>
        </div>
        <div>
          <p>Category</p>
          <h6>{ticketCategory}</h6>
        </div> */}
          {/* <div>
          <p>Due</p>
          <h6>{ticketDue}</h6>
        </div> */}
        </div>
      </div>
      {/* <Comment id={ticketId}/>  */}
    </>
  );
};

export default SingleTicket;
