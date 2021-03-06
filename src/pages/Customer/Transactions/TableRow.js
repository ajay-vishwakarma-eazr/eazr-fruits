import { green } from "@material-ui/core/colors";
import React from "react";
import Moment from "react-moment";

const TableRow = ({ amount, status, partnerName, debit, createAt }) => {
  const statusColor = () => {
    if (status === 0) {
      return "#eed202";
    }
    if (status === 2) {
      return "#4bb543";
    }
    if (status === 3) {
      return "#df4759";
    }
  };

  return (
    <tr>
      <td>{partnerName}</td>
      <td>
        ₹{" "}
        {status === 2 && amount !== null
          ? amount
          : status === 0 && amount !== null
          ? amount
          : status === 3 && amount !== null
          ? amount
          : "-"}
      </td>
      <td>
        <p
          style={{
            color: statusColor(),
            margin: "auto",
            border: `1px solid ${statusColor()}`,
            borderRadius: "10px",
            background:green
          }}
        >
          {status === 0 ? "Initiated" : status === 2 ? "Success" : "Failed"}
        </p>
      </td>
      <td>{debit === true ? "Yes" : "No"}</td>
      <td>
        <Moment format="DD-MM-YYYY HH:mm:ss A">{createAt}</Moment>
      </td>
    </tr>
  );
};

export default TableRow;
