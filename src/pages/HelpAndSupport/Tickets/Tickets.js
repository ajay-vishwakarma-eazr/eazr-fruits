import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import BackBtn from "../../BackBtn";
import SupportNav from "../SupportNav";
import SingleTicket from "./SingleTicket";
import { useDispatch, useSelector } from "react-redux";

const Tickets = () => {
  debugger;

  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);
  useEffect(() => {
    debugger;
    // dispatch(fetchTickets());
    console.log(tickets);
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
              ticketId={ticket.ticketId}
              ticketImage={ticket?.file[0]}
              ticketStatus={ticket.ticketStatus}
              ticketTitle={ticket.ticketTitle}
              ticketTime={ticket.ticketTime}
              ticketDescription={ticket.ticketDescription}
              ticketAssignedTo={ticket.title}
              ticketRaisedBy={ticket.ticketRaisedBy}
              ticketPriority={ticket.ticketPriority}
              ticketCategory={ticket.ticketCategory}
              ticketDue={ticket.ticketDue}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default Tickets;
