import React, { useState, useEffect } from "react";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import { Table, Container } from "reactstrap";
import BackBtn from "../../../../pages/BackBtn"
import ReactPaginate from "react-paginate";
import {
  fetchSettlements,
  fetchSettlementsById,
} from "../../../../store/settlement/actions/action";
import { useDispatch, useSelector } from "react-redux";
import "./table.scss";

const Settlements = (props) => {
  const PassedText = props.text;

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  let today = new Date();
  const { settlements } = useSelector((state) => state.settlement);
  let Newdate =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSettlements());
    console.log(partner);
  }, []);

  const { partner } = useSelector((state) => state.businessPartner);

  

  return (
    <div className="table-rep-plugin">
      {/* <BackBtn route="total-partner" /> */}
      <div className="table-responsive mb-0" data-pattern="priority-columns">
        <Container fluid>
          {/* <BackBtn route="total-partner" /> */}
          <div style={{ paddingTop: "7rem" }}>
            <BackBtn route="total-partner" />
          </div>
          <Table
            center
            striped
            // bordered
            responsive
            className="settlement-table"
          >
            <TableHeading />

            {settlements
              // .filter((settlement) => {
              //   if (PassedText !== "") {
              //     return Object.values(settlement)
              //       .join(" ")
              //       .toLowerCase()
              //       .includes(PassedText.toLowerCase());
              //   } else {
              //     return settlement;
              //   }
              // })

              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((settlement) =>
                settlement.businessPartner == partner.businessPartner ? (
                  <TableRow
                    setttlementId={settlement.id}
                    amount={settlement.amount}
                    partnerAmount={settlement.partnerAmount}
                    partnerId={settlement.partnerId}
                    upi={settlement.partner.upi}
                    gst={settlement.gst}
                    createdAt={settlement.createdTimestamp}
                    // createdAt={settlement.createdAt.substr(0, 10)}
                    status="Completed"
                  />
                ) : null
              )}
          </Table>

          
        </Container>
      </div>
    </div>
  );
};


export default Settlements;
