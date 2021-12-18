import React from "react";

const SearchReview = () => {
  return (
    <div className="detail-heading">
      <input type="text" placeholder="Search..." />
      <select name="" id="">
        <option>All Ratings</option>
        <option>Greater Than 2 </option>
        <option>Greater Than 3</option>
        <option>Greater Than 4</option>
      </select>
    </div>
  );
};

export default SearchReview;
