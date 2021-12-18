import React from "react";
import { NavLink } from "react-router-dom";

const SupportNav = () => {
  return (
    <div className="nav-container">
      <div className="details-nav">
        <NavLink
          to="/support-tickets"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          All Tickets
        </NavLink>

        <NavLink
          to="/new-tickets"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          New Tickets
        </NavLink>
        <NavLink
          to="/open-tickets"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Open Tickets
        </NavLink>

        <NavLink
          to="/closed-tickets"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Closed Tickets
        </NavLink>
      </div>
    </div>
  );
};

export default SupportNav;
