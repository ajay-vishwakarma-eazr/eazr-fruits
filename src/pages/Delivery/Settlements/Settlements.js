import React from "react";
import { Container, Card, CardBody, Table } from "reactstrap";
import BackBtn from "../BackBtn";
import DeliveryNav from "../DeliveryNav";
import SearchSettlement from "./SearchSettlements";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";

const Settlements = () => {
  return (
    <div className="page-content inner-delivery-page">
      <Container fluid>
        <BackBtn route="delivey" />
        <DeliveryNav />
        <Card>
          <CardBody>
            <SearchSettlement />
            <div className="table-rep-plugin">
              <div
                className="table-responsive mb-0"
                data-pattern="priority-columns"
              >
                <Table
                  // striped
                  // bordered

                  responsive
                >
                  <TableHeading />
                  <TableRow
                    settlementId="#12345"
                    amount="700"
                    fees="20"
                    tax="10"
                    dateAndTime="23-02-2020 At 09:20 AM"
                    status="Completed"
                  />
                  <TableRow
                    settlementId="#12345"
                    amount="700"
                    fees="20"
                    tax="10"
                    dateAndTime="23-02-2020 At 09:20 AM"
                    status="Pending"
                  />
                  <TableRow
                    settlementId="#12345"
                    amount="700"
                    fees="20"
                    tax="10"
                    dateAndTime="23-02-2020 At 09:20 AM"
                    status="Refunded"
                  />
                </Table>
              </div>
            </div>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Settlements;
