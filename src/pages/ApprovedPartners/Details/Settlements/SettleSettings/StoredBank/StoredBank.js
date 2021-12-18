import React from "react";

import "./storedbank.scss";

const StoredBank = ({ bankName, accHolderName, accNo, ifsc }) => {
  return (
    <div className="selected-account stored-bank ">
      <h6 className="bank-name">{bankName}</h6>
      <div>
        <h6>A/C Holder Name </h6>
        <span> : </span>
        <p>{accHolderName}</p>
      </div>
      <div>
        <h6>A/C No. </h6>
        <span> : </span>
        <p>{accNo}</p>
      </div>
      <div>
        <h6>Bank IFSC </h6>
        <span> : </span>
        <p>{ifsc}</p>
      </div>
      <div className="default-bank-btn ">
        <button>Set Default</button>
      </div>
    </div>
  );
};

export default StoredBank;
