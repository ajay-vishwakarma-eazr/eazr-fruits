import React from "react";
import { Container } from "reactstrap";
import UserProfile from "./UserProfile/UserProfile";
import CreditDetails from "./CreditDetails/CreditDetails";
import "./customerdetails.scss";
import BackBtn from "../BackBtn";
import CustomersNav from "../CustomerNav";
const CustomerDetails = () => {
  return (
    <div className="page-content customer-page ">
      <Container fluid>
        <BackBtn route="users" />
        <CustomersNav />
        <div className="customer-details">
          <UserProfile />
          <CreditDetails />
        </div>
      </Container>
    </div>
  );
};

export default CustomerDetails;
