import React from "react";
import { NavLink } from "react-router-dom";

const PartnerDetailsTab = () => {
  return (
    <div className="nav-container">
      <div className="details-nav">
        <NavLink
          to="/partner-details-tab"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Transactions
        </NavLink>

        <NavLink
          to="/partner-sattlements"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Sattlements
        </NavLink>
        {/* <NavLink
          to="/user-reports"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Order
        </NavLink> */}
        {/* <NavLink
          to="/user-reports"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Reports
        </NavLink> */}
        {/* <NavLink
          to="/partner-profile"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Profile
        </NavLink> */}
      </div>
    </div>
  );
};

export default PartnerDetailsTab;
