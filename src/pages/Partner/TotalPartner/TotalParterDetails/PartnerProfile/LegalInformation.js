import React, { useState } from "react";
import Colors from "../../../../../components/Config/Colors";
import AuthModal from "./AuthModal";
import { connect } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";

//actions
import {
  updatePartnerDetails,
  clearErrors,
} from "../../../../../store/partners/actions";

const LegalInformation = (props) => {
  const [edit, setEdit] = useState(true);

  const [legalInformation, setLegalInformation] = useState({
    pan: props.partner.pan,
    panName: props.partner.panName,
    businessPan: props.partner.businessPan ? props.partner.businessPan : "",
    address: props.partner.address,
    pincode: props.partner.pincode,
    city: props.partner.city,
    state: props.partner.state,
  });

  const getDisableEdit = (disableEdit) => {
    setEdit(disableEdit);
  };

  const [password, setPassword] = useState("");

  const onSave = () => {
    props.updatePartnerDetails(props.partner._id, legalInformation, password);
  };

  return (
    <div
      className="legal-information"
      style={{ background: !edit && Colors.infoBody }}
    >
      {props.errors && props.errors.password ? (
        <SweetAlert
          title="Wrong Password"
          danger
          confirmBtnBsStyle="danger"
          onConfirm={() => {
            props.clearErrors();
            // getDisableEdit(disableEdit);
            // toggle();
            // setSuccess_Msg(false);
          }}
        />
      ) : null}
      <div>
        <h1>Legal Information</h1>
        {edit ? (
          <i
            className="mdi mdi-account-edit"
            onClick={() => setEdit(!edit)}
          ></i>
        ) : (
          <AuthModal
            getDisableEdit={getDisableEdit}
            onSave={onSave}
            setPassword={setPassword}
          />
        )}
      </div>
      <div>
        <h3>PAN</h3>
        <input
          disabled={edit}
          value={legalInformation.pan}
          onChange={(e) =>
            setLegalInformation({
              pan: e.target.value,
            })
          }
        />
      </div>
      <div>
        <h3>PAN Owner's Name</h3>
        <input
          disabled={edit}
          value={legalInformation.panName}
          onChange={(e) =>
            setLegalInformation({
              ...legalInformation,
              panName: e.target.value,
            })
          }
        />
      </div>

      {props.partner.businessPan ? (
        <div>
          <h3>Business PAN</h3>
          <input
            disabled={edit}
            value={legalInformation.businessPan}
            onChange={(e) =>
              setLegalInformation({
                ...legalInformation,

                businessPan: e.target.value,
              })
            }
          />
        </div>
      ) : null}

      
      <div>
        <h3>Address</h3>
        <textarea
          disabled={edit}
          value={
            legalInformation.address  
            // ",address " +
            // legalInformation.pincode +
            // ",pincode " +
            // legalInformation.city +
            // ", city" +
            // legalInformation.state +
            // ", city"
          }
          onChange={(e) =>
            setLegalInformation({
              ...legalInformation,
              address: e.target.value

            })
          }
          />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    partner: state.partners.partner,
    errors: state.partners.errors,
  };
};

export default connect(mapStateToProps, { updatePartnerDetails, clearErrors })(
  LegalInformation
);
