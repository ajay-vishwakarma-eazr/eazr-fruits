import React, { useState } from "react";

const SearchDelivery = ({ getSearchDelivery, handleSearch }) => {
  const [delivery, setDelivery] = useState(null);

  const handleChange = (e) => {
    getSearchDelivery(e.target.value);
    setDelivery(e.target.value);
    handleSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(delivery);
    setDelivery(console.log("Hello"));
  };
  return (
    <form className="search-filter" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <h6>Search Delivery Partners</h6>
        <input
          type="text"
          value={delivery}
          placeholder="Search for orderno, transaction, mobileno, name..."
          onChange={(e) => handleChange(e)}
        />
        <i className="fa fa-search"></i>
      </div>
      <div>
        <h6>Transactions</h6>
        <select name="" id="">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Refunded">Refunded</option>
          <option value="Failed">Failed</option>
        </select>
      </div>
      <div>
        <h6>Settlements</h6>
        <select name="" id="">
          <option value="All">All</option>
          <option value="Compeleted">Completed</option>
          <option value="Refunded">Refunded</option>
          <option value="Failed">Failed</option>
        </select>
      </div>
      <div className="search-btn">
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchDelivery;
