import React from "react";
import { Link } from "react-router-dom";

//Import Breadcrumb

const PartnerTrancationsRow = ({
  id,
  transactions
}) => {
  const statusColor = () => {
     };


  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{transactions}</td>
      </tr>
    </tbody>
  );
};

export default PartnerTrancationsRow;
