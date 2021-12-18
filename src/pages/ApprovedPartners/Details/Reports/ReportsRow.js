import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import AppButton from "../../../../components/AppButton/AppButton";
import { ip } from "../../../../config/config";
import FileSaver from "file-saver";
import exportFromJSON from "export-from-json";
import * as XLSX from 'xlsx';
const ReportsRow = ({ srNo, name, reportType, duration, downloadReports, startDate, endDate, id }) => {
  const { partner } = useSelector((state) => state.businessPartner);
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  const DownloadReportFunc1 = (value) => {
    //console.log(value)
    console.log(startDate)
    console.log(endDate)
    console.log(id)
    console.log(reportType)
    console.log(partner)
    axios.get(`${ip}/admin/businessprofiles/getreports`, {
      params: {
        report: "Order",
        id: partner.businessPartner,
        startDate: "2021-01-21",
        endDate: "2021-04-10"
      },
      // headers:{
      // 'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA5MTE5NmVlNjNmMjUzODMwZWQwNzE2IiwicGhvbmUiOiI5OTMwOTgxOTU2IiwiZW1haWwiOiJzaWRkaGVzaC5iQGVhenIuaW4ifSwiaWF0IjoxNjIzMTM2OTgyLCJleHAiOjE2MjM0OTY5ODJ9.9JXruV6n79Fa1MXnYxba6MNip57_2cNPSlhgT1cXgEw"
      //}

    }).then((res) => {

      console.log(res)

    }).catch((err) => {
      console.log(err)
    })


  }
  const DownloadReportFunc = (value) => {
    //console.log(value)
    console.log(startDate)
    console.log(endDate)
    console.log(id)
    console.log(reportType)
    console.log(partner)

    axios.get(`${ip}/admin/businessprofiles/getbusinessreports`, {
      params: {
        report: reportType,
        id: partner.businessPartner,
        startDate: startDate ? startDate : "",
        endDate: endDate ? endDate : ""
      },
      // headers:{
      // 'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA5MTE5NmVlNjNmMjUzODMwZWQwNzE2IiwicGhvbmUiOiI5OTMwOTgxOTU2IiwiZW1haWwiOiJzaWRkaGVzaC5iQGVhenIuaW4ifSwiaWF0IjoxNjIzMTM2OTgyLCJleHAiOjE2MjM0OTY5ODJ9.9JXruV6n79Fa1MXnYxba6MNip57_2cNPSlhgT1cXgEw"
      //}

    }).then((res) => {

      console.log(res)
      const ws = XLSX.utils.json_to_sheet(res.data);
      const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], { type: fileType });
      if (startDate && endDate) {
        FileSaver.saveAs(data, reportType + "-" + startDate.slice(0, 10) + " to " + endDate.slice(0, 10) + fileExtension);
      }
      else {
        FileSaver.saveAs(data, reportType + fileExtension);
      }

      //exportFromJSON({ data: res.data, fileName: 'download', exportType: exportFromJSON.types.xlsx }) 

      // FileSaver.saveAs(res.data,"Test"+fileExtension);
    }).catch((err) => {
      console.log(err)
    })


  }
  return (
    <tr>
      <td>#{srNo}</td>
      <td>{name}</td>
      <td>{reportType}</td>
      <td>{duration}</td>
      <td>
        <AppButton onClick={() => DownloadReportFunc()}
          text='Download'

        />
      </td>
    </tr>
  );
};

export default ReportsRow;
