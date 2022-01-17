import React, { useState, useEffect } from "react";
import "./credit.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateUserDetails } from "../../../../store/adminusers/actions/actions";

const CreditDetails = () => {
  const { users } = useSelector((state) => state.Users);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    creditLimit: users.creditLimit,
    dueDate: users.dueDate,
    availableCreditLimit: users.availableCreditLimit,
    fineAmount: users.fineAmount,
  });

  const { creditLimit, dueDate, availableCreditLimit, fineAmount } = formData;

  const creditDetail = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWaveOff = () => {
    const wave = users.fineAmount;

    const waveoffamt = {
      fineAmount: 0,
    };
    dispatch(updateUserDetails(users.id, waveoffamt));
  };

  return (
    <div className="credit-details-div">
      <div className="total-credit">
        <div>
          <h6>Credit Limit</h6>
          <p>{creditLimit}</p>
        </div>
        <div className="due-date-div">
          <h6>Due Date</h6>
          <p>{dueDate}</p>
        </div>
      </div>
      <div className="available-credit-div">
        <h6>Available Credit</h6>
        <p>{availableCreditLimit}</p>
      </div>

      <div className="late-fee-div">
        <h6>
          Fine Amount : <span>₹ {fineAmount}</span>
        </h6>
        {/* <button onClick={handleWaveOff}>Wave Off</button> */}
      </div>
      {/* <div className="late-fee-div">
        <h6>
          Late Fee : <span>₹ 0</span>{" "}
        </h6>
        <button>Wave Off</button>
      </div> */}
    </div>
  );
};

export default CreditDetails;
