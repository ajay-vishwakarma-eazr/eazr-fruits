import React from "react";

const CreditTableHeading = () => {
  return (
    <thead className="customer-table-heading" style={{textAlign: "center"}}>
      <th>Contact Score</th>
      <th>Device Score</th>
      <th>Location Score</th>
      <th>Number Of Financial Apps</th>
      <th>Financial App Score</th>
      <th>Financial App List</th>
      <th style={{ textAlign: "center"}}>Contact List</th>
    </thead>
  );
};

export default CreditTableHeading;
