import React, { useState } from "react";
import Colors from "../../../components/Config/Colors";
import AuthModal from "./AuthModal";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  updatePartnerDetails,
  getPartnersTypeById,
  clearErrors,
} from "../../../store/partners/actions";
import { useEffect } from "react";
import { getPartnerCategoryBrandInformation } from "../../../store/PartnerCategory/action";
import { getPartnerTypeBrandInformation } from "../../../store/partners/PartnerType/actions/action";
const BrandInformation = (props) => {
  const { id } = useParams();
  const [edit, setEdit] = useState(true);
  const [brandInformation, setBrandInformation] = useState({
    businessName: props.partner.businessName,
    email: props.partner.email,
    partnerType: { id: props.partner.partnerType.id },
    partnerCategory: { id: props.partner.partnerCategory.id },
    averageOrderValue: props.partner.averageOrderValue,
    paymentOnline: props.partner.paymentOnline,
    paymentAtStore: props.partner.paymentAtStore,
  });

  // useEffect(() => {
  //   props.getPartnerCategoryBrandInformation();
    // props.getPartnerTypeBrandInformation();
    // props.getPartnerTypeBrand();
  // }, [brandInformation]);
  const getDisableEdit = (disableEdit) => {
    setEdit(disableEdit);
  };
  const onSave = () => {
    props.updatePartnerDetails(id, brandInformation);
    setEdit(!edit);
  };
  return (
    <div
      className="left-brand-information"
      style={{ background: !edit && Colors.infoBody }}
    >
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
          onChange={(e) => {
            setBrandInformation({
              ...brandInformation,
              partnerType: { id: parseInt(e.target.value) },
            });
          }}
          defaultValue={brandInformation.partnerType.id}
        >
          {/* {props.partnerType.data.map((e, key) => { */}

          {props.partnerTypes.brandPartnerType !== undefined
            ? props.partnerTypes.brandPartnerType.map((e, key) => {
                return (
                  <option key={key} value={e.id} defaultValue>
                    {e.type}
                  </option>
                );
              })
            : "No data"}
          {/* <option value={brandInformation.partnerType}>Private Limited</option> */}
        </select>
      </div>
      <div>
        <h3>Business Category</h3>
        <select
          
          disabled={edit}
          onChange={(e) => {
            setBrandInformation({
              ...brandInformation,
              partnerCategory: { id: parseInt(e.target.value) },
            });
          }}
          defaultValue={brandInformation.partnerCategory.id}
        >
          {props.partnerCategory.brandPartnerCategory !== undefined
            ? props.partnerCategory.brandPartnerCategory.map((e, key) => {
                return (
                  <option
                    style={{display:"flex",height:"20px", width: "100px" }}
                    // className="category-options"
                    key={key}
                    value={e.id}
                    defaultValue
                  >
                    {e.name}
                  </option>
                );
              })
            : "No data"}
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
    // partnerCategory: state.partners.partnerCategory,
    // partnerType: state.partners.partnerType,
    partner: state.partners.partner,
    errors: state.partners.errors,
    partnerCategory: state.Category,
    partnerTypes: state.Type,
  };
};

export default connect(mapStateToProps, {
  getPartnerTypeBrandInformation,
  getPartnerCategoryBrandInformation,
  updatePartnerDetails,
  clearErrors,
})(BrandInformation);
