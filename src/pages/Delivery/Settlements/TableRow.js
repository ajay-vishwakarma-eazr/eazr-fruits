import React from "react";

const TableRow = ({ settlementId, amount, fees, tax, dateAndTime, status }) => {
  const statusColor = () => {
    if (status === "Completed") {
      return "#4bb543";
    }
    if (status === "Refunded") {
      return "#df4759";
    }
    if (status === "Pending") {
      return "#0371e3";
    }
  };
  return (
    <tr>
      <td>{settlementId}</td>
      <td>₹{amount}</td>
      <td>₹{fees}</td>
      <td>₹{tax}</td>
      <td>{dateAndTime}</td>
      <td>
        <p
          className="delivery-status"
          style={{ border: `1px solid ${statusColor()}`, color: statusColor() }}
        >
          {status}
        </p>
      </td>
    </tr>
  );
};

export default TableRow;
