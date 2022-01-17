import React from "react";
import { Link } from "react-router-dom";

//Import Breadcrumb

const PartnerSettlementsRow = ({
  setttlementId,
  partnerId,
  amount,
  partnerAmount,
  commision,
  gst,
  createdAt,
  status,
  partnerName,
}) => {
  const statusColor = () => {};

  return (
    <tbody>
      <tr>
        {/* <td>{setttlementId}</td> */}
        <td>{partnerName}</td>
        <td>₹ {amount}</td>
        <td>₹ {partnerAmount}</td>
        <td>{commision}</td>
        <td>{gst}</td>
        <td>{createdAt}</td>
      </tr>
    </tbody>
  );
};

export default PartnerSettlementsRow;
