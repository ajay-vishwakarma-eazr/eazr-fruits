import React from "react";

const TableRow = ({ amount, status, partnerName, debit, createAt }) => {
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
    <tr>
      <td>{partnerName}</td>
      <td>₹ {status ===2 ? amount: "-"}</td>
      <td>
        <p
          style={{ color: statusColor(), border: `1px solid ${statusColor()}`,borderRadius:"10px" }}
        >
          {status === 0 ? "Initiated" : status === 2 ? "Success" : "Failed"}
        </p>
      </td>
      <td>{debit === true ? "Yes" : "No"}</td>
      <td>{createAt.slice(0, 10)}</td>
    </tr>
  );
};

export default TableRow;
