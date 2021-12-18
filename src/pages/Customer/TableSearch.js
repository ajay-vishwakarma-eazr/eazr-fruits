import React,{useState} from "react";

const TableSearch = ({getSearchTransactionValue,filterArray}) => {
  const [search, setSearch] = useState(null);
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
        onChange={(e) => onChange(e)}
      />
      <select name="" id="">
        <option>All Transactions</option>
        <option>Completed Transactions</option>
        <option>Refunded Transactions</option>
        <option>Failed Transactions</option>
      </select>
    </div>
  );
};

export default TableSearch;
