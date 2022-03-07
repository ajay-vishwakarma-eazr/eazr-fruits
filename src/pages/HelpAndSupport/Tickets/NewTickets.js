import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import BackBtn from "../../BackBtn";
import EmptySection from "../../../components/EmptySection/EmptySection";
import SupportNav from "../SupportNav";
import { useDispatch, useSelector } from "react-redux";
import profile from "../../../assets/images/nouser.png";
import SingleTicket from "./SingleTicket";
import { fetchNewTickets } from "../../../store/supportTickets/actions/action";
import ReactPaginate from "react-paginate";

const NewTickets = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const { tickets } = useSelector((state) => state.tickets);
  useEffect(() => {
    dispatch(fetchNewTickets([pageNumber]));
    
  }, [pageNumber]);

  const changePage = ({ selected }) => {
    const newSelect = selected + 1;
    setPageNumber(newSelect);
  }
  // console.log("fetchNewTickets", tickets?.data);
  return (
    <div className="page-content">
      <Container fluid>
        <BackBtn route="support-tickets" />
        <SupportNav />

        {tickets.data.length > 0 ? (
          tickets.data
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
                  fullName={ticket.admin.fullName}
                  businessProfilePicture={
                    ticket.partner.businessProfilePicture
                      ? ticket.partner.businessProfilePicture
                      : profile
                  }
                  ticketRaisedBy={ticket.partner.businessName}
                />
              );
            })
        ) : (
          <EmptySection />
        )}

        {tickets.data && tickets.data.length >0  ? (
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={tickets.pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default NewTickets;
