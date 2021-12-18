import React from "react";
import { Table, Container, Card, CardBody } from "reactstrap";
import BackBtn from "../BackBtn";
import CustomersNav from "../CustomerNav";
import TableSearch from "../TableSearch";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";

const Reports = () => {
  return (
    <div className="page-content inner-user-page">
      <Container fluid>
        <BackBtn route="users" />
        <CustomersNav />
        <Card>
          <CardBody>
            <div className="detail-heading">
              <input type="text" placeholder="Search..." />
              <select name="" id="">
                <option>Transactions</option>
                <option>Orders</option>
              </select>
            </div>
            <div className="table-rep-plugin">
              <div
                className="table-responsive mb-0"
                data-pattern="priority-columns"
              >
                <Table center responsive className="reports-table">
                  <TableHeading />
                  {partnerReports.map(
                    ({ srNo, name, reportType, duration }) => {
                      return (
                        <TableRow
                          key={srNo}
                          srNo={srNo}
                          name={name}
                          reportType={reportType}
                          duration={duration}
                        />
                      );
                    }
                  )}
                </Table>
              </div>
            </div>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Reports;

const partnerReports = [
  {
    srNo: "#1",
    name: "Govind Sharma",
    reportType: "Orders",
    duration: "1May to 4May",
  },
  {
    srNo: "#2",
    name: "Govind Sharma",
    reportType: "Transaction",
    duration: "1May to 4May",
  },
  {
    srNo: "#3",
    name: "Govind Sharma",
    reportType: "Transaction",
    duration: "1May to 4May",
  },
  {
    srNo: "#4",
    name: "Govind Sharma",
    reportType: "Order",
    duration: "1May to 4May",
  },
  {
    srNo: "#5",
    name: "Govind Sharma",
    reportType: "Transaction",
    duration: "1May to 4May",
  },
  {
    srNo: "#6",
    name: "Govind Sharma",
    reportType: "Order",
    duration: "1May to 4May",
  },
  {
    srNo: "#7",
    name: "Govind Sharma",
    reportType: "Order",
    duration: "1May to 4May",
  },
];
