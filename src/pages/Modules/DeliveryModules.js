import React from "react";
import { Container } from "reactstrap";
import SingleModule from "./SingleModule";
import ModulesNav from "./ModulesNav";
import ModuleBackBtn from "./ModuleBackBtn";
import "./module.scss";

const DeliveryModules = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <ModuleBackBtn route="dashboard" />
        <ModulesNav />
        <h6>Enable / Disable Delivery Module</h6>
        <div className="module-grid">
          <SingleModule status={true} moduleName="Orders" />
          <SingleModule status={false} moduleName="Settlements" />
          <SingleModule status={true} moduleName="Profile" />
          <SingleModule status={true} moduleName="Settlement Settings" />
        </div>
      </Container>
    </div>
  );
};

export default DeliveryModules;
