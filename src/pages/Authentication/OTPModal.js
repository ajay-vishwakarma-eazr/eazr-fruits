import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader } from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";

import "./OTPModal.css";

import OtpInput from "react-otp-input";

import { useWindowSize } from "@react-hook/window-size";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";

const OTPModal = (props) => {
  const [otp, setOtp] = useState("");

  const [modal, setModal] = useState(false);

  const toggle = () => {
    props.hideOtpModal();
  };

  const [screen] = useWindowSize();
  console.log("props", props);
  return (
    <>
      <div className="pin-modal-div">
        <Button
          color="primary"
          className=" sign-up-btn btn-block"
          style={{ background: "#0371e3" }}
          onClick={() => props.onLogin()}
        >
          {props.loading === true ? (
            // <Loader />
            <ClipLoader color="#fff" loading={true} size={20} />
          ) : null}
          Log-In
        </Button>

        {(props.phone !== "" &&
          props.errors === "Send OTP" &&
          props.hideOtpModal !== false) ||
        props.errors === "OTP Invalid" ? (
          <Modal
            isOpen={props.show}
            //props.show
            centered
            style={{
              maxWidth: screen < 1000 ? "100%" : "30%",
              padding: "5rem 0",
            }}
          >
            <ModalHeader toggle={toggle}>Mobile Verification</ModalHeader>
            <div className="text-center pin-modal">
              <p className=" mb-5" style={{ padding: "0 30px" }}>
                An One Time Password (OTP) has been sent to the mobile number
                entered. Kindly enter the unique OTP to verify and proceed.
              </p>
              <div className="modal-pin-form mb-4" style={{ margin: "0 auto" }}>
                <OtpInput
                  onChange={(e) => {
                    //setOtp(e);
                    props.onOtpChange(e);
                  }}
                  inputStyle={{
                    width: "50px",
                    height: "50px",
                    margin: "0 0.5rem",
                    border: "1px solid gray",
                  }}
                  containerStyle={
                    {
                      // width: "100%",
                      // marginLeft: "-4rem",
                    }
                  }
                  value={props.otp}
                  numInputs={4}
                />
              </div>
              {props.errors !== "Send OTP" ? (
                <h6 style={{ color: "red" }}>{props.errors}</h6>
              ) : null}

              <div className="my-5 text-white">
                {console.log("props error", props.errors)}
                <button
                  className="mb-4 verify-otp-btn "
                  onClick={() => props.onVerify()}
                >
                  {props.verifyLoading === true ? (
                    // <Loader />
                    <ClipLoader color="#fff" loading={true} size={20} />
                  ) : (
                    "Click here to verify"
                  )}
                </button>

                <br />

                <Button
                  color="primary"
                  className=" resend-otp-text"
                  style={{ background: "#0371e3" }}
                  onClick={() => props.onLogin()}
                >
                  {props.loading === true ? (
                    // <Loader />
                    <ClipLoader color="#fff" loading={true} size={20} />
                  ) : (
                    "Resend OTP"
                  )}
                </Button>

                {/* <Link to
                className="resend-otp-text" style=
                {{
                  color: "#0371e3",
                }}
                > Resend OTP
              </Link> */}
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </>
  );
};

export default OTPModal;
