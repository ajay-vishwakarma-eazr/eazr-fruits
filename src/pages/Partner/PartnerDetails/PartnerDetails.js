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
import ClipLoader from "react-spinners/ClipLoader";

import { useParams } from "react-router-dom";
//actions
import { getPartnerById, addTicket } from "../../../store/partners/actions";
import HoldModal from "./HoldModal";

const PartnerDetails = (props) => {
  const { id } = useParams();
  useEffect(() => {
    props.getPartnerById(id);
  }, []);

  const [success_msg, setSuccess_Msg] = useState(false);
  const [fields, setFields] = useState({
    // businessEmail: props.partners.partner.email,
    // businessName: props.partners.partner.businessName,
    // businessType: false,
    // businessCategory: false,
    // businessDescription: false,
    // averageOrderValue: false,
    // acceptPayment: false,
    // pan: false,
    // panName: false,
    // businessPan: false,
    // businessPan: false,
    // address: false,
    // pincode: false,
    // city: false,
    // state: false,
    // beneficiaryName: false,
    // ifscCode: false,
    // accountNumber: false,
    // aadharFront: false,
    // aadharBack: false,
    // authorizedPersonPan: false,
    // companyPan: false,
    // businessRegistrationProof: false,
  });

  const [remark, setRemark] = useState("");

  const onTicketSubmit = (status) => {
    let fieldsArr = [];
    Object.keys(fields).map(function (key, index) {
      if (fields[key] === true) {
        fieldsArr.push(key);
      }
    });

    props.addTicket({
      partner: props.partners.partner._id,
      serviceNumber: props.partners.partner.serviceNumber,
      // serviceId: props.paartners.paartner.serviceId,
      remark,
      status,
      queryItems: fieldsArr,
      businessEmail: props.partners.partner.businessEmail,
      sendMail: true,
    });
  };

  let data;

  if (props.partners.loading === true) {
    data = (
      <ClipLoader
        color="#fff"
        loading={true}
        // css={override}
        size={60}
      />
    );
  } else if (props.partners.partner) {
    const { partner } = props.partners;

    const statusColor = () => {
      if (partner.status === 0) {
        return "#0371e3";
      }
      if (partner.status === 1) {
        return "#eed202";
      }
      if (partner.status === 2) {
        return "#df4759";
      }
      if (partner.status === 3) {
        return "#4bb543";
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
            {partner.status}
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
                    />
                  );
                }
              )}
            </div>

            <div className="partner-btn">
              {partner.status.id !== "607fcc9c6e04510a48a07767" ? (
                <button
                  className="accept"
                  onClick={() => onTicketSubmit("607fcc9c6e04510a48a07767")}
                >
                  Accept
                </button>
              ) : null}

              <button
                className="reject"
                onClick={() => onTicketSubmit("607d535ce36c5111dc63fe50")}
              >
                Reject
              </button>

            {partner.status.id !== "607d534de36c5111dc63fe4f" ? (
             <HoldModal
                fields={fields}
                setFields={setFields}
                remark={remark}
                setRemark={setRemark}
                onTicketSubmit={onTicketSubmit}
              /> 
          ) : null}
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

export default connect(mapStateToProps, { getPartnerById, addTicket })(
  PartnerDetails
);
