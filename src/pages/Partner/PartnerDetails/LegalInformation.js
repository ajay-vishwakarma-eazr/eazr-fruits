import React, { useState } from "react";
import Colors from "../../../components/Config/Colors";
import AuthModal from "./AuthModal";
import { connect } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
import { useParams } from "react-router-dom";
//actions
import {
  updatePartnerDetails,
  clearErrors,
} from "../../../store/partners/actions";

const LegalInformation = (props) => {
  const { id } = useParams();
  const [edit, setEdit] = useState(true);

  const [legalInformation, setLegalInformation] = useState({
    pan: props.partner.pan,
    panName: props.partner.panName,
    address:
      props.partner.address?.addr +
      " " +
      props.partner.address?.city +
      " " +
      " " +
      props.partner.address?.pincode +
      " " +
      " " +
      props.partner.address?.state +
      " ",

    businessPan: props.partner.businessPan ? props.partner.businessPan : "",
  });

  const getDisableEdit = (disableEdit) => {
    setEdit(disableEdit);
  };

  const onSave = () => {
    props.updatePartnerDetails(id, legalInformation);
    setEdit(!edit);
  };
  console.log(props.partner.address);
  return (
    <div
      className="legal-information"
      style={{ background: !edit && Colors.infoBody }}
    >
      {/* {props.errors && props.errors.password ? (
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
      ) : null} */}
      <div>
        <h1>Legal Information</h1>
        {edit ? (
          <i
            className="mdi mdi-account-edit"
            onClick={() => setEdit(!edit)}
          ></i>
        ) : (
          <AuthModal getDisableEdit={getDisableEdit} onSave={onSave} />
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
            legalInformation.address + " "
            // ",address " +
            // legalInformation.address.pincode + " "
            // ",pincode " +
            // legalInformation.city + " " +
            // ", city" +
            // legalInformation.state +" "
            // ", state"
          }
          onChange={(e) =>
            setLegalInformation({
              ...legalInformation,
              address: e.target.value,
              addr: e.target.value,
              pincode: e.target.value,
              city: e.target.value,
              state: e.target.value,
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
    // errors: state.partners.errors,
  };
};

export default connect(mapStateToProps, { updatePartnerDetails, clearErrors })(
  LegalInformation
);
