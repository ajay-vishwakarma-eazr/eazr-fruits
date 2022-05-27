import React, { Component, PureComponent } from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Label,
  FormGroup,
  Alert,
} from "reactstrap";

// availity-reactstrap-validation
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
} from "availity-reactstrap-validation";
import SweetAlert from "react-bootstrap-sweetalert";
import { Link } from "react-router-dom";

// import images
import logodark from "../../assets/images/logo-dark.png";
import { postRegister } from "../../helpers/fackBackend_Helper";
import { checkLogin } from "../../store/actions";
import { ip } from "../../config/config";
import { connect } from "react-redux";
import { registerUserSuccess } from "../../store/auth/register/actions";

class Register extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      contactNumber: "",
      email: "",
      adminsRoleId: "1",
    };
  }

  registerHandler(e) {
    e.preventDefault();
    let data = {
      contactNumber: this.state.contactNumber,
      fullName: this.state.fullName,
      email: this.state.email,
      adminsRoleId: this.state.adminsRoleId,
    };
    this.props.registerUserSuccess(data);

    if (this.props.register.register !== "") {
      alert("Registration done successfully Pplease login");
      this.props.history.push("/login");
    }
    else {
      return null;
    }
  
    console.log(this.props.register);
    // this.setState({ fullName: "", contactNumber: "", email: "", adminsRoleId :""});
  }

  componentDidUpdate(){}

  render() {
    console.log("render");
    return (
      <React.Fragment>
        <div
          className="home-btn d-none d-sm-block font-size-16"
          style={{ height: "100vh" }}
        >
          <p>
            Already have an account ?{" "}
            <Link to="/login" className="font-weight-medium text-primary">
              {" "}
              Login
            </Link>{" "}
          </p>
        </div>
        <div>
          <Container fluid className="p-0">
            <Row className="no-gutters">
              <Col lg={6}>
                <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                  <div className="w-100">
                    <Row className="justify-content-center">
                      <Col lg={9}>
                        <div>
                          <div>
                            <div>
                              <Link to="#" className="logo">
                                <img src={logodark} height="30" alt="logo" />
                              </Link>
                            </div>

                            <h4 className="font-size-20 mt-5">
                              Register account
                            </h4>
                            <p className="text-muted font-size-16">
                              Register to continue to Eazr.
                            </p>
                          </div>

                          {this.props.register.register ? (
                            <Alert color="success">
                              Registration Done Successfully. Please Login.
                            </Alert>
                          ) : null}

                          {this.props.register.error ? (
                            <Alert color="danger">
                              Error : {this.props.register.error}
                            </Alert>
                          ) : null}

                          <div className=" mt-5">
                            <AvForm
                              className="form-horizontal"
                              onValidSubmit={(e) => this.registerHandler(e)}
                            >
                              <FormGroup className="auth-form-group-custom mb-4">
                                <i className="ri-user-2-line auti-custom-input-icon"></i>
                                <Label htmlFor="name" className="font-size-18">
                                  Name
                                </Label>
                                <AvField
                                  name="fullName"
                                  value={this.state.fullName}
                                  onChange={(e) => {
                                    this.setState({
                                      fullName: e.target.value,
                                    });
                                  }}
                                  type="text"
                                  className="form-control font-size-16"
                                  id="name"
                                  placeholder="Enter full name"
                                  autoComplete="off"
                                  required
                                />
                              </FormGroup>

                              <FormGroup className="auth-form-group-custom mb-4">
                                <i className="ri-mail-line auti-custom-input-icon"></i>
                                <Label
                                  htmlFor="useremail"
                                  className="font-size-18"
                                >
                                  Email
                                </Label>
                                <AvField
                                  name="email"
                                  value={this.state.email}
                                  onChange={(e) => {
                                    this.setState({
                                      email: e.target.value,
                                    });
                                  }}
                                  type="email"
                                  className="form-control font-size-16"
                                  id="useremail"
                                  placeholder="Enter email"
                                  autoComplete="off"
                                  required
                                />
                              </FormGroup>
                              {this.props.errors && (
                                <p style={{ color: "red" }}>
                                  {this.props.errors.email}
                                  {this.props.errors.msg}
                                </p>
                              )}

                              <FormGroup className="auth-form-group-custom mb-4">
                                <i className="ri-phone-line auti-custom-input-icon"></i>
                                <Label htmlFor="phone" className="font-size-18">
                                  phone
                                </Label>
                                <AvField
                                  name="contactNumber"
                                  value={this.state.contactNumber}
                                  onChange={(e) => {
                                    // this.state.phone = e.target.value;
                                    this.setState({
                                      contactNumber: e.target.value,
                                    });
                                  }}
                                  type="text"
                                  maxLength="10"
                                  className="form-control font-size-16"
                                  id="phone"
                                  placeholder="Enter phone"
                                  autoComplete="off"
                                  required
                                />
                              </FormGroup>
                              {this.props.errors && (
                                <p style={{ color: "red" }}>
                                  {this.props.errors.contactNumber}
                                  {this.props.errors.msg}
                                </p>
                              )}

                              <FormGroup className="auth-form-group-custom mb-4">
                                <i className="ri-user-settings-line auti-custom-input-icon"></i>
                                <Label
                                  htmlFor="adminsRoleId"
                                  className="font-size-18"
                                >
                                  Role
                                </Label>
                                <AvField
                                  name="adminsRoleId"
                                  value={this.state.adminsRoleId}
                                  onChange={(e) => {
                                    this.setState({
                                      adminsRoleId: e.target.value,
                                    });
                                  }}
                                  type="select"
                                  className="form-control
                                  font-size-16"
                                  id="adminsRoleId"
                                  placeholder="Select
                                  Role"
                                >
                                  <option default value="1">
                                    Super Admin
                                  </option>
                                </AvField>
                              </FormGroup>

                              {this.props.errors && (
                                <p style={{ color: "red" }}>
                                  {this.props.errors}
                                </p>
                              )}
                              <FormGroup>
                                {/* <Link to={"/login"}> */}
                                <div className="text-center">
                                  <Button
                                    color="primary"
                                    style={{ background: "#0371e3" }}
                                    className="w-md waves-effect waves-light
                                    btn-block font-size-18"
                                    type="submit"
                                  >
                                    {/* {this.props.loading
                                    ? "Loading ..."
                                    : "Register"} */}
                                    Register
                                  </Button>
                                </div>
                                {/* </Link> */}
                              </FormGroup>
                            </AvForm>
                          </div>

                          <div className="mt-5 text-center">
                            <p className=" font-size-12">
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
                <div className="authentication-bg">
                  {/* <div className="bg-overlay"></div> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    register: state.register,
  };
};

export default connect(mapStateToProps, {
  registerUserSuccess,
})(Register);

// export default Register;
