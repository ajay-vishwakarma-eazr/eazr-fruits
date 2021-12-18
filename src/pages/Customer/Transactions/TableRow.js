import React from "react";

const TableRow = ({
  paymentId,
  eazrpayOrderId,
  orderId,
  amount,
  email,
  contact,
  createdAt,
  status,
}) => {
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
      {/* <td>{paymentId}</td>
      <td>{eazrpayOrderId}</td>
      <td>{orderId}</td> */}
      <td>{amount}</td>
      <td>{email}</td>
      <td>{contact}</td>
      <td>{createdAt}</td>
      <td>
        <p
          className="status"
          style={{ borderColor: statusColor(), color: statusColor() }}
        >
          {status}
        </p>
      </td>
    </tr>
  );
};

export default TableRow;
