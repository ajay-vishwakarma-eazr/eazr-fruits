import React from "react";

const PartnerTranscationsHeading = () => {
  return (
    <thead className="partner-table-heading">
      <th>Transactions from </th>
      <th>Amount</th>
      <th>Status</th>
      <th>Debit</th>
      <th>Refund</th>
      <th>Settled</th>
    </thead>
  );
};

export default PartnerTranscationsHeading;
