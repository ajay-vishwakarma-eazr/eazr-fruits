import React from "react";
import { Container } from "reactstrap";
import SingleModule from "./SingleModule";
import ModulesNav from "./ModulesNav";
import "./module.scss";
import ModuleBackBtn from "./ModuleBackBtn";

const UserModules = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <ModuleBackBtn route="dashboard" />
        <ModulesNav />
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
