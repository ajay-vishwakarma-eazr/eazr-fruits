import React from "react";
import { Container } from "reactstrap";
import BackBtn from "../../BackBtn";
import SupportNav from "../SupportNav";
import SingleTicket from "./SingleTicket";

const NewTickets = () => {
  const tickets = [
    {
      ticketId: "#12396543",
      ticketStatus: "New",
      ticketTitle: "I cannot upload .PNG image onto my widget",
      ticketTime: "14 minutes ago",
      ticketDescription:
        "I cannot upload .PNG image onto your widget, does your widget not accept .PNG image?",
      ticketAssignedTo: "Govind Sharma",
      ticketRaisedBy: "Siddhesh Bakshi",
      ticketPriority: "Low",
      ticketCategory: "Customer Support",
      ticketDue: "In 1 Day",
    },
    {
      ticketId: "#12396543",
      ticketStatus: "New",
      ticketTitle: "I cannot upload .PNG image onto my widget",
      ticketTime: "14 minutes ago",
      ticketDescription:
        "I cannot upload .PNG image onto your widget, does your widget not accept .PNG image?",
      ticketAssignedTo: "Govind Sharma",
      ticketRaisedBy: "Siddhesh Bakshi",
      ticketPriority: "Medium",
      ticketCategory: "Customer Support",
      ticketDue: "In 1 Day",
    },
    {
      ticketId: "#12396543",
      ticketStatus: "New",
      ticketTitle: "I cannot upload .PNG image onto my widget",
      ticketTime: "14 minutes ago",
      ticketDescription:
        "I cannot upload .PNG image onto your widget, does your widget not accept .PNG image?",
      ticketAssignedTo: "Govind Sharma",
      ticketRaisedBy: "Siddhesh Bakshi",
      ticketPriority: "Critical",
      ticketCategory: "Billing",
      ticketDue: "In 1 Day",
    },
    {
      ticketId: "#12396543",
      ticketStatus: "New",
      ticketTitle: "I cannot upload .PNG image onto my widget",
      ticketTime: "14 minutes ago",
      ticketDescription:
        "I cannot upload .PNG image onto your widget, does your widget not accept .PNG image?",
      ticketAssignedTo: "Govind Sharma",
      ticketRaisedBy: "Siddhesh Bakshi",
      ticketPriority: "Low",
      ticketCategory: "Customer Support",
      ticketDue: "In 1 Day",
    },
  ];

  return (
    <div className="page-content">
      <Container fluid>
        <BackBtn route="support-tickets" />
        <SupportNav />

        {tickets.map((ticket, index) => {
          return (
            <SingleTicket key = {index}
              ticketId ={ticket.ticketId}
              ticketStatus ={ticket.ticketStatus}
              ticketTitle ={ticket.ticketTitle}
              ticketTime ={ticket.ticketTime}
              ticketDescription ={ticket.ticketDescription}
              ticketAssignedTo ={ticket.ticketAssignedTo}
              ticketRaisedBy ={ticket.ticketRaisedBy}
              ticketPriority ={ticket.ticketPriority}
              ticketCategory ={ticket.ticketCategory}
              ticketDue ={ticket.ticketDue}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default NewTickets;
