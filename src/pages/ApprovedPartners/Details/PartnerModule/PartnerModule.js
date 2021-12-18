import React from "react";
import { Container } from "reactstrap";

import BackBtn from "../BackBtn";
import DetailsNav from "../DetailsNav";
import SingleModule from "./SingleModule";
// import "./module.scss";

const PartnerModule = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <BackBtn route="partners" />
        <DetailsNav />
        {/* <h6>Enable / Disable Partner's Module</h6> */}
        <div className="module-grid">
          <SingleModule status={true} moduleName="Dashboard" />
          <SingleModule status={true} moduleName="Transactions" />
          <SingleModule status={false} moduleName="Settlements" />
          <SingleModule status={false} moduleName="My Products" />
          <SingleModule status={true} moduleName="My Orders" />
          <SingleModule status={true} moduleName="Reports" />
          <SingleModule status={true} moduleName="Manage QR" />
          <SingleModule status={true} moduleName="Settings" />
          <SingleModule status={false} moduleName="Help & Supports" />
        </div>
      </Container>
    </div>
  );
};

export default PartnerModule;
