import React from "react";
import { Link } from "react-router-dom";

//Import Breadcrumb

const PartnerTrancationsRow = ({userName, amount, status, debit, refund, settled }) => {

  return (
    <tbody>
      <tr>
        <td>{userName}</td>
        <td>{amount}</td>
        <td>
          {status === 0
            ? "initiated"
            : status === 2
            ? "sucess"
            : status === 1
            ? "failed"
            : "on hold"}
        </td>
        <td>{debit === "true" ? "Yes" : "No"}</td>
        <td>{refund === "true" ? "Yes" : "No"}</td>
        <td>{settled === "true" ? "Yes" : "No"}</td>
      </tr>
    </tbody>
  );
};

export default PartnerTrancationsRow;
