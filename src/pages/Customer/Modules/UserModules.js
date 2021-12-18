import React from "react";
import { Container } from "reactstrap";
import SingleModule from "../../Modules/SingleModule";

import BackBtn from "../BackBtn";
import CustomersNav from "../CustomerNav";

const UserModules = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <BackBtn route="users" />
        <CustomersNav />
        <h6>Enable / Disable User Module</h6>
        <div className="module-grid">
          <SingleModule status={true} moduleName="Credit" />
          <SingleModule status={true} moduleName="Shop" />
          <SingleModule status={false} moduleName="Profile" />
          <SingleModule status={true} moduleName="Transactions" />
          <SingleModule status={true} moduleName="Promotions" />
        </div>
      </Container>
    </div>
  );
};

export default UserModules;
