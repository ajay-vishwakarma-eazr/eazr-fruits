import React from "react";
import { Link } from "react-router-dom";

//Import Breadcrumb

const PartnerTrancationsRow = ({ amount, status, debit, refund, settled }) => {
  const statusColor = () => {
    if (refund == "true") {
      return "#4bb543";
    }
    if (refund == "false") {
      return "#df4759";
    }
  };

  return (
    <tbody>
      <tr>
        <td>{amount}</td>
        <td>{status}</td>
        <td>{debit}</td>
        <td>
          <p
            style={{
              border: `1px solid ${statusColor()}`,
              color: statusColor(),
              borderRadius: "25px",
              margin:"auto"
            }}
          >
            {refund}
          </p>
        </td>
        <td>{settled}</td>
      </tr>
    </tbody>
  );
};

export default PartnerTrancationsRow;
