import React from "react";
import { NavLink, Link ,useParams} from "react-router-dom";

const CustomersNav = () => {
  const {id,contact}=useParams();
  return (
    <div className="nav-container">
      <div className="details-nav">
        <NavLink
          to={`/user-transactions/${id}/${contact}`}
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Transactions
        </NavLink>
        <NavLink
          to={`/user-profile/${id}/${contact}`}
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Profile
        </NavLink>

        <NavLink
          to={`/credit-score/${id}/${contact}`}
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Credit Score
        </NavLink>

        {/* <NavLink
          to={`/credit-details/${id}`}
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Credit
        </NavLink> */}

        {/* <NavLink
          to="/user-orders"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Orders
        </NavLink>
        <NavLink
          to="/user-reports"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Reports
        </NavLink>
        <NavLink
          to="/user-manageQR"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Manage QR
        </NavLink>

        <NavLink
          to="/user-module"
          activeStyle={{
            borderBottom: "2px solid #0371e3",
            color: "#0371e3",
            fontWeight: "bold",
          }}
        >
          Modules
        </NavLink> */}
      </div>
    </div>
  );
};

export default CustomersNav;
