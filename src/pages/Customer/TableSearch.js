import React, { useState } from "react";

const TableSearch = ({ getSearchTransactionValue, filterArray }) => {
  const [search, setSearch] = useState(null);
  const [selectSearch, setSelectSearch] = useState(null);
  const onChange = (e) => {
    getSearchTransactionValue(e.target.value);
    setSearch(e.target.value);
    filterArray();
  };
  return (
    <div className="detail-heading">
      <input
        type="text"
        value={search}
        placeholder="Search..."
        autocomplete="off"
        onChange={(e) => onChange(e)}
      />
      {/* <select
        name=""
        id=""
        value={selectSearch}
        onchange={(e) => {
          const selectedData = e.target.value;
          setSelectSearch(selectedData);
        }}
      >
        <option value="All">All Transactions</option>
        <option value="Completed">Completed Transactions</option>
        <option value="Refund">Refunded Transactions</option>
        <option value="Failed">Failed Transactions</option>
      </select> */}
    </div>
  );
};

export default TableSearch;
