import React, { useState } from "react";
import Colors from "../../../components/Config/Colors";
import AuthModal from "./AuthModal";
import SweetAlert from "react-bootstrap-sweetalert";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
//actions
import {
  updatePartnerDetails,
  clearErrors,
} from "../../../store/partners/actions";

const BrandInformation = (props) => {
  const { id } = useParams();
  const [edit, setEdit] = useState(true);
  
  const [brandInformation, setBrandInformation] = useState({
    businessName: props.partner.businessName,
    email: props.partner.email,
   partnerType: props.partner.partnerType.type,
    // partnerCategory: props.partner.partnerCategory.name,
    averageOrderValue: props.partner.averageOrderValue,
    paymentOnline: props.partner.paymentOnline,
    paymentAtStore: props.partner.paymentAtStore,
  });

  const getDisableEdit = (disableEdit) => {
    setEdit(disableEdit);
  };

  const onSave = () => {
    props.updatePartnerDetails(id,brandInformation);
  };

  return (
    <div
      className="left-brand-information"
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
        <h1>Brand Information</h1>

        {edit ? (
          <i
            className="mdi mdi-account-edit"
            onClick={() => setEdit(!edit)}
          ></i>
        ) : (
          <AuthModal getDisableEdit={getDisableEdit} onSave={onSave} />
        )}
      </div>
      <div className="brand-name">
        <h3>Brand Name</h3>
        <input
          autoFocus
          disabled={edit}
          value={brandInformation.businessName}
          onChange={(e) =>
            setBrandInformation({
              ...brandInformation,
              businessName: e.target.value,
            })
          }
        />
      </div>
      <div>
        <h3>Email</h3>
        <input
          type="email"
          disabled={edit}
          value={brandInformation.email}
          onChange={(e) =>
            setBrandInformation({
              ...brandInformation,
              email: e.target.value,
            })
          }
        />
      </div>
      <div>
        <h3>Business Registered as</h3>

        <select
          disabled={edit}
          onChange={(e) =>
            setBrandInformation({
              ...brandInformation,
              partnerType: e.target.value,
            })
          }
          defaultValue={brandInformation.partnerType}
        >
          <option value="Private Limited">Private Limited</option>
          <option value="Public Limited">Public Limited</option>
          <option value="Proprietorship">Proprietorship</option>
          <option value="Partnership">Partnership</option>
          <option value="LLP">LLP</option>
          <option value="Trust">Trust</option>
          <option value="NGO">NGO</option>
          <option value="Unregistered">Unregistered</option>
        </select>
      </div>
      <div>
        <h3>Business Category</h3>

        <select
          disabled={edit}
          onChange={(e) =>
            setBrandInformation({
              ...brandInformation,
              partnerCategory: e.target.value,
            })
          }
          defaultValue={brandInformation.partnerCategory}
        >
          <option value="Education and Learning">Education and Learning</option>
          <option value="Health and Fitness">Health and Fitness</option>
        </select>
      </div>

      <div>
        <h3>Average Order Value</h3>

        <select
          disabled={edit}
          onChange={(e) =>
            setBrandInformation({
              ...brandInformation,
              averageOrderValue: e.target.value,
            })
          }
          defaultValue={brandInformation.averageOrderValue}
        >
          <option value="₹1-₹500">₹1 - ₹500</option>
          <option value="₹501-₹1000">₹501 - ₹1000</option>
          <option value="₹1001-₹3000">₹1001 - ₹3000</option>
          <option value="₹3001-₹5000">₹3001 - ₹5000</option>
          <option value="₹5001 & above">₹5001 & Above</option>
        </select>
      </div>
      <div>
        <h3>Accept Payment</h3>
        <div className="accept-payment">
          <div>
            <input
              disabled={edit}
              type="checkbox"
              checked={brandInformation.paymentAtStore}
              onChange={(e) => {
                setBrandInformation({
                  ...brandInformation,
                  paymentAtStore: e.target.checked,
                });
              }}
            />
            <label htmlFor="">At Store </label>
          </div>
          <div>
            <input
              disabled={edit}
              type="checkbox"
              checked={brandInformation.paymentOnline}
              onChange={(e) => {
                setBrandInformation({
                  ...brandInformation,
                  paymentOnline: e.target.checked,
                });
              }}
            />
            <label htmlFor=""> Web/App</label>
          </div>
        </div>
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
  BrandInformation
);
