import React from "react";
import { NavLink } from "react-router-dom";

const DeliveryNav = () => {
  return (
    <div className="nav-container">
      <div className="details-nav">
        <NavLink
          to="/delivery-orders"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Orders
        </NavLink>

        <NavLink
          to="/delivery-settlements"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Settlements
        </NavLink>
        <NavLink
          to="/delivery-profile"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Profile
        </NavLink>

        <NavLink
          to="/delivery-review"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Review
        </NavLink>
        <NavLink
          to="/delivery-module"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Modules
        </NavLink>
      </div>
    </div>
  );
};

export default DeliveryNav;
