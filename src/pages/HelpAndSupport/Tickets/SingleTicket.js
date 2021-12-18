import React from "react";
import "./singleticket.scss";
import avatar from "../../../assets/images/users/avatar-2.jpg";
import avatar2 from "../../../assets/images/users/avatar-3.jpg";

const SingleTicket = ({
  ticketId,
  ticketStatus,
  ticketTitle,
  ticketTime,
  ticketDescription,
  ticketAssignedTo,
  ticketRaisedBy,
  ticketPriority,
  ticketCategory,
  ticketDue,
}) => {
  const getStatusColor = () => {
    if (ticketStatus === "New") {
      return "#d9534f";
    } else if (ticketStatus === "Open") {
      return "#0371e3";
    } else {
      return "#5cb85c";
    }
  };

  return (
    <div className="single-ticket-container">
      <div className="single-ticket-header">
        <div className="single-ticket-status">
          <p>{ticketId}</p>
          <span className="status" style={{ background: getStatusColor() }}>
            {ticketStatus}
          </span>
        </div>
        <div className="single-ticket-title">
          <h6>
            {ticketTitle}
            {"  "}
            <span>{ticketTime}</span>
          </h6>
          <p>{ticketDescription}</p>
        </div>
      </div>
      <div className="single-ticket-footer">
        <div className="ticket-actions">
          <i className="mdi mdi-pin-outline"></i>
          <i className="mdi mdi-star-outline"></i>
          <i className="mdi mdi-message-minus-outline"></i>
        </div>
        <div className="ticket-assign">
          <img src={avatar} alt="" />
          <div>
            <p>Assigned To</p>
            <h6>{ticketAssignedTo}</h6>
          </div>
        </div>
        <div className="ticket-assign">
          <img src={avatar2} alt="" />
          <div>
            <p>Raised By</p>
            <h6>{ticketRaisedBy}</h6>
          </div>
        </div>
        <div>
          <p>Priority</p>
          <h6 style={{ color: ticketPriority === "Critical" && "red" }}>
            {ticketPriority}
          </h6>
        </div>
        <div>
          <p>Category</p>
          <h6>{ticketCategory}</h6>
        </div>
        <div>
          <p>Due</p>
          <h6>{ticketDue}</h6>
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
