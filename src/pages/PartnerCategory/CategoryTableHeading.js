import React from "react";

const CategoryTableHeading = () => {
  return (
    <thead className="customer-table-heading">
      <th>Id</th>
      <th>Category</th>
      <th>Created Time</th>
      <th style={{ textAlign: "center" }}>Actions</th>
    </thead>
  );
};

export default CategoryTableHeading;
