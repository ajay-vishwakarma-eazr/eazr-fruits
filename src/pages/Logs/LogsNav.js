import React from "react";
import { NavLink } from "react-router-dom";

const LogsNav = () => {
  return (
    <div className="nav-container">
      <div className="details-nav">
        <NavLink
          to="/logs"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Partners Log
        </NavLink>
        <NavLink
          to="/onboarding-partner-logs"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Onboarding Partners Log
        </NavLink>

        <NavLink
          to="/users-log"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Users Log
        </NavLink>

        <NavLink
          to="/delivery-logs"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Delivery Logs
        </NavLink>
        <NavLink
          to="/support-logs"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Support Logs
        </NavLink>
      </div>
    </div>
  );
};

export default LogsNav;
