import React from "react";
import { Container } from "reactstrap";
import SingleModule from "../../Modules/SingleModule";
import BackBtn from "../BackBtn";
import PartnerDetailsTab from "../PartnerDetailsTab/PartnerDetailsTab";

const PartnerDetailModules = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <BackBtn route="users" />
        <PartnerDetailsTab/>
        <h6>Enable / Disable User Module</h6>
        <div className="module-grid">
          <SingleModule status={false} moduleName="Profile" />
          <SingleModule status={true} moduleName="Transactions" />
          <SingleModule status={true} moduleName="Promotions" />
        </div>
      </Container>
    </div>
  );
};

export default PartnerDetailModules;
