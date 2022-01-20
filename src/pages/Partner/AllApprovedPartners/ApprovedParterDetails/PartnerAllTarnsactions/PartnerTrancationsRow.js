import React from "react";
import { Link } from "react-router-dom";

//Import Breadcrumb

const PartnerTrancationsRow = ({userName, amount, status, debit, refund, settled }) => {
const statusColor = () => {
  if (status === 0) {
    return "#eed202";
  }
  if (status === 2) {
    return "#4bb543";
  }
  if (status === 1) {
    return "#df4759";
  }
};
  return (
    <tbody>
      <tr>
        <td>{userName}</td>
        <td>{amount}</td>
        <td>
          <p
            style={{
              color: statusColor(),
              border: `1px solid ${statusColor()}`,
              borderRadius: "10px",
          
            }}
          >
            {status === 0 ? "Initiated" : status === 1 ? "Failed" : "Success"}
          </p>
       </td>
        <td>{debit === "true" ? "Yes" : "No"}</td>
        <td>{refund === "true" ? "Yes" : "No"}</td>
        <td>{settled === "true" ? "Yes" : "No"}</td>
      </tr>
    </tbody>
  );
};

export default PartnerTrancationsRow;
