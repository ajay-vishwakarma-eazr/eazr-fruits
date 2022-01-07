import React from "react";

const TableHeading = () => {
  return (
    <thead className="table-heading">
      <th>Settlement Id</th>
      <th>Amount</th>
      <th>Fees</th>
      <th>Tax</th>
      <th>Created At</th>
      <th>Status</th>
    </thead>
  );
};

export default TableHeading;
