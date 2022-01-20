import React, { useEffect, useState } from "react";

const SearchPartner = ({ getSearchPartner }) => {
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
        autocomplete="off"
        placeholder="Search..."
        onChange={handleSearch}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchPartner;
