import React from "react";

const TableHeading = () => {
  return (
    <thead className="table-heading">
      <th>Settlement Id</th>
      <th>Partner Id</th>
      <th>Amount</th>
      <th>PartnerAmount</th>
      <th>UPI</th>
      <th>GST</th>
      <th>Created At</th>
      <th>Status</th>
    </thead>
  );
};

export default TableHeading;
