import React from "react";
import "./credit.scss";

const CreditDetails = () => {
  return (
    <div className="credit-details-div">
      <div className="total-credit">
        <div>
          <h6>Credit Limit</h6>
          <p>₹ 9000</p>
        </div>
        <div className="due-date-div">
          <h6>Due Date</h6>
          <p>04th June, 2021</p>
        </div>
      </div>
      <div className="available-credit-div">
        <h6>Available Credit</h6>
        <p>₹ 4350</p>
      </div>
      <div className="late-fee-div">
        <h6>
          Late Fee : <span>₹ 10</span>{" "}
        </h6>
        <button>Wave Off</button>
      </div>
    </div>
  );
};

export default CreditDetails;
