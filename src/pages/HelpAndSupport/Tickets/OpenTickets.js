import React, { useEffect } from "react";
import { Container } from "reactstrap";
import BackBtn from "../../BackBtn";
import SupportNav from "../SupportNav";
import { useDispatch, useSelector } from "react-redux";
import SingleTicket from "./SingleTicket";
import { fetchTickets } from "../../../store/supportTickets/actions/action";

const OpenTickets = () => {
  // const tickets = [
  //   {
  //     ticketId: "#12396543",
  //     ticketStatus: "Open",
  //     ticketTitle: "I cannot upload .PNG image onto my widget",
  //     ticketTime: "14 minutes ago",
  //     ticketDescription:
  //       "I cannot upload .PNG image onto your widget, does your widget not accept .PNG image?",
  //     ticketAssignedTo: "Govind Sharma",
  //     ticketRaisedBy: "Siddhesh Bakshi",
  //     ticketPriority: "Low",
  //     ticketCategory: "Customer Support",
  //     ticketDue: "In 1 Day",
  //   },
  //   {
  //     ticketId: "#12396543",
  //     ticketStatus: "Open",
  //     ticketTitle: "I cannot upload .PNG image onto my widget",
  //     ticketTime: "14 minutes ago",
  //     ticketDescription:
  //       "I cannot upload .PNG image onto your widget, does your widget not accept .PNG image?",
  //     ticketAssignedTo: "Govind Sharma",
  //     ticketRaisedBy: "Siddhesh Bakshi",
  //     ticketPriority: "Medium",
  //     ticketCategory: "Customer Support",
  //     ticketDue: "In 1 Day",
  //   },
  //   {
  //     ticketId: "#12396543",
  //     ticketStatus: "Open",
  //     ticketTitle: "I cannot upload .PNG image onto my widget",
  //     ticketTime: "14 minutes ago",
  //     ticketDescription:
  //       "I cannot upload .PNG image onto your widget, does your widget not accept .PNG image?",
  //     ticketAssignedTo: "Govind Sharma",
  //     ticketRaisedBy: "Siddhesh Bakshi",
  //     ticketPriority: "Critical",
  //     ticketCategory: "Billing",
  //     ticketDue: "In 1 Day",
  //   },
  //   {
  //     ticketId: "#12396543",
  //     ticketStatus: "Open",
  //     ticketTitle: "I cannot upload .PNG image onto my widget",
  //     ticketTime: "14 minutes ago",
  //     ticketDescription:
  //       "I cannot upload .PNG image onto your widget, does your widget not accept .PNG image?",
  //     ticketAssignedTo: "Govind Sharma",
  //     ticketRaisedBy: "Siddhesh Bakshi",
  //     ticketPriority: "Low",
  //     ticketCategory: "Customer Support",
  //     ticketDue: "In 1 Day",
  //   },
  // ];

  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);
  useEffect(() => {
    dispatch(fetchTickets());
    console.log(tickets);
  }, []);

  return (
    <div className="page-content">
      <Container fluid>
        <BackBtn route="support-tickets" />
        <SupportNav />
        {tickets
          .filter((filtered) => filtered.status === 2)
          .map((ticket, index) => {
            return (
              <SingleTicket
                key={index}
                ticketId={ticket.id}
                ticketImage={ticket?.file[0]}
                ticketStatus={ticket.status}
                ticketTitle={ticket.title}
                ticketTime={ticket.createdTimestamp}
                ticketDescription={ticket.description}
                ticketAssignedTo={ticket.title}
                ticketRaisedBy={ticket.partner.businessName}
              />
            );
          })}
        <h1 style={{ fontSize: "18px", textAlign: "center" }}>No data found</h1>
      </Container>
    </div>
  );
};

export default OpenTickets;
