import React from "react";

const TableHeading = () => {
  return (
    <thead style={{textAlign:'center'}}>
      <th>Transaction to</th>
      <th>Amount</th>
      <th>Status</th>
      <th>Debit</th>
      <th>Transaction At</th>
    </thead>
  );
};

export default TableHeading;
