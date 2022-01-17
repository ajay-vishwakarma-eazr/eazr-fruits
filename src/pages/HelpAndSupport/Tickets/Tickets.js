import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../../../store/supportTickets/actions/action";
import BackBtn from "../../BackBtn";
import SupportNav from "../SupportNav";
import SingleTicket from "./SingleTicket";
// import { fetchTickets } from "../../store/supportTickets/actions/action";

const Tickets = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);
  useEffect(() => {
    dispatch(fetchTickets());
  }, []);
  return (
    <div className="page-content">
      <Container fluid>
        <BackBtn route="#" />
        <SupportNav />

        {tickets.map((ticket, index) => {
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
              // ticketPriority={ticket.ticketPriority}
              // ticketCategory={ticket.ticketCategory}
              // ticketDue={ticket.ticketDue}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default Tickets;
