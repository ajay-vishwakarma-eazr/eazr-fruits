import React, { useEffect, useState } from "react";

const SearchTransactions = ({ getSearchPartner }) => {
  const [partner, setPartner] = useState(null);

  const handleSearch = (e) => {
    setPartner(e.target.value);
    getSearchPartner(partner);
  };

  console.log("search", partner);

  return (
    <div className="search-partner">
      <label htmlFor="">Enrollment Id : </label>
      <input
        type="text"
        placeholder="Search..."
        autocomplete="off"
        onChange={handleSearch}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchTranasctions;
