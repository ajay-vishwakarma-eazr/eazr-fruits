import React, { useState } from "react";

const LogFilter = () => {
  const [searchLog, setSearchLog] = useState(null);
  const handleChange = (e) => {
    setSearchLog(e.target.value);
  };
  return (
    <div className="detail-heading">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleChange(e)}
        value={searchLog}
      />
      <div>
        <select>
          <option value="All Orders">All Activities</option>
          <option value="Stage 1 Completed">Today</option>
          <option value="Stage 2 Completed">Last Week</option>
          <option value="Stage 3 Completed">Last Month</option>
        </select>
      </div>
    </div>
  );
};

export default LogFilter;
