import React, { useState } from "react";
import "./adminusers.scss";

const SearchAdminUsers = ({ getSearchAdminUserValue, filterArray }) => {
  const [search, setSearch] = useState(null);

  const onChange = (e) => {
    getSearchAdminUserValue(e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterArray();
    setSearch("");
  };

  return (
    <form className="search-filter">
      <div>
        <h6>Search Users</h6>
        <input
          type="text"
          value={search}
          placeholder="Search for ..."
          onChange={(e) => onChange(e)}
        />
        <i className="fa fa-search"></i>
      </div>
      {/* <div>
        <h6>Transactions</h6>
        <select name="" id="">
          <option value="All">All</option>
          <option value="More Than ₹100">More Than ₹100</option>
          <option value="More Than ₹500">More Than ₹500</option>
          <option value="More Than ₹1000">More Than ₹1000</option>
        </select>
      </div>
      <div>
        <h6>Settlements</h6>
        <select name="" id="">
          <option value="All">All</option>
          <option value="More Than ₹100">More Than ₹100</option>
          <option value="More Than ₹500">More Than ₹500</option>
          <option value="More Than ₹1000">More Than ₹1000</option>
        </select>
      </div> */}
      <div className="search-btn">
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchAdminUsers;
