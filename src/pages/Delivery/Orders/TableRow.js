import React from "react";

const TableRow = ({ orderId, distance, price, status, date }) => {
  const statusColor = () => {
    if (status === "Accepted") {
      return "#0371e3";
    }
    if (status === "Picked Up") {
      return "#f0ad4e";
    }
    if (status === "Pending") {
      return "#5bc0de";
    }
    if (status === "Delivered") {
      return "#4bb543";
    }
  };

  return (
    <tr>
      <td>{orderId}</td>
      <td>{distance}</td>
      <td>{date}</td>
      <td>₹{price}</td>
      <td>
        <p
          className="delivery-status"
          style={{ color: statusColor(), border: `1px solid ${statusColor()}` }}
        >
          {status}
        </p>
      </td>
    </tr>
  );
};

export default TableRow;
