import React, { Component } from "react";
import { Row, Col, Container, Label, FormGroup } from "reactstrap";

// Redux
import { connect } from "react-redux";

import { Link, withRouter } from "react-router-dom";

import OTPModal from "./OTPModal";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// actions
import {
  login,
  verify,
  // resend,
  showOtpModal,
  hideOtpModal,
  clearError,
} from "../../store/auth/login/actions";

// import images
import logodark from "../../assets/images/logo-light1.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      otp: "",
      loading: false,
      errors: {},
      message: "Enter something",
    };

    this.onVerify = this.onVerify.bind(this);
  }

  static getDerivedStateFromProps = (nextProps, nextState) => {
    let state = { errors: {}, loading: false };

    if (nextProps.auth.loading === true) {
      state.loading = true;
    }

    if (nextProps.auth.errors) {
      state.errors = nextProps.auth.errors;
    }
    return state;
  };

  componentDidMount() {
    document.body.classList.add("auth-body-bg");
    this.props.clearError();
  }

  componentWillUnmount() {
    document.body.classList.remove("auth-body-bg");
  }

  onLogin = (e) => {
    e?.preventDefault();
    if (this.state.phone === "") {
      // alert("enter number" );
      return {};
    } else {
      this.props.login(this.state.phone, this.state.otp, this.props.history);
    }
  };

  onVerify = () => {
    if (this.state.phone === "") {
      return null;
    } else {
      this.props.verify(this.state.phone, this.state.otp, this.props.history);
    }
  };

  onOtpChange = (value) => {
    this.setState({
      otp: value,
    });
  };

  render() {
    // console.log("error", this.props.auth.errors.message);
    return (
      <>
        {/* <div className="home-btn d-none d-sm-block" style={{ height: "100vh" }}>
          <p className="font-size-16">
            Don't have an account ?
            <Link to="/register" className="font-weight-medium text-primary">
              Register
            </Link>
          </p>
        </div> */}

        <div>
          <Container fluid className="p-0">
            <Row className="no-gutters">
              <Col lg={6}>
                <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                  <div className="w-100">
                    <Row className="justify-content-center">
                      <Col lg={9}>
                        <div>
                          <div className="">
                            <div>
                              <Link to="/" className="logo">
                                <img src={logodark} height="30" alt="logo" />
                              </Link>
                            </div>

                            <h4 className="font-size-20 mt-5">
                              Welcome Back !
                            </h4>
                            <p className="text-muted font-size-16">
                              Sign in to continue to Eazr.
                            </p>
                          </div>

                          <div className=" mt-5">
                            <AvForm className="form-horizontal">
                              <FormGroup className="auth-form-group-custom mb-4">
                                <i className="ri-user-2-line auti-custom-input-icon"></i>
                                <Label htmlFor="phone" className="font-size-18">
                                  Phone
                                </Label>
                                <AvField
                                  name="phone"
                                  value={this.state.phone}
                                  onChange={(e) =>
                                    this.setState({
                                      phone: e.target.value,
                                    })
                                  }
                                  type="number"
                                  autoFocus={true}
                                  className="form-control form-control-number font-size-16"
                                  id="phone"
                                  placeholder="Enter phone"
                                  // minlength="10"
                                  required
                                />

                                <h6
                                  style={{
                                    color: "red",
                                    position: "absolute",
                                    marginTop: "-15px",
                                  }}
                                >
                                  {this.props.auth.errors ===
                                  "No Such Admin Available"
                                    ? this.props.auth.errors
                                    : null}
                                </h6>
                                {this.props.auth.errors &&
                                this.props.auth.errors.server ? (
                                  <h6 style={{ color: "red" }}>
                                    {this.props.auth.errors.server}
                                  </h6>
                                ) : null}
                              </FormGroup>

                              <OTPModal
                                phone={this.state.phone}
                                history={this.props.history}
                                loading={this.state.loading}
                                show={this.props.auth.showOtpModal}
                                onLogin={this.onLogin}
                                onVerify={this.onVerify}
                                hideOtpModal={this.props.hideOtpModal}
                                errors={this.props.auth.errors}
                                onOtpChange={this.onOtpChange}
                                otp={this.state.otp}
                                verifyLoading={this.props.auth.verifyLoading}
                              />
                            </AvForm>
                          </div>

                          <div className="mt-5 text-center">
                            <p className="font-size-12">
                              Terms & Conditions Apply
                            </p>
                            <p className="font-size-16">
                              @{new Date().getFullYear()} All Right Reserved
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="authentication-bg"></div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // const { loginError, errors, successful } = state.auth;
  return {
    auth: state.auth,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    login,
    verify,
    // resend,
    showOtpModal,
    hideOtpModal,
    clearError,
  })(Login)
);
