import React, { useEffect } from "react";
import { Container } from "reactstrap";
import BackBtn from "../../BackBtn";
import SupportNav from "../SupportNav";
import { useDispatch, useSelector } from "react-redux";
import SingleTicket from "./SingleTicket";
import { fetchTickets } from "../../../store/supportTickets/actions/action";

const NewTickets = () => {
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
          .filter((filtered) => filtered.status === 1)
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

export default NewTickets;
