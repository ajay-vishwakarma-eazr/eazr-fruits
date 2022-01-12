import React from "react";

const PartnerSettlementsHeading = () => {
  return (
    <thead className="partner-table-heading">
      <th>Settlement Id</th>
      <th>Partner Id</th>
      <th>Amount</th>
      <th>PartnerAmount</th>
      <th>Commision</th>
      <th>GST</th>
      <th>Created At</th>
    </thead>
  );
};

export default PartnerSettlementsHeading;
