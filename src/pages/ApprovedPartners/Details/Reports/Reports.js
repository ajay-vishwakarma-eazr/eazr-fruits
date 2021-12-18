import React, { useEffect, useState } from "react";
import ReportsRow from "./ReportsRow";
import ReportsHeading from "./ReportsHeading";
import { Table } from "reactstrap";
import "./reports.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import { ip } from "../../../../config/config";

const Reports = (props) => {
  const [reportLog, setReportLog] = useState();
  const [srNo, setSrNo] = useState();
  let i;

  const { partner } = useSelector((state) => state.businessPartner);
  const ReportTypeOption = props.reportType;
  const StatusTypeOption = props.status;
  const DurationOption = props.duration;
  const PassedText = props.text;
  const SelectOption = props.option;
  //console.log(ReportTypeOption);
  //console.log(StatusTypeOption);
  //  console.log(DurationOption);
  useEffect(() => {
    axios.get(`${ip}/admin/businessprofiles/getBusinessReportsLog`, {
      params: {
        id: partner.businessPartner
      }
    })
      .then((res) => {
        console.log(res)
        setReportLog(res.data)
        

      })
      .catch((err) => {
        console.log(err)
      })
  }, [reportLog])

  console.log(reportLog)

  if (reportLog) {


    console.log(reportLog.length)
  }
  return (
    <div className="table-rep-plugin">
      <div className="table-responsive mb-0" data-pattern="priority-columns">
        <Table center responsive className="reports-table">
          <ReportsHeading />
          {reportLog ? reportLog
            .filter((report) => {
              if (PassedText !== "") {
                return (
                  Object.values(report)
                    .join(" ")
                    .toLowerCase()
                    .includes(PassedText.toLowerCase())
                );
              } else {
                return report;
              }
            })
            .map((report, index) => {
              return (
                <ReportsRow
                  key={index}
                  srNo={index + 1}
                  name={partner.businessName}
                  reportType={report.type}
                  duration={report.startDate && report.endDate ? report.startDate.slice(0, 10) + " " + " to " + " " + report.endDate.slice(0, 10) : null}
                  startDate={report.startDate ? report.startDate.slice(0, 10) : ""}
                  endDate={report.endDate ? report.endDate.slice(0, 10) : ""}
                  id={partner.businessPartner}
                />
              );
            }) : null}
          {/* {partnerReports.map(({ srNo, name, reportType, duration }) => {
            return (
              <ReportsRow
                key={srNo}
                srNo={srNo}
                name={name}
                reportType={reportType}
                duration={duration}
              />
            );
          })}*/}
        </Table>
      </div>
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
    reportType: "Settlement",
    duration: "1May to 4May",
  },
  {
    srNo: "#4",
    name: "Govind Sharma",
    reportType: "Product",
    duration: "1May to 4May",
  },
  {
    srNo: "#5",
    name: "Govind Sharma",
    reportType: "Product",
    duration: "1May to 4May",
  },
  {
    srNo: "#6",
    name: "Govind Sharma",
    reportType: "Product",
    duration: "1May to 4May",
  },
  {
    srNo: "#7",
    name: "Govind Sharma",
    reportType: "Product",
    duration: "1May to 4May",
  },
];
