import React from "react";

const SearchSettlement = () => {
  return (
    <div className="detail-heading">
      <input type="text" placeholder="Search..." />
      <select name="" id="">
        <option>All Settlements</option>
        <option>Completed Settlements</option>
        <option>Refunded Settlements</option>
        <option>Failed Settlements</option>
      </select>
    </div>
  );
};

export default SearchSettlement;
