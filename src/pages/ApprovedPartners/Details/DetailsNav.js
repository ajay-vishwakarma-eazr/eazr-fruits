import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const DetailsNav = () => {
  const { modules } = useSelector(state => state.partnerModules)
  // console.log(modules)
  return (
    <div className="nav-container">
      <div className="details-nav ">


        <NavLink
          to="/approved-partner-details"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Transactions
        </NavLink>


        <NavLink
          to="/settlements"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Settlements
        </NavLink>


        <NavLink
          to="/products"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Products
        </NavLink>



        

        <NavLink
          to="/orders"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Orders
        </NavLink>


        <NavLink
          to="/reports"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Reports
        </NavLink>


        <NavLink
          to="/manageQr"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Manage QR
        </NavLink>


        <NavLink
          to="/profile"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Profile
        </NavLink>
        <NavLink
          to="/partner-module"
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

export default DetailsNav;
