import React, { useState } from "react";
import Colors from "../../../components/Config/Colors";
import AuthModal from "./AuthModal";
import { connect } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";

//actions
import {
  updatePartnerDetails,
  clearErrors,
} from "../../../store/partners/actions";
import { useParams } from "react-router-dom";
const BusinessDescription = (props) => {
 const { id } = useParams();
  const [edit, setEdit] = useState(true);

  const [description, setBusinessDescription] = useState({
    businessDescription: props.partner.businessDescription,
  });
  const getDisableEdit = (disableEdit) => {
    setEdit(disableEdit);
  };

  const onSave = () => {
    props.updatePartnerDetails(id, description);
  };

  return (
    <div
      className="business-description"
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
      <div className="heading">
        <h1>Business Description</h1>
        {edit ? (
          <i
            className="mdi mdi-account-edit"
            onClick={() => setEdit(!edit)}
          ></i>
        ) : (
          <AuthModal
            getDisableEdit={getDisableEdit}
            onSave={onSave}
          />
        )}
      </div>
      <div>
        <textarea
          rows="5"
          disabled={edit}
          value={description.businessDescription}
          onChange={(e) =>
            setBusinessDescription({
              businessDescription: e.target.value,
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
  BusinessDescription
);
