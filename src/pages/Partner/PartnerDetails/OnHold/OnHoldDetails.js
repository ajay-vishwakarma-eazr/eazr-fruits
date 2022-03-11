import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./onholddetails.scss";
import ShowDocuments from "../ShowDocuments";
import SweetAlert from "react-bootstrap-sweetalert";
import { ip } from "../../../../config/config";
import axios from "axios";
import { connect } from "react-redux";

//Actions
import { addTicket } from "../../../../store/partners/actions";
import Loader from "../../../Loader/Loader";

class OnHoldDetails extends Component {
  state = {
    success_msg: false,
    error_msg: false,
    accept: false,
    loading: false,
    response: null,
    errors: null,
    sendMail: false,
    submitLoading: false,
  };
  
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(`${ip}/admin/partners/getpartnerresponse`, {
        params: {
          serviceId: this.props.match.params.serviceId,
        },
      })
      .then((res) => {
        this.setState({
          loading: false,
          response: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          errors: err.response.data,
          errors: err.message,
        });
      });
  }

  setSuccess_Msg = (value) => {
    this.setState({ success_msg: value });  
  };

  setAccept = (value) => {
    this.setState({ accept: value });
  };

  onStatusChange = (status) => {
    // console.log(this.props.location.pa);

    this.setState({ submitLoading: true });

    let obj;

    if (status === "607fcc9c6e04510a48a07767") {
      obj = {
        partner: this.props.location.partner._id,
        serviceNumber: this.props.location.partner.serviceNumber,
        status,
        businessEmail: this.props.location.partner.businessEmail,
        sendMail: this.state.sendMail,
        updateObj: this.state.response.response,
      };
    } else {
      obj = {
        partner: this.props.location.partner._id,
        serviceNumber: this.props.location.partner.serviceNumber,
        status,
        businessEmail: this.props.location.partner.businessEmail,
        sendMail: this.state.sendMail,
      };
    }
    axios
      .post(`${ip}/admin/partners/addticket`, obj)
      .then((res) => {
        this.setState({ submitLoading: false, success_msg: true });
      })
      .catch((err) => {
        this.setState({ submitLoading: false, error_msg: true });
      });
  };

  render() {
    let data;

    if (this.state.loading === true) {
      data = (
        <Loader />
      );
    } else if (this.state.errors) {
      if (this.state.errors.error) {
        data = (
          <div>
            <h4>{this.state.errors.error}</h4>
          </div>
        );
      }
      if (this.state.errors.server) {
        data = (
          <div>
            <h4>{this.state.errors.server}</h4>
          </div>
        );
      }
    } else if (this.state.response) {
      const { response } = this.state;
      data = (
        <div>
          <div className="onhold-partner-details">
            {response.response.businessName ? (
              <div>
                <h5>Business Name</h5>
                <p>{response.response.businessName}</p>
              </div>
            ) : null}

            {response.response.businessEmail ? (
              <div>
                <h5>Business Email</h5>
                <p>{response.response.businessEmail}</p>
              </div>
            ) : null}

            {response.response.businessType ? (
              <div>
                <h5>Business Registered as</h5>
                <p>{response.response.businessType}</p>
              </div>
            ) : null}

            {response.response.businessCategory ? (
              <div>
                <h5>Business Category</h5>
                <p>{response.response.businessCategory}</p>
              </div>
            ) : null}

            {response.response.averageOrderValue ? (
              <div>
                <h5>Average Order Value</h5>
                <p>{response.response.averageOrderValue}</p>
              </div>
            ) : null}

            {response.response.paymentAtStore ? (
              <div>
                <h5>Accept Payment</h5>

                <p>{response.response.paymentAtStore}</p>
              </div>
            ) : null}

            {response.response.paymentOnline ? (
              <div>
                <h5>Accept Payment</h5>

                <p>{response.response.paymentOnline}</p>
              </div>
            ) : null}

            {response.response.pan ? (
              <div>
                <h5>PAN</h5>

                <p>{response.response.pan}</p>
              </div>
            ) : null}

            {response.response.panName ? (
              <div>
                <h5>PAN Owner's Name</h5>

                <p>{response.response.panName}</p>
              </div>
            ) : null}

            {response.response.businessPan ? (
              <div>
                <h5>Business PAN</h5>

                <p>{response.response.businessPan}</p>
              </div>
            ) : null}

            {response.response.address ? (
              <div>
                <h5>Address</h5>

                <p>{response.response.address}</p>
              </div>
            ) : null}

            {response.response.bankDetails &&
            response.response.bankDetails.beneficiaryName ? (
              <div>
                <h5>Account Beneficiary Name</h5>

                <p>{response.response.bankDetails.beneficiaryName}</p>
              </div>
            ) : null}

            {response.response.bankDetails &&
            response.response.bankDetails.ifscCode ? (
              <div>
                <h5>IFSC Code</h5>

                <p>{response.response.bankDetails.ifscCode}</p>
              </div>
            ) : null}

            {response.response.bankDetails &&
            response.response.bankDetails.accountNumber ? (
              <div>
                <h5>Account No.</h5>

                <p>{response.response.bankDetails.accountNumber}</p>
              </div>
            ) : null}
          </div>

          {response.response.businessDescription ? (
            <div className="business-description">
              <h5>Business Description</h5>
              <p>{response.response.businessDescription}</p>
            </div>
          ) : null}

          <div className="onhold-documents">
            {response.response.documents
              ? Object.keys(response.response.documents).map((key) => (
                  <ShowDocuments img={response.response.documents[key]} />
                ))
              : null}
          </div>
          <div className="send-mail">
            <input
              type="checkbox"
              checked={this.state.sendMail}
              onChange={(e) => {
                this.setState({ sendMail: e.target.checked });
              }}
            />
            <h6>Send Email</h6>
          </div>
          <div className="onhold-page-btns">
            {/* {this.state.success_msg && (
              <SweetAlert
                title="Do you want to reject ?"
                danger
                showCancel
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={() => this.setSuccess_Msg(false)}
                onCancel={() => this.setSuccess_Msg(false)}
              />
            )} */}
            {this.state.success_msg && (
              <SweetAlert
                title="Partner Details Updated."
                success
                confirmBtnBsStyle="success"
                onConfirm={() => this.setState({ success_msg: false })}
              />
            )}
            {this.state.error_msg && (
              <SweetAlert
                title="Something went wrong."
                success
                confirmBtnBsStyle="success"
                onConfirm={() => this.setState({ error_msg: false })}
              />
            )}
            <button
              className="accept"
              onClick={() => this.onStatusChange("607fcc9c6e04510a48a07767")}
            >
              Accept
            </button>
            <button
              className="reject"
              onClick={() => this.onStatusChange("607d535ce36c5111dc63fe50")}
            >
              Reject
            </button>
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <div className="onhold-back-div">
              <Link to="/partner-approval">
                <i class="mdi mdi-arrow-left-circle"></i> <h6>Go back</h6>
              </Link>
            </div>
            {data}
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    partners: state.partners,
  };
};

export default connect(mapStateToProps, { addTicket })(OnHoldDetails);
