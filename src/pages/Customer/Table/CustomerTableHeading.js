import React from "react";

const CustomerTableHeading = () => {
  return (
    <thead className="customer-table-heading">
      <th>Name</th>
      <th>Email</th>
      <th>Contact</th>
      <th>Gender</th>
      <th>Credit Limit</th>
      <th>Total Outstanding Amount</th>
      <th>Kyc Verified</th>
      <th>Details</th>
      <th>Actions</th>
    </thead>
  );
};

export default CustomerTableHeading;
