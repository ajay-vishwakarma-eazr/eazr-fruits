import React from "react";
import { Container, Table, Card, CardBody } from "reactstrap";

import BackBtn from "../../BackBtn";
import LogTableHeading from "./Table/LogTableHeading";
import LogTableRow from "./Table/LogTableRow";
import LogFilter from "./LogFilter";
import "./logtable.scss";
import LogsNav from "../LogsNav";

const SupportLogs = () => {
  const logs = [
    {
      name: "Govind Sharma",
      phone: "9898989898",

      activity: "18-06-2021",
    },
    {
      name: "Omkar Manchekar",
      phone: "987387387",

      activity: "12-06-2021",
    },
    {
      name: "Siddhesh Bakshi",
      phone: "9494879489",

      activity: "10-06-2021",
    },
  ];

  return (
    <div className="page-content partners-log-table">
      <Container fluid>
        <LogsNav />
        <Card>
          <CardBody>
            <LogFilter />
            <div className="table-rep-plugin">
              <div
                className=" table-responsive mb-0"
                data-pattern="priority-columns"
              >
                <Table
                  center
                  // striped
                  // bordered
                  responsive
                  className="partner-approval-table"
                >
                  <LogTableHeading />
                  <tbody>
                    {logs.map((log) => {
                      return (
                        <LogTableRow
                          name={log.name}
                          phone={log.phone}
                          activity={log.activity}
                        />
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default SupportLogs;
