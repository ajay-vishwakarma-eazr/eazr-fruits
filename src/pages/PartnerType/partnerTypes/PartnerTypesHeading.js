import React from "react";

const PartnerTypesHeading = () => {
  return (
    <thead className="customer-table-heading">
      <th>Id</th>
      <th>Type</th>
      <th>Created Time</th>
      <th style={{ textAlign: "center" }}>Actions</th>
    </thead>
  );
};

export default PartnerTypesHeading;
