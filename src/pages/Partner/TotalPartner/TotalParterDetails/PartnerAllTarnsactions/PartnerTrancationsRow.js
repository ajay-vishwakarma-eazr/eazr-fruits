import React from "react";
import { Link } from "react-router-dom";

//Import Breadcrumb

const PartnerTrancationsRow = ({ amount, status, debit, refund, settled }) => {
  const statusColor = () => {};

  return (
    <tbody>
      <tr>
        <td>{amount}</td>
        <td>{status}</td>
        <td>{debit}</td>
        <td>{refund}</td>
        <td>{settled}</td>
      </tr>
    </tbody>
  );
};

export default PartnerTrancationsRow;
