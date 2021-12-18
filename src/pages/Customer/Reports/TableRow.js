import React from "react";
import AppButton from "../../../components/AppButton/AppButton";

const TableRow = ({ srNo, name, reportType, duration, downloadReports }) => {
  return (
    <tr>
      <td>{srNo}</td>
      <td>{name}</td>
      <td>{reportType}</td>
      <td>{duration}</td>
      <td>
        <AppButton text="Download" />
      </td>
    </tr>
  );
};

export default TableRow;
