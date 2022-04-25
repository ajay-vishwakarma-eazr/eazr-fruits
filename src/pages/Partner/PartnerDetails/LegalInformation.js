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
    address:props.partner.address ,

    businessPan: props.partner.businessPan ? props.partner.businessPan : "",
  });

  const getDisableEdit = (disableEdit) => {
    setEdit(disableEdit);
  };

  const onSave = () => {
    props.updatePartnerDetails(id, legalInformation);
    setEdit(!edit);
  };
  return (
    <div
      className="legal-information"
      style={{ background: !edit && Colors.infoBody }}
    >
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
          style={{ height: "40px" }}
          disabled={edit}
          value={legalInformation.address.addr}
          onChange={(e) =>
            setLegalInformation({
              ...legalInformation,
              address: { ...legalInformation.address, addr: e.target.value },
            })
          }
        />
      </div>

      <div>
        <h3>City</h3>
        <textarea
          style={{ height: "20px" }}
          disabled={edit}
          value={legalInformation.address.city}
          onChange={(e) =>
            setLegalInformation({
              ...legalInformation,
              address: { ...legalInformation.address, city: e.target.value },
            })
          }
        />
      </div>

      <div>
        <h3>State</h3>
        <textarea
          style={{ height: "20px" }}
          disabled={edit}
          value={legalInformation.address.state}
          onChange={(e) =>
            setLegalInformation({
              ...legalInformation,
              address: { ...legalInformation.address, state: e.target.value },
            })
          }
        />
      </div>

      <div>
        <h3>PinCode</h3>
        <textarea
          style={{ height: "20px" }}
          disabled={edit}
          value={legalInformation.address.pincode}
          onChange={(e) =>
            setLegalInformation({
              ...legalInformation,
              address: { ...legalInformation.address, pincode: e.target.value },
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
