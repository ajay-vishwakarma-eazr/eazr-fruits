import React, { useState, useEffect } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { useWindowSize } from "@react-hook/window-size";
import { useHistory, useParams } from "react-router-dom";

//Actions
import {
  getPartnerById,
  updatePartnerDetails,
  addTicket,
} from "../../../store/partners/actions";
import { connect, useDispatch } from "react-redux";

const HoldModal = (
  props
  // onTicketSubmit,
) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [screen] = useWindowSize();

  const [fields, setFields] = useState({
    businessEmail: false,
    businessName: false,
    businessType: false,
    businessCategory: false,
    businessDescription: false,
    averageOrderValue: false,
    acceptPayment: false,
    pan: false,
    panName: false,
    businessPan: false,
    address: false,
    pincode: false,
    city: false,
    state: false,
    beneficiaryName: false,
    ifscCode: false,
    accountNumber: false,
    aadharFront: false,
    aadharBack: false,
    authorizedPersonPan: false,
    companyPan: false,
    businessRegistrationProof: false,
  });
  const { id } = useParams();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getPartnerById(id));
  // }, []);
  const [remark, setRemark] = useState("");

  // const PartnerDetails = (props) => {

  let history = useHistory();
  const [success_msg, setSuccess_Msg] = useState(false);

  

  const handleOnholdPartner = () => {
    const onHoldPartner = {
      status: 3,
    };
    props.updatePartnerDetails(id, onHoldPartner);
    history.push("/partner-approval");
  };

  return (
    <div>
      <Button className="hold-modal-toggler" color="warning" onClick={toggle}>
        OnHold
      </Button>
      <Modal
        isOpen={modal}
        className="hold-modal"
        style={{ maxWidth: screen < 1000 ? "100%" : "50% " }}
        centered
        toggle={toggle}
      >
        <ModalBody className="hold-modal-body">
          <h5>Brand Information</h5>

          <div className="checkbox-row">
            <div>
              <input
                type="checkbox"
                checked={fields.businessEmail}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    businessEmail: e.target.checked,
                  });
                }}
              />
              <label htmlFor="" value="Work Email">
                Work Email
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Brand/Business Name"
                checked={fields.businessName}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    businessName: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">Brand/Business Name</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Business Registered as"
                checked={fields.businessType}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    businessType: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">Business Registered as</label>
            </div>

            <div>
              <input
                type="checkbox"
                checked={fields.businessCategory}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    businessCategory: e.target.checked,
                  });
                }}
              />
              <label htmlFor="" value="Business Category">
                Business Category
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Business Description"
                checked={fields.businessDescription}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    businessDescription: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">Business Description</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Average Order Value"
                checked={fields.averageOrderValue}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    averageOrderValue: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">Average Order Value</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={fields.acceptPayment}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    acceptPayment: e.target.checked,
                  });
                }}
              />
              <label htmlFor="" value="Accept Payment">
                Accept Payment
              </label>
            </div>
          </div>

          <h5>Legal Information</h5>
          <div className="checkbox-row">
            <div>
              <input
                type="checkbox"
                value="PAN"
                checked={fields.pan}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    pan: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">PAN</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="PAN Owner Name"
                checked={fields.panName}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    panName: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">PAN Owner Name</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={fields.businessPan}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    businessPan: e.target.checked,
                  });
                }}
              />
              <label htmlFor="" value="Business PAN">
                Business PAN
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Address"
                checked={fields.address}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    address: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">Address</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Pincode"
                checked={fields.pincode}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    pincode: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">Pincode</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={fields.city}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    city: e.target.checked,
                  });
                }}
              />
              <label htmlFor="" value="City">
                City
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                value="State"
                checked={fields.state}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    state: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">State</label>
            </div>
          </div>

          <h5>Bank Account</h5>

          <div className="checkbox-row">
            <div>
              <input
                type="checkbox"
                value="Bank Details"
                checked={fields.bankDetails}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    bankDetails: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">Bank Details</label>
            </div>
            {/* <div>
              <input
                type="checkbox"
                value="IFSC Code"
                checked={fields.ifscCode}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    ifscCode: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">IFSC Code</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Account Number"
                checked={fields.accountNumber}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    accountNumber: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">Account Number</label>
            </div> */}
          </div>

          <h5>Document Verification</h5>
          <div className="checkbox-row">
            <div>
              <input
                type="checkbox"
                value="Aadhaar Front"
                checked={fields.aadharFront}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    aadharFront: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">Aadhaar Front</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Aadhaar Back"
                checked={fields.aadharBack}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    aadharBack: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">Aadhaar Back</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Authorize Person PAN"
                checked={fields.authorizedPersonPan}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    authorizedPersonPan: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">PAN Document</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Business Registration Proof"
                checked={fields.businessRegistrationProof}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    businessRegistrationProof: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">Business Registration Proof</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="Company PAN"
                checked={fields.companyPan}
                onChange={(e) => {
                  setFields({
                    ...fields,
                    companyPan: e.target.checked,
                  });
                }}
              />
              <label htmlFor="">Company PAN</label>
            </div>
          </div>

          <div className="remark-section">
            <h5 htmlFor="">Add Remark</h5>
            <textarea
              name=""
              id=""
              cols="30"
              rows="2"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
            ></textarea>
          </div>
          <div className="checkbox-save">
            <button onClick={() => handleOnholdPartner()}>Save</button>
            
          </div>
          
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    partners: state.partners,
  };
};

export default connect(mapStateToProps, {
  getPartnerById,
  updatePartnerDetails,
  addTicket,
})(HoldModal);
// export default HoldModal;
