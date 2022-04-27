import React, { useState, useEffect, useLayoutEffect } from "react";
import Colors from "../../../components/Config/Colors";
import AuthModal from "./AuthModal";
import { useDispatch, useSelector } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
import Loader from "../../Loader/Loader";

//actions
import {
  clearBankDetails,
  getBankDetails,
  updateBankDetails,
} from "../../../store/partners/Bank/actions";

const BankAccountDetails = ({ id }) => {
  const { bank, loading } = useSelector((state) => state.bank);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(true);
  const [partnerBankDetail, setPartnerBankDetails] = useState({
    bankName: bank[0]?.bankName,
    beneficiaryName: bank[0]?.beneficiaryName,
    ifscCode: bank[0]?.ifscCode,
    accountNumber: bank[0]?.accountNumber,
  });

  useEffect(() => {
    dispatch(getBankDetails(id));
    dispatch(clearBankDetails(id));
   
  }, [id]);

  // useEffect(() => {
  //   return () => {
  //     // dispatch(clearBankDetails());
  //      console.log("componentwillunmount");
  //   };
  // }, []);


  console.log("bank",bank[0]?.partnerId,"partnerId",id);
 
  const getDisableEdit = (disableEdit) => {
    setEdit(disableEdit);
  };
  const onSave = () => {
    dispatch(updateBankDetails(bank[0]?.id, partnerBankDetail));
    setEdit(!edit);
  };
  return (
    <>
      {loading === true ? (
        <Loader />
      ) : (
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
              <AuthModal getDisableEdit={getDisableEdit} onSave={onSave} />
            )}
          </div>
          <div>
            <h3>Bank Name</h3>
            <input
              disabled={edit}
              value={partnerBankDetail?.bankName}
              onChange={(e) =>
                setPartnerBankDetails({
                  ...partnerBankDetail,
                  bankName: e.target.value,
                })
              }
            />
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
      )}
    </>
  );
};

export default BankAccountDetails;
