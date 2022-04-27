import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./partnerdetails.scss";
import SweetAlert from "react-bootstrap-sweetalert";
import BrandInformation from "./BrandInformation";
import LegalInformation from "./LegalInformation";
import BankAccountDetails from "./BankAccountDetails";
import ShowDocuments from "./ShowDocuments";
import { Link } from "react-router-dom";
import BusinessDescription from "./BusinessDescription";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getPartnerCategoryBrandInformation } from "../../../store/PartnerCategory/action";
import { getPartnerTypeBrandInformation } from "../../../store/partners/PartnerType/actions/action";
// //actions
import {
  getPartnerById,
  updatePartnerDetails,
  //   addTicket,
} from "../../../store/partners/actions";
import HoldModal from "./HoldModal";
import Loader from "../../Loader/Loader";
import {clearBankDetails} from "../../../store/partners/Bank/actions"
const PartnerDetails = (props) => {
  const { id } = useParams();
  useEffect(() => {
    props.getPartnerById(id);
    props.getPartnerCategoryBrandInformation();
    props.getPartnerTypeBrandInformation();
  }, []);

  useEffect(() => {
    return () => {
      props.clearBankDetails();
      console.log("componentwillunmount");
    };  
  }, []);


  let history = useHistory();
  const [success_msg, setSuccess_Msg] = useState(false);

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
  const [remark, setRemark] = useState("");

  // const onTicketSubmit = (status) => {
  //   let fieldsArr = [];
  //   Object.keys(fields).map(function (key, index) {
  //     if (fields[key] === true) {
  //       fieldsArr.push(key);
  //     }
  //   });

  // props.addTicket({
  //   partner: props.partners.partner._id,
  //   serviceNumber: props.partners.partner.serviceNumber,
  //   // serviceId: props.paartners.paartner.serviceId,
  //   remark,
  //   // status,
  //   // queryItems: fieldsArr,
  //   businessEmail: props.partners.partner.businessEmail,
  //   sendMail: true,
  // });

  const handleAcceptPartner = () => {
    const partner = {
      status: 1,
    };
    props.updatePartnerDetails(id, partner);
    history.push("/approved-partner");
  };

  const handleRejectPartner = () => {
    const rejectPartner = {
      status: 2,
    };
    props.updatePartnerDetails(id, rejectPartner);
    history.push(`/partner-approval`);
  };

  // const handleOnholdPartner = () => {
  //   const onHoldPartner = {
  //     status: 3,
  //   };
  //   props.updatePartnerDetails(id, onHoldPartner);
  //   history.push("/partner-approval");
  // };
  let data;

  if (props.partners.loading === true) {
    data = <Loader />;
  } else if (props.partners.partner) {
    const { partner } = props.partners;

    const statusColor = () => {
      if (partner.status === 0) {
        return "#0371e3";
      }
      if (partner.status === 1) {
        return "#4bb543";
      }
      if (partner.status === 2) {
        return "#df4759";
      }
      if (partner.status === 3) {
        return "#eed202";
      }
    };
    data = (
      <>
        <div className="partner-status">
          <h1
            style={{
              color: statusColor(),
              borderColor: statusColor(),
            }}
          >
            {partner.status === 0
              ? "pending"
              : partner.status === 1
              ? "accpeted"
              : partner.status === 2
              ? "rejected"
              : "on hold"}
          </h1>
        </div>

        <div className="partner-details-div">
          <BrandInformation />
          <div className="right-partner-details-div">
            <LegalInformation />
            <BankAccountDetails id={id} />
          </div>
        </div>
        <BusinessDescription />
        <div className="document-section">
          <h1>Document Information</h1>
          <div className="document-img-btn-div">
            <div className="document-image-div">
              {Object.keys(props.partners.partner?.documents).map(
                (key, index) => {
                  return (
                    <ShowDocuments
                      img={props.partners.partner?.documents[key]}
                      docName={key.toUpperCase()}
                    />
                  );
                }
              )}
            </div>

            <div className="partner-btn">
              {partner.status.id !== 1 ? (
                <button
                  className="accept"
                  onClick={() => handleAcceptPartner()}
                >
                  Accept
                </button>
              ) : null}

              <button className="reject" onClick={() => handleRejectPartner()}>
                Reject
              </button>

              {/* <button
                className="onhold"
                style={{ background: "#eed202" }}
                onClick={() => handleOnholdPartner()}
              >
                On hold
              </button> */}

              {/* {partner.status.id !== "607d534de36c5111dc63fe4f" ? ( */}
              <HoldModal
                fields={fields}
                setFields={setFields}
                remark={remark}
                setRemark={setRemark}
              />
              {/* // onTicketSubmit={onTicketSubmit} */}
              {/* ) : null} */}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    data = (
      <div>
        <h4>Partner details not found</h4>
      </div>
    );
  }

  return (
    <>
      <div className="page-content  view-partners">
        {success_msg && (
          <SweetAlert
            title="Do you want to reject ?"
            success
            showCancel
            confirmBtnBsStyle="success"
            cancelBtnBsStyle="danger"
            onConfirm={() => setSuccess_Msg(false)}
            onCancel={() => setSuccess_Msg(false)}
          />
        )}

        <Container fluid>
          <div className="go-back-to-partner">
            <Link to="/partner-approval">
              <i className="mdi mdi-arrow-left-circle"></i> <h6>Go back</h6>
            </Link>
          </div>
          {data}
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    partners: state.partners,
  };
};

export default connect(mapStateToProps, {
  getPartnerCategoryBrandInformation,
  getPartnerTypeBrandInformation,
  getPartnerById,
  updatePartnerDetails,
  clearBankDetails,
  // addTicket,
})(PartnerDetails);
