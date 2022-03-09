import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import BackBtn from "../../BackBtn";
import SupportNav from "../SupportNav";
import { useDispatch, useSelector } from "react-redux";
import SingleTicket from "./SingleTicket";
import profile from "../../../assets/images/nouser.png";
import { fetchOpenTickets } from "../../../store/supportTickets/actions/action";
import EmptySection from "../../../components/EmptySection/EmptySection";
import ReactPaginate from "react-paginate";

const OpenTickets = () => {
  


  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const { tickets } = useSelector((state) => state.tickets);
  useEffect(() => {
    dispatch(fetchOpenTickets(pageNumber));
    
  }, [pageNumber]);

  const changePage = ({ selected }) => {
    const newSelect = selected + 1;
    setPageNumber(newSelect);
  };

  console.log("fetchOpenTickets", tickets.data);
  return (
    <div className="page-content">
      <Container fluid>
        <BackBtn route="support-tickets" />
        <SupportNav />
        {tickets.data?.length > 0 ? (
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

        {tickets?.data && tickets.data.length >0 ? (
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

export default OpenTickets;



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
