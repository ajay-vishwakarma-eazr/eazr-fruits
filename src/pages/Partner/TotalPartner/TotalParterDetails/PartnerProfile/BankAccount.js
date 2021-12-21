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

const BankAccount = (props) => {
  const [edit, setEdit] = useState(true);

  const [partnerBankDetail, setPartnerBankDetails] = useState({
    beneficiaryName: props.partner.bankDetails.beneficiaryName,
    ifscCode: props.partner.bankDetails.ifscCode,
    accountNumber: props.partner.bankDetails.accountNumber,
  });

  const getDisableEdit = (disableEdit) => {
    setEdit(disableEdit);
  };

  const [password, setPassword] = useState("");

  const onSave = () => {
    props.updatePartnerDetails(
      props.partner._id,
      {
        bankDetails: {
          beneficiaryName: partnerBankDetail.beneficiaryName,
          ifscCode: partnerBankDetail.ifscCode,
          accountNumber: partnerBankDetail.accountNumber,
        },
      },
      password
    );
  };

  return (
    <div
      className="bank-account"
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
        <h1>Bank Account</h1>
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
        <h3>Account Beneficiary Name</h3>
        <input
          disabled={edit}
          value={partnerBankDetail.beneficiaryName}
          onChange={(e) =>
            setPartnerBankDetails({
              ...partnerBankDetail,
              beneficiaryName: e.target.value,
            })
          }
        />
      </div>
      <div>
        <h3>IFSC Code</h3>
        <input
          disabled={edit}
          value={partnerBankDetail.ifscCode}
          onChange={(e) =>
            setPartnerBankDetails({
              ...partnerBankDetail,
              ifscCode: e.target.value,
            })
          }
        />
      </div>
      <div>
        <h3>Account No.</h3>
        <input
          disabled={edit}
          value={partnerBankDetail.accountNumber}
          onChange={(e) => {
            setPartnerBankDetails({
              ...partnerBankDetail,
              accountNumber: e.target.value,
            });
          }}
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
  BankAccount
);
