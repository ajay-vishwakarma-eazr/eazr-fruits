import React from "react";
import { NavLink } from "react-router-dom";

const DetailsNav = () => {
  return (
    <div className="nav-container">
      <div className="details-nav modules-nav">
        <NavLink
          to="/modules"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Partners
        </NavLink>
        <NavLink
          to="/user-modules"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          User
        </NavLink>
        <NavLink
          to="/delivery-modules"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Delivery
        </NavLink>
      </div>
    </div>
  );
};

export default DetailsNav;
