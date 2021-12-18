import { Container } from "reactstrap";
import React, { useState } from "react";
import BreadCrumb from "../../../../../components/BreadCrumbs/BreadCrumb";
import "./innersettlement.scss";

const InnerSettlement = () => {
  const [showLess, setShowLess] = useState(false);

  return (
    <div className="page-content settlement-inner-page">
      <Container fluid>
        <BreadCrumb
          route="settlements"
          sourcePage="Settlements"
          currentPage="Id"
        />
        <div className="first-row">
          <h6>Total Settled Amount</h6>
          <p>₹ 931.98</p>
          <i class="ri-question-line"></i>
        </div>
        <div className="second-row">
          <div className="left-side">
            <div>
              <h6>Status</h6>
              <p className="status">Processed</p>
            </div>
            <div>
              <h6>Created At </h6>
              <p>30 Dec 2020, 01:03:16 pm</p>
            </div>
            <div>
              <h6>Fees </h6>
              <p>₹ 19.02</p>
            </div>
            <div>
              <h6>Tax </h6>
              <p>₹ 0.02</p>
            </div>
            <div>
              <h6>UTR </h6>
              <p>AXISCN0055421103</p>
            </div>
          </div>
          <div className="right-side">
            <h6>
              Total Credit Amount <span>₹ 951.00</span>
            </h6>
            <div className="green-card">
              <h6>Payment</h6>
              <div>
                <p>Type</p>
                <h6>Credit</h6>
              </div>
              <div>
                <p>Count</p>
                <h6>2</h6>
              </div>
              <div>
                <p>Amount</p>
                <h6>₹ 951.00</h6>
              </div>
            </div>
            <div
              style={{ display: showLess ? "none" : "block" }}
              className="red-card-container"
            >
              <h6>
                Total Debit Amount<span> ₹ 19.02 </span>
              </h6>
              <div className="red-card">
                <h6>Tax</h6>
                <div>
                  <p>Type</p>
                  <h6>Debit</h6>
                </div>
                <div>
                  <p>Count</p>
                  <h6>--</h6>
                </div>
                <div>
                  <p>Amount</p>
                  <h6>₹ 0.00</h6>
                </div>
              </div>
              <div className="red-card">
                <h6>Fee</h6>
                <div>
                  <p>Type</p>
                  <h6>Debit</h6>
                </div>
                <div>
                  <p>Count</p>
                  <h6>--</h6>
                </div>
                <div>
                  <p>Amount</p>
                  <h6>₹ 19.02</h6>
                </div>
              </div>
            </div>
            {showLess ? (
              <button onClick={() => setShowLess(!showLess)}>
                Show More{" "}
                <i className="mdi mdi-arrow-down-drop-circle-outline"></i>
              </button>
            ) : (
              <button onClick={() => setShowLess(!showLess)}>
                Show Less{" "}
                <i className="mdi mdi-arrow-up-drop-circle-outline"></i>
              </button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InnerSettlement;
