import React, { useState, useEffect } from "react";
import Colors from "../../../components/Config/Colors";
import AuthModal from "./AuthModal";
import { useDispatch, useSelector } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";

//actions
import { getBankDetails } from "../../../store/partners/Bank/actions";

const BankAccountDetails = ({ id }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(true);
  useEffect(() => {
    dispatch(getBankDetails(id));
  }, []);
  const { bank } = useSelector((state) => state.bank);
  const [partnerBankDetail, setPartnerBankDetails] = useState({
    beneficiaryName: bank[0]?.beneficiaryName,
    ifscCode: bank[0]?.ifscCode,
    accountNumber: bank[0]?.accountNumber,
  });

  const getDisableEdit = (disableEdit) => {
    setEdit(disableEdit);
  };
  const [password, setPassword] = useState("");
  
  const onSave = () => {
    // props.updatePartnerDetails(
    //   props.partner._id,
    //   {
    //     bankDetails: {
    //       beneficiaryName: partnerBankDetail.beneficiaryName,
    //       ifscCode: partnerBankDetail.ifscCode,
    //       accountNumber: partnerBankDetail.accountNumber,
    //     },
    //   },
    //   password
    // );
  };

  return (
    <div
      className="bank-account"
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

export default BankAccountDetails;
