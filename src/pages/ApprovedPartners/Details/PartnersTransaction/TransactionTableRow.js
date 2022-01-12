import React from "react";
import { Link } from "react-router-dom";

//Import Breadcrumb

const TransactionTableRow = ({
  name,
  enrollmentId,
  contact,
  email,
  status,
  transaction
}) => {
  const statusColor = () => {
    if (status._id === "607d530bf896e32250192195") {
      return "#0371e3";
    }
    if (status._id === "607d534de36c5111dc63fe4f") {
      return "#eed202";
    }
    if (status._id === "607d535ce36c5111dc63fe50") {
      return "#df4759";
    }
    if (status._id === "607fcc9c6e04510a48a07767") {
      return "#4bb543";
    }
  };


  const sIds =
    serviceIds != undefined && serviceIds.length != 0
      ? serviceIds.map((obj) => obj.serviceId)
      : null;
  const lastIndex =
    serviceIds != undefined && serviceIds.length != 0
      ? (sIds.length = 0)
      : null;

  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{enrollmentId}</td>
        <td>{contact}</td>
        <td>{email}</td>
        <td>{transaction}</td>
      </tr>
    </tbody>
  );
};

export default TransactionTableRow;
