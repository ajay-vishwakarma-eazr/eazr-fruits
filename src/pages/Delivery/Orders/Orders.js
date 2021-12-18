import React from "react";
import BackBtn from "../BackBtn";
import DeliveryNav from "../DeliveryNav";
import TableRow from "./TableRow";
import TableHeading from "./TableHeading";
import { Container, Card, CardBody, Table } from "reactstrap";
import SearchOrder from "./SearchOrder";

const Orders = () => {
  return (
    <div className="page-content inner-delivery-page">
      <Container fluid>
        <BackBtn route="delivery" />
        <DeliveryNav />
        <Card>
          <CardBody>
            <SearchOrder />
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
                    orderId="#1234"
                    distance="10km"
                    date="10-02-2020 At 05:30 PM"
                    price="500"
                    status="Pending"
                  />
                  <TableRow
                    orderId="#1234"
                    distance="10km"
                    date="10-02-2020 At 05:30 PM"
                    price="500"
                    status="Accepted"
                  />
                  <TableRow
                    orderId="#1234"
                    distance="10km"
                    date="10-02-2020 At 05:30 PM"
                    price="500"
                    status="Delivered"
                  />
                  <TableRow
                    orderId="#1234"
                    distance="10km"
                    date="10-02-2020 At 05:30 PM"
                    price="500"
                    status="Picked Up"
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

export default Orders;
