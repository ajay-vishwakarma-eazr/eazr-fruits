import React from "react";
import { Container } from "reactstrap";
import "./PartnerDetailsTab/partnerDetailsTab.scss";
import BackBtn from "../../../BackBtn";
import PartnerDetailsTab from "./PartnerDetailsTab/PartnerDetailsTab";
import PartnerAllTransactions from "./PartnerAllTarnsactions/PartnerAllTransactions";
const PartnerDetailsNav = () => {
  return (
    <div className="page-content customer-page ">
      <Container fluid>
        <BackBtn route="total-partner" />
        <PartnerDetailsTab/>
        <div className="customer-details">
          <PartnerAllTransactions/>
        </div>
      </Container>
    </div>
  );
};

export default PartnerDetailsNav;
