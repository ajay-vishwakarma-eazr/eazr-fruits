import React from "react";
import { Link } from "react-router-dom";
import "../ApprovedPartners/Details/details.scss";
import avatar from "../../assets/images/users/avatar-3.jpg";

const BackBtn = ({ route }) => {
  return (
    <div className="approved-back-btn">
      <Link to={`/${route}`}>
        <i className="mdi mdi-arrow-left-circle "></i> <h6>Go back</h6>
      </Link>
      <Link to="user-profile">
        <div className="partner-profile">
          <div className="profile-pic">
            <img src={avatar} alt="" />
          </div>
          <h5>Govind Sharma</h5>
        </div>
      </Link>
    </div>
  );
};

export default BackBtn;
