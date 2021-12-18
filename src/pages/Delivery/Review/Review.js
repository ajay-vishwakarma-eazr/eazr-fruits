import React from "react";
import { Container, Card, CardBody, Table } from "reactstrap";
import DeliveryNav from "../DeliveryNav";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import BackBtn from "../BackBtn";
import SearchReview from "./SearchReview";

const Review = () => {
  return (
    <div className="page-content inner-delivery-page">
      <Container fluid>
        <BackBtn route="delivery" />
        <DeliveryNav />
        <Card>
          <CardBody>
            <SearchReview />
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
                    userName="Govind Sharma"
                    orderId="#12345"
                    amount="500"
                    dateAndTime="10-05-2020"
                    ratings="3.2"
                  />
                  <TableRow
                    userName="Govind Sharma"
                    orderId="#12345"
                    amount="500"
                    dateAndTime="10-05-2020"
                    ratings="4.1"
                  />
                  <TableRow
                    userName="Govind Sharma"
                    orderId="#12345"
                    amount="500"
                    dateAndTime="10-05-2020"
                    ratings="2.3"
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

export default Review;
