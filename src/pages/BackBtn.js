import React from "react";
import { Link } from "react-router-dom";
import "../pages/ApprovedPartners/Details/details.scss";

const BackBtn = ({ route }) => {
  return (
    <div className="approved-back-btn">
      <Link to={`/${route}`}>
        <i className="mdi mdi-arrow-left-circle "></i> <h6>Go back</h6>
      </Link>
    </div>
  );
};

export default BackBtn;
