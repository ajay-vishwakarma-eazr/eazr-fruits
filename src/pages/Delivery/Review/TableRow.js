import React from "react";

const TableRow = ({ userName, orderId, amount, dateAndTime, ratings }) => {
  const statusColor = () => {
    if (ratings < 3) {
      return "red";
    }
    if (ratings < 4) {
      return "#0371e3";
    }
    if (ratings <= 5) {
      return "green";
    }
  };
  return (
    <tr>
      <td>{userName}</td>
      <td>{orderId}</td>
      <td>{amount}</td>
      <td>{dateAndTime}</td>
      <td>
        <p
          className="delivery-status"
          style={{ color: statusColor(), border: `1px solid ${statusColor()}` }}
        >
          {ratings}
        </p>
      </td>
    </tr>
  );
};

export default TableRow;
