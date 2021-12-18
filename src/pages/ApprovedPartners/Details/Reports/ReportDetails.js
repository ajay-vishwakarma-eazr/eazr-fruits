import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, CardBody } from "reactstrap";
import BackBtn from "../BackBtn";
import DetailsNav from "../DetailsNav";
import Reports from "./Reports";
import { ip } from "../../../../config/config";
import { useSelector } from "react-redux";
import axios from "axios";
import setAuthToken from "../../../../utils/setAuthToken";
import FileSaver from "file-saver";
import exportFromJSON from "export-from-json";
import * as XLSX from "xlsx";

import moment from "moment";
import { jsPDF } from "jspdf";
import ReportsRow from "./ReportsRow";
import SweetAlert from "react-bootstrap-sweetalert";

import { toast } from "react-toastify";
import { FormControlLabel, Switch } from "@material-ui/core";
const Details = (props) => {
  const [title, setTitle] = useState("hello");

  const [sweetAlerts, setSweetAlerts] = useState({
    dynamic_title: "",
    dynamic_description: "",
    success_confirm: false,
    alert_confirm: false,
  });

  // const [state, setState] = useState ={}

  const [selectOption, setSelectOption] = useState("");
  const [selectReport, setSelectReport] = useState("");
  const [selectDuration, setSelectDuration] = useState("");
  const [selectStatus, setSelectStatus] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectFormat, setSelectFormat] = useState(".xlsx");
  const [status, setStatus] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [isChecked, setIsChecked] = useState(true);

  const d = new Date();
  const { partner } = useSelector((state) => state.businessPartner);
  const selectOptionFunc = (e) => {
    setSelectOption(e.target.value);
  };
  const selectFormatFunc = (e) => {
    setSelectFormat(e.target.value);
  };
  const selectReportFunc = (e) => {
    setSelectReport(e.target.value);
  };
  const selectDurationFunc = (e) => {
    setSelectDuration(e.target.value);
    if (e.target.value == "Select Duration") {
      setStartDate(null);
      setEndDate(null);
    }
    if (e.target.value == "This Week") {
      console.log("This week works");

      const test = moment().subtract(7, "days").calendar();
      setStartDate(
        moment(test).set({ hours: 0, minutes: 0, seconds: 0 }).format()
      );
      console.log(startDate);
      setEndDate(moment().format());
      console.log(endDate);
    }
    if (e.target.value == "Today") {
      setStartDate(moment().set({ hours: 0, minutes: 0, seconds: 0 }).format());
      setEndDate(moment().format());
      console.log(startDate);
      console.log(endDate);
    }

    if (e.target.value == "This Month") {
      const date = moment().startOf("month");
      setStartDate(
        moment(date).set({ hours: 0, minutes: 0, seconds: 0 }).format()
      );
      //setStartDate(moment().format("YYYY-MM-DD"))
      setEndDate(moment().format("YYYY-MM-DD"));
      console.log(startDate);
      console.log(endDate);
    }
  };
  const selectStatusFunc = (e) => {
    setSelectStatus(e.target.value);
    if (e.target.value == "Select Status") {
      setStatus(null)
    }

    //Product Statuses
    if (e.target.value == "In Stock" || e.target.value == "Completed") {
      setStatus("true");
    }
    if (e.target.value == "Out Stock" || e.target.value == "Rejected") {
      setStatus("false");
    }

    //Settlement Statuses
    if (e.target.value == "Pending") {
      setStatus("606469741c9d0f25bcd32dbd");
    }
    if (e.target.value == "Successful") {
      setStatus("606469811c9d0f25bcd32dbe");
    }
    if (e.target.value == "Failed") {
      setStatus("606469861c9d0f25bcd32dbf");
    }

    //Order statuses
    if (e.target.value == "Preparing") {
      setStatus("606406994ffa2b143cef092b");
    }
    if (e.target.value == "Completed") {
      setStatus("606406c04ffa2b143cef092e");
    }
    if (e.target.value == "Ready to Dispatch") {
      setStatus("606406b14ffa2b143cef092c");
    }
    if (e.target.value == "Pending") {
      setStatus("606406804ffa2b143cef092a");
    }
    if (e.target.value == "Dispatched") {
      setStatus("606406b94ffa2b143cef092d");
    }
    if (e.target.value == "Rejected") {
      setStatus("606406c84ffa2b143cef092f");
    }

    console.log(status);
  };
  const searchTextFunc = (e) => {
    setSearchText(e.target.value);
  };

  const downloadReportFunc = (value) => {
    if (selectReport == "" && isChecked == true) {
      setSweetAlerts({
        alert_confirm: true,
      });
      //return false;
    } else {
      /*
          if (selectDuration == "This Week") {
            console.log("This week works")
      
            const test = moment().subtract(7, 'days').calendar();
            setStartDate(moment(test).set({ 'hours': 0, 'minutes': 0, 'seconds': 0 }).format())
            console.log(startDate)
            setEndDate(moment().format())
            console.log(endDate)
          }
          if (selectDuration == "Today") {
            setStartDate(moment().set({ 'hours': 0, 'minutes': 0, 'seconds': 0 }).format())
            setEndDate(moment().format())
            console.log(startDate)
            console.log(endDate)
      
          }
      
          if (selectDuration == "This Month") {
            const date = moment().startOf('month')
            setStartDate(moment(date).set({ 'hours': 0, 'minutes': 0, 'seconds': 0 }).format())
            //setStartDate(moment().format("YYYY-MM-DD"))
            setEndDate(moment().format("YYYY-MM-DD"))
            console.log(startDate)
            console.log(endDate)
          }*/
      //console.log(startDate)
      // console.log(endDate)
      //console.log(id)
      //console.log(selectReport)
      //console.log(partner)

      /*if ((selectStatus == "In Stock") || (selectReport == "Completed")) {
        setStatus("true")
      }
      if ((selectStatus == "Out Stock") || (selectReport == "Rejected")) {
        setStatus("false")
      }*/

      console.log(startDate)
      console.log(endDate)
      console.log(status)
      console.log(selectStatus)
      /* axios.post(`${ip}/admin/businessprofiles/updateReportLog`, {
         businessPartner: partner.businessPartner,
         status: status,
         type: selectReport,
         startDate: startDate,
         endDate: endDate,
       })
         .then((res) => {
           console.log(res)
 
         })
         .catch((err) => { console.log(err) })
 
 */
      axios.get(`${ip}/admin/businessprofiles/getbusinessreports`, {
        params: {
          // report:"Order",
          // id: partner.businessPartner,
          //startDate:"2021-06-10",
          //endDate:"2021-06-11",
          startDate: startDate,
          endDate: endDate,
          report: selectReport,
          id: partner.businessPartner,
          status: status
          //startDate: startDate,
          //endDate: endDate
        },
        // headers:{
        // 'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA5MTE5NmVlNjNmMjUzODMwZWQwNzE2IiwicGhvbmUiOiI5OTMwOTgxOTU2IiwiZW1haWwiOiJzaWRkaGVzaC5iQGVhenIuaW4ifSwiaWF0IjoxNjIzMTM2OTgyLCJleHAiOjE2MjM0OTY5ODJ9.9JXruV6n79Fa1MXnYxba6MNip57_2cNPSlhgT1cXgEw"
        //}

      }).then((res) => {

        console.log(res)
        if (selectFormat == ".pdf") {
          const doc = new jsPDF();
          doc.text(res.data, 10, 10);
          doc.save(selectReport + ".pdf");
        }
        if (selectFormat == ".xlsx") {
          const ws = XLSX.utils.json_to_sheet(res.data);
          const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
          const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
          const data = new Blob([excelBuffer], { type: fileType });

          FileSaver.saveAs(data, selectReport + fileExtension);
        }
        /*
        const ws = XLSX.utils.json_to_sheet(res.data);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, selectReport+"-"+startDate.slice(0,10) +" to "+endDate.slice(0,10)+ fileExtension);
      */
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const DownloadReportFunc2 = (value) => {
    //console.log(value)
    if (selectDuration == "This Week") {
      console.log("This week works");

      const test = moment().subtract(7, "days").calendar();
      setStartDate(
        moment(test).set({ hours: 0, minutes: 0, seconds: 0 }).format()
      );
      console.log(startDate);
      setEndDate(moment().format());
      console.log(endDate);
    }
    if (selectDuration == "Today") {
      setStartDate(moment().set({ hours: 0, minutes: 0, seconds: 0 }).format());
      setEndDate(moment().format());
      console.log(startDate);
      console.log(endDate);
    }

    if (selectDuration == "This Month") {
      const date = moment().startOf("month");
      //setStartDate( moment(date).set({'hours': 0, 'minutes':0,'seconds':0}).format())
      setStartDate(moment("2021-03-10").format("YYYY-MM-DD"));
      setEndDate(moment().format("YYYY-MM-DD"));
      console.log(startDate);
      console.log(endDate);
    }
    console.log(startDate);
    console.log(endDate);
    //console.log(id)
    console.log(selectReport);
    console.log(partner);
    axios
      .get(`${ip}/admin/businessprofiles/getreports`, {
        params: {
          report: "Orders",
          id: partner.businessPartner,
          startDate: startDate,
          endDate: endDate,
        },
        // headers:{
        // 'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA5MTE5NmVlNjNmMjUzODMwZWQwNzE2IiwicGhvbmUiOiI5OTMwOTgxOTU2IiwiZW1haWwiOiJzaWRkaGVzaC5iQGVhenIuaW4ifSwiaWF0IjoxNjIzMTM2OTgyLCJleHAiOjE2MjM0OTY5ODJ9.9JXruV6n79Fa1MXnYxba6MNip57_2cNPSlhgT1cXgEw"
        //}
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  //console.log(partner.businessPartner)

  return (
    <div className="page-content approved-partners-details">
      <Container fluid>
        <BackBtn route="partners" />
        <DetailsNav />
        <Card>
          <CardBody>
            <div className="detail-heading">
              <input
                type="text"
                placeholder="Search..."
                onChange={searchTextFunc}
                value={searchText}
              />
              <div className="report-options">
                <select value={selectReport} onChange={selectReportFunc}>
                  <option value="All Reports">Select Reports</option>
                  <option value="Order">Orders</option>
                  <option value="Settlement">Settlements</option>
                  <option value="Transaction">Transactions</option>
                  <option value="Product">Products</option>
                </select>
                {selectReport == "Transaction" ? (
                  <select value={selectStatus} onChange={selectStatusFunc}>
                    <option value="Select Status">Select Status</option>

                    <option value="Completed">Completed</option>
                    <option value="Refunded">Refunded</option>
                    <option value="Failed">Failed</option>
                    <option value="Initiated">Initiated</option>
                  </select>
                ) : selectReport == "Order" ? (
                  <select value={selectStatus} onChange={selectStatusFunc}>
                    <option value="Select Status">Select Status</option>

                    <option value="Completed">Completed</option>
                    <option value="Dispatched">Dispatched</option>
                    <option value="Ready to Dispatch">Ready to Dispatch</option>
                    <option value="Pending">Pending</option>
                    <option value="Preparing">Preparing</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                ) : selectReport == "Product" ? (
                  <select value={selectStatus} onChange={selectStatusFunc}>
                    <option value="Select Status">Select Status</option>

                    <option value="In Stock">In Stock</option>
                    <option value="Out Stock">Out Stock</option>
                  </select>
                ) : selectReport == "Settlement" ? (
                  <select value={selectStatus} onChange={selectStatusFunc}>
                    <option value="Select Status">Select Status</option>

                    <option value="Successful">Successful</option>
                    <option value="Pending">Pending</option>
                    <option value="Failed">Failed</option>
                  </select>
                ) : null}
                <select value={selectDuration} onChange={selectDurationFunc}>
                  <option value="Select Duration">Select Duration</option>
                  <option value="Today">Today</option>
                  <option value="This Week">This Week</option>
                  <option value="This Month">This Month</option>
                </select>
                <select value={selectFormat} onChange={selectFormatFunc}>
                  <option value="Select Format">Select Format Type</option>
                  <option value=".pdf">.pdf</option>
                  <option value=".xlsx">.xlsx</option>
                  <option value=".csv">.csv</option>
                </select>
                {sweetAlerts.alert_confirm ? (
                  <SweetAlert
                    title="Incomplete Details"
                    warning
                    showCancel
                    confirmBtnBsStyle="success"
                    cancelBtnBsStyle="danger"
                    onConfirm={() =>
                      setSweetAlerts({
                        success_confirm: true,
                        alert_confirm: false,
                        // dynamic_title: "Disabled!",
                        //dynamic_description: "UPI has been disabled.",
                      })
                    }
                    onCancel={() => {
                      setSweetAlerts({
                        alert_confirm: false,
                      });
                      setIsChecked(true);
                    }}
                  >
                    Please mention type of Report
                  </SweetAlert>
                ) : null}
                <div className="generate-btn">
                  <button onClick={downloadReportFunc}>
                    {/* console.log(this.state.duration); console.log(this.state.report);
              console.log(this.state.status);
              console.log(this.state.formatType); console.log(this.state.email); */}
                    Generate Report
                  </button>
                </div>
              </div>
            </div>

            <Reports
              text={searchText}
              status={selectStatus}
              duration={selectDuration}
              reportType={selectReport}
            />
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Details;
