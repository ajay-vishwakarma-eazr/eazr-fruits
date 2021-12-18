import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import avatar from "../../../assets/images/users/avatar-2.jpg";
import "./details.scss";
import axios from "axios";
import { ip } from "../../../config/config";
import { useSelector } from "react-redux";

const BackBtn = ({ route }) => {
  const { partner } = useSelector((state) => state.businessPartner);
  console.log(partner);
  const [file, setFile] = useState(
    partner.profileDp ? partner.profileDp : avatar
  );
  const [profile, setProfile] = useState();

  const history = withRouter();
  const handleClick = () => {
    history.push("/profile");
  };

  return (
    <div className="approved-back-btn">
      <Link to={`/${route}`}>
        <i className="mdi mdi-arrow-left-circle "></i> <h6>Go back</h6>
      </Link>

      <div className="partner-profile">
        <div className="profile-pic">
          <img
            src={
              partner.profileDp ? 
              `${ip}/business/images/profile/${partner.profileDp}`
                :  avatar
            }
            // src={profile}
            alt=""
            onClick={handleClick}
          />
        </div>
        <h5 onClick={handleClick}>{partner.businessName}</h5>
      </div>
    </div>
  );
};

export default BackBtn;
