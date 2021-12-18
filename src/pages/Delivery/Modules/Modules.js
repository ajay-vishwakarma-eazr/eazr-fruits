import React from "react";
import { Container } from "reactstrap";
import SingleModule from "../../Modules/SingleModule";
import BackBtn from "../BackBtn";
import DeliveryNav from "../DeliveryNav";

const DeliveryModules = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <BackBtn route="delivery" />
        <DeliveryNav />
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
