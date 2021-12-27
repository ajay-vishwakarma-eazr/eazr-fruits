import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  FormGroup,
} from "reactstrap";

import partnerWeb from "../../assets/images/logo-sm-dark.png";
import registration from "../../assets/images/registration.png";
import brands from "../../assets/images/brands.png";
import eazrMe from "../../assets/images/eazrme.png";
import termsOfUse from "../../assets/images/temsofuse.png";
import privacyPolicy from "../../assets/images/privacypolicy.png";
// reactstrap

//i18n
import { withNamespaces } from "react-i18next";

// Import menuDropdown

import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

//Import Logos
import logoSmLight from "../../assets/images/logo-sm-light.png";
import logoLight from "../../assets/images/logo-light.png";
import logoDark from "../../assets/images/logo-dark.png";
import logoSmDark from "../../assets/images/logo-sm-dark.png";

// Redux Store
import { toggleRightSidebar } from "../../store/actions";
import DigitalClock from "../DigitalClock/DigitalClock";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      isMegaMenu: false,
      isProfile: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleRightbar = this.toggleRightbar.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    
  }

  toggleSearch = () => {
    this.setState({ isSearch: !this.state.isSearch });
  };
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.openLeftMenuCallBack();
  }

  /**
   * Toggles the sidebar
   */
  toggleRightbar() {
    this.props.toggleRightSidebar();
  }

  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex align-items-center">
              <div className="navbar-brand-box">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logoSmDark} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoDark} alt="" height="20" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logoSmLight} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLight} alt="" height="20" />
                  </span>
                </Link>
              </div>

              <Button
                color="none"
                type="button"
                size="sm"
                onClick={this.toggleMenu}
                className="px-3 font-size-24 d-lg-none header-item"
                data-toggle="collapse"
                data-target="#topnav-menu-content"
              >
                <i className="ri-menu-2-line align-middle"></i>
              </Button>

              <Form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder={this.props.t("Search")}
                  />
                  <span
                    className="ri-search-line"
                    style={{ marginTop: "-0.25rem" }}
                  ></span>
                </div>
              </Form>
            </div>

            <div className="d-flex">
              <div className="dropdown d-inline-block d-lg-none ml-2">
                <Button
                  color="none"
                  type="button"
                  onClick={() => {
                    this.setState({ isSearch: !this.state.isSearch });
                  }}
                  className="header-item noti-icon waves-effect"
                  id="page-header-search-dropdown"
                >
                  <i className="ri-search-line"></i>
                </Button>
                <div
                  className={
                    this.state.isSearch
                      ? "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show"
                      : "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                  }
                  aria-labelledby="page-header-search-dropdown"
                >
                  <Form className="p-3" onSubmit={this.handleSubmit}>
                    <FormGroup className="m-0">
                      <InputGroup>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder={this.props.t("Search")}
                        />
                        <InputGroupAddon addonType="append">
                          <Button color="primary" type="submit">
                            <i className="ri-search-line"></i>
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Form>
                </div>
              </div>
              <DigitalClock />
              <Dropdown
                isOpen={this.state.isProfile}
                toggle={() =>
                  this.setState({ isProfile: !this.state.isProfile })
                }
                className="d-none d-lg-inline-block ml-1"
              >
                <DropdownToggle
                  tag="button"
                  type="button"
                  className="btn header-item noti-icon waves-effect"
                >
                  {/* <i className="ri-apps-2-line"></i> */}
                  <i className="fas fa-globe"></i>
                </DropdownToggle>
                <DropdownMenu
                  right
                  className="dropdown-menu-lg"
                  style={{ width: "30rem" }}
                >
                  <div className="px-lg-2">
                    <Row className="no-gutters">
                      <Col>
                        <a
                          className="dropdown-icon-item"
                          href="http://partner.eazr.in"
                        >
                          <img src={partnerWeb} alt="Github" />
                          <span>{this.props.t("Partner's Web")}</span>
                        </a>
                      </Col>
                      <Col>
                        <a
                          className="dropdown-icon-item"
                          href="http://web.eazr.in/register"
                        >
                          <img src={registration} alt="bitbucket" />
                          <span>{this.props.t("Register as Partner")}</span>
                        </a>
                      </Col>
                      <Col>
                        <a
                          className="dropdown-icon-item"
                          href="http://enroll.eazr.in"
                        >
                          <img src={brands} alt="dribbble" />
                          <span>{this.props.t("For Merchants")}</span>
                        </a>
                      </Col>
                    </Row>

                    <Row className="no-gutters">
                      <Col>
                        <a className="dropdown-icon-item" href="http://eazr.me">
                          <img src={eazrMe} alt="dropbox" />
                          <span>{this.props.t("Eazr Me")}</span>
                        </a>
                      </Col>
                      <Col>
                        <a
                          className="dropdown-icon-item"
                          href="https://eazr.in/terms-of-use/"
                        >
                          <img src={termsOfUse} alt="mail_chimp" />
                          <span>{this.props.t("Terms of Use")}</span>
                        </a>
                      </Col>
                      <Col>
                        <a
                          className="dropdown-icon-item"
                          href="https://eazr.in/privacy-policy/"
                        >
                          <img src={privacyPolicy} alt="slack" />
                          <span>{this.props.t("Privacy Policy")}</span>
                        </a>
                      </Col>
                    </Row>
                  </div>
                </DropdownMenu>
              </Dropdown>
              <div className="dropdown d-none d-lg-inline-block ml-1">
                <Button
                  type="button"
                  color="none"
                  onClick={this.toggleFullscreen}
                  className="header-item noti-icon waves-effect"
                  data-toggle="fullscreen"
                >
                  <i className="ri-fullscreen-line"></i>
                </Button>
              </div>

              <NotificationDropdown />

              <ProfileMenu />

              <div
                onClick={this.toggleRightbar}
                className="dropdown d-inline-block"
              >
                <Button
                  type="button"
                  color="none"
                  className="header-item noti-icon right-bar-toggle waves-effect"
                >
                  {/* <i className="ri-settings-2-line"></i> */}
                </Button>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { layoutType } = state.Layout;
  return { layoutType };
};

export default connect(mapStatetoProps, { toggleRightSidebar })(
  withNamespaces()(Header)
);
