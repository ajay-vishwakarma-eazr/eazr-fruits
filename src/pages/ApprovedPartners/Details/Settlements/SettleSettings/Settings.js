import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./setting.scss";
import { useWindowSize } from "@react-hook/window-size";
import StoredBank from "./StoredBank/StoredBank";

const Settings = () => {
  const [screen] = useWindowSize();
  return (
    <div className="page-content settlement-settings ">
      <Container fluid>
        <div className="go-back-to-partner">
          <Link to="/settlements">
            <i class="mdi mdi-arrow-left-circle "></i>
            <h6>Go back</h6>
          </Link>
        </div>

        <div className="account-details">
          <div className="left-side">
            <div className="selected-account">
              <div className="selected-account-heading">
                <i className="mdi mdi-bank"></i>
                <h5>Default Bank Account for Settlement</h5>
              </div>

              <h6 className="bank-name">HDFC Bank</h6>
              <div>
                <h6>A/C Holder Name </h6>
                <span> : </span>
                <p>Govind Sharma</p>
              </div>
              <div>
                <h6>Account No. </h6>
                <span> : </span>
                <p>23452637839</p>
              </div>
              <div>
                <h6>Bank IFSC </h6>
                <span> : </span>
                <p>HDFC14253</p>
              </div>
              <i
                className="mdi mdi-card-account-details"
                style={{ display: screen < 1000 ? "none" : "block" }}
              ></i>
            </div>

            <h5 className="mt-3 font-size-16 font-bold">Other Bank Accounts</h5>

            <StoredBank
              bankName="Axis Bank"
              accHolderName="Govind Sharma"
              accNo="2342536765"
              ifsc="AXIS253636"
            />
            <StoredBank
              bankName="SBI Bank"
              accHolderName="Govind Sharma"
              accNo="2342536765"
              ifsc="SBI253636"
            />
            <StoredBank
              bankName="Bank Of India"
              accHolderName="Govind Sharma"
              accNo="2342536765"
              ifsc="BOI53636"
            />
          </div>
          <div className="right-side">
            <h5>Add New Account</h5>
            <div className="container-div">
              <div>
                <h6>Bank Name</h6>
                <input type="text" placeholder="State Bank Of India" />
              </div>
              <div>
                <h6>IFSC Code</h6>
                <input type="text" placeholder="SBI123456" />
              </div>
            </div>
            <div className="container-div">
              <div>
                <h6>Account No.</h6>
                <input type="text" placeholder="123XXXXXXX18" />
              </div>
              <div>
                <h6>Re-Enter Accout No.</h6>
                <input type="text" placeholder="123XXXXXXX18" />
              </div>
            </div>
            <button>Add Account</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Settings;
