import React, { Component } from "react";
import { Row, Col, Button, Container, Label, FormGroup } from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

import { Link } from "react-router-dom";

// import images
import logodark from "../../assets/images/logo-dark.png";
import { postRegister } from "../../helpers/fackBackend_Helper";
import { checkLogin } from "../../store/actions";
import { ip } from "../../config/config";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      phone: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  registerHandler(e) {
    e.preventDefault();
    let data = {
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
    };

    postRegister(`${ip}/admin/auth/registeradmin`, data);
    console.log("data >>", data);
    // axios.post
    // console.log("email >>", this.state.email);
  }

  componentDidMount() {
    fetch(`${ip}/admin/auth/registeradmin`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            value: result.value,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidMount() {
    // this.props.registerUserFailed("");
    // this.props.apiError("");
    document.body.classList.add("auth-body-bg");
  }

  render() {
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

                          {/* {this.props.successful && (
                            <Alert color="success">
                              Registration Done Successfully. Please Login.
                            </Alert>
                          )} */}

                          <div className=" mt-5">
                            <AvForm className="form-horizontal">
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
                                    this.state.email = e.target.value;
                                  }}
                                  validate={{ email: true, required: true }}
                                  type="email"
                                  className="form-control font-size-16"
                                  id="useremail"
                                  placeholder="Enter email"
                                  autoComplete="off"
                                />
                              </FormGroup>

                              <FormGroup className="auth-form-group-custom mb-4">
                                <i className="ri-user-2-line auti-custom-input-icon"></i>
                                <Label htmlFor="phone" className="font-size-18">
                                  phone
                                </Label>
                                <AvField
                                  name="phone"
                                  value={this.state.phone}
                                  onChange={(e) => {
                                    this.state.phone = e.target.value;
                                  }}
                                  type="text"
                                  className="form-control font-size-16"
                                  id="phone"
                                  placeholder="Enter phone"
                                  autoComplete="off"
                                />
                              </FormGroup>
                              {this.props.errors && (
                                <p style={{ color: "red" }}>
                                  {this.props.errors.phone}
                                  {this.props.errors.msg}
                                </p>
                              )}

                              <FormGroup className="auth-form-group-custom mb-4">
                                <i className="ri-lock-2-line auti-custom-input-icon"></i>
                                <Label
                                  htmlFor="userpassword"
                                  className="font-size-18"
                                >
                                  Password
                                </Label>
                                <AvField
                                  name="password"
                                  value={this.state.password}
                                  onChange={(e) => {
                                    this.state.password = e.target.value;
                                  }}
                                  type="password"
                                  className="form-control font-size-16"
                                  id="userpassword"
                                  placeholder="Enter password"
                                />
                              </FormGroup>
                              {this.props.errors && (
                                <p style={{ color: "red" }}>
                                  {this.props.errors.password}
                                </p>
                              )}
                              <Link to={"/login"}>
                                <div className="text-center">
                                  <Button
                                    onClick={(e) => this.registerHandler(e)}
                                    color="primary"
                                    style={{ background: "#0371e3" }}
                                    className="w-md waves-effect waves-light btn-block font-size-18"
                                    type="submit"
                                  >
                                    {/* {this.props.loading
                                    ? "Loading ..."
                                    : "Register"} */}
                                    Register
                                  </Button>
                                </div>
                              </Link>
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

export default Register;
