import React, { useEffect } from "react";
import { Container } from "reactstrap";
import BackBtn from "../../BackBtn";
import SupportNav from "../SupportNav";
import SingleTicket from "./SingleTicket";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../../../store/supportTickets/actions/action";
import EmptySection from "../../../components/EmptySection/EmptySection";

const ClosedTickets = () => {
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

        {!tickets ?
        tickets
          .filter((filtered) => filtered.status === 0)
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
          })
          :<EmptySection/>}
      </Container>
    </div>
  );
};

export default ClosedTickets;
