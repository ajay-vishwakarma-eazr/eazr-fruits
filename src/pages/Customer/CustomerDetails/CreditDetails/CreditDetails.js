
import React, { useState } from "react";
import "./credit.scss";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import BackBtn from "../../../BackBtn";
import {
  updateUserDetails,
  updateWaveOffAmount,
} from "../../../../store/adminusers/actions/actions";
const CreditDetails = ({
  creditLimit,
  dueDate,
  availableCreditLimit,
  fineAmount,
  id
}) => {
  const dispatch = useDispatch();
  const [waveAmt, setWaveAmt] = useState();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const handleWaveOff = () => {
    const wave = fineAmount;
    const waveOffAmt = wave - waveAmt;
    const finalAmt = {
      fineAmount: waveOffAmt,
    };
    dispatch(updateWaveOffAmount(id, finalAmt));
    setWaveAmt("");
    setModal(false);
  };

  return (
    <div className="credit-details-div">
      {/* <BackBtn route="users" /> */}
      
      <div className="total-credit">
        <div>
          <h6>Credit Limit</h6>
          <p>{creditLimit}</p>
        </div>
        <div className="due-date-div">
          <h6>Due Date</h6>
          <p>{dueDate?.slice(0, 10)}</p>
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
        {fineAmount !== 0 ? <button onClick={toggle}>Wave Off</button> : ""}
        <Modal centered isOpen={modal}>
          <ModalHeader toggle={toggle}>Waveoff</ModalHeader>
          <ModalBody>
            <div
              style={{
                display: "flex",
                alignItem: "center",
                justifyContent: "space-evenly",
                flexDirection: "column",
              }}
            >
              <input
                type="text"
                placeholder="Enter wave off amount"
                name="waveOffAmt"
                style={{
                  borderRadius: "20px",
                  border: "none",
                  padding: "10px",
                  margin: "20px",
                }}
                value={waveAmt}
                onChange={(e) => setWaveAmt(e.target.value)}
              />
              <Button
                color="primary"
                onClick={handleWaveOff}
                style={{ margin: "20px" }}
              >
                WaveOff
              </Button>
            </div>
          </ModalBody>
        </Modal>

        {/* <CreditDetails
          creditLimit={users.creditLimit}
          dueDate={users.dueDate}
          availableCreditLimit={users.availableCreditLimit}
          fineAmount={users.fineAmount}
          id={users.id}
        /> */}
      </div>
    </div>
  );
};

export default CreditDetails;