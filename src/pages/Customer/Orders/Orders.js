import React from "react";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
import { Table, Card, CardBody, Container } from "reactstrap";

import TableSearch from "../TableSearch";
import BackBtn from "../BackBtn";
import CustomersNav from "../CustomerNav";

const Orders = () => {
  
  const userOrders = [

    {
      orderNo: "#12334",
      date: "20-03-2020",
      customerName: "Govind Sharma",
      contact: "9839383989",
      amount: "900",
      platform: "Phone",
    },
    {
      orderNo: "#12334",
      date: "20-03-2020",
      customerName: "Govind Sharma",
      contact: "9839383989",
      amount: "900",
      platform: "Phone",
    },
    {
      orderNo: "#12334",
      date: "20-03-2020",
      customerName: "Govind Sharma",
      contact: "9839383989",
      amount: "900",
      platform: "Phone",
    },
    {
      orderNo: "#12334",
      date: "20-03-2020",
      customerName: "Govind Sharma",
      contact: "9839383989",
      amount: "900",
      platform: "Phone",
    },
    {
      orderNo: "#12334",
      date: "20-03-2020",
      customerName: "Govind Sharma",
      contact: "9839383989",
      amount: "900",
      platform: "Phone",
    },
    {
      orderNo: "#12334",
      date: "20-03-2020",
      customerName: "Govind Sharma",
      contact: "9839383989",
      amount: "900",
      platform: "Phone",
    },
  ];

  

  return (
    <div className="page-content inner-user-page">
      <Container fluid>
        <BackBtn route="users" />
        <CustomersNav />
        <Card>
          <CardBody>
            <TableSearch />
            <div className="table-rep-plugin">
              <div
                className="table-responsive mb-0"
                data-pattern="priority-columns"
              >
                <Table
                  center
                  // striped
                  // bordered
                  responsive
                  className="orders-table"
                >
                  <TableHeading />
                  {userOrders.map((order) => {
                    return (
                      <TableRow
                        orderNo={order.orderNo}
                        date={order.date}
                        customerName={order.customerName}
                        contact={order.contact}
                        amount={order.amount}
                        platform={order.platform}
                      />
                    );
                  })}
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
