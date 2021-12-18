import React from "react";

const SearchOrder = () => {
  return (
    <div className="detail-heading">
      <input type="text" placeholder="Search..." />
      <select name="" id="">
        <option>All Transactions</option>
        <option>Completed Transactions</option>
        <option>Refunded Transactions</option>
        <option>Failed Transactions</option>
      </select>
    </div>
  );
};

export default SearchOrder;
