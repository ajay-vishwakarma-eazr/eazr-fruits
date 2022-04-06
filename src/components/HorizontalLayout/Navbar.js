import React, { Component } from "react";
import { Collapse, Container } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

//i18n
import { withNamespaces } from "react-i18next";

import { connect } from "react-redux";
import "./navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubMenu: false,
      menu: false,
      modal: false,
      dropdownOpen: false,
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
  }

  dropdownToggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  toggle() {
    this.setState((prevState) => ({
      menu: !prevState.menu,
    }));
  }

  profileToggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({});
    }
  }

  componentDidMount() {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <div className="topnav">
          <Container fluid>
            <nav
              className="navbar navbar-light navbar-expand-lg topnav-menu"
              id="navigation"
            >
              <Collapse
                isOpen={this.props.menuOpen}
                className="navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                      <i className="ri-dashboard-line mr-2"></i>{" "}
                      {this.props.t("Admin")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/partner-dashboard">
                      <i className="fas fa-user-tie mr-2"></i>{" "}
                      {this.props.t("Partner")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user-dashboard">
                      <i className="fa fa-user mr-2"></i> {this.props.t("User")}
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/user-dashboard">
                      <i className="fa fa-user mr-2"></i> {this.props.t("User")}
                    </Link>
                  </li> */}
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/delivery-dashboard">
                      <i className="mdi mdi-truck-delivery mr-2"></i>{" "}
                      {this.props.t("Delivery")}
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/partner-type">
                      <i className="fas fa-align-justify mr-2"></i>{""}
                      {this.props.t("Types & Categories")}
                    </Link>
                  </li>

                  <Dropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.dropdownToggle}
                  >
                    <li className="nav-item">
                      {/* <Link
                      // to="/support-dashboard"
                        className="nav-link"
                      > */}


                        {/* <i className="mdi mdi-chevron-down d-none ml-1 d-xl-inline-block"></i> */}
                        {/* <i
                          className=" fas fa-headphones-alt mr-2"
                          style={{ color: "#74788d" }}
                        ></i>{" "}
                        {this.props.t("Support")}
                        <i className="mdi mdi-chevron-down d-none ml-1 d-xl-inline-block"></i>
                      </Link> */}


                      {/* <ul className="sub-menu" aria-expanded="false">
                        <li>
                          <Link to="/support-ticket">
                            {this.props.t("Need Help ?")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/faq">{this.props.t("FAQs")}</Link>
                        </li>
                      </ul> */}
                    </li>

                    <DropdownMenu>
                      <DropdownItem
                        header
                        style={{ display: "flex", height: "20px" }}
                      >
                        {" "}
                        <Link
                          style={{ color: "#74788d", height: 10 }}
                          to="/support-tickets"
                        >
                          <h6 style={{ fontSize: "15px", color: "#74788d" }}>
                            Partner Tickets
                          </h6>
                        </Link>
                      </DropdownItem>
                      <hr />
                      {/* <br/> */}
                      <DropdownItem
                        header
                        style={{
                          display: "flex",
                          height: "20px",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          style={{ color: "#74788d" }}
                          to="/support-tickets"
                        >
                          <h6 style={{ fontSize: "15px", color: "#74788d" }}>
                            User Tickets
                          </h6>
                        </Link>
                        {/* onClick=
                        {(e) => {
                          e.preventDefault();
                          this.setState({ appState: !this.state.appState });
                        }}
                        className="nav-link dropdown-toggle arrow-none" to="/#"
                        id="topnav-apps" role="button" > */}
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/support-tickets" || to="/support-dashboard">
                      <i className=" fas fa-headphones-alt mr-2"></i>{" "}
                      {this.props.t("Support")}
                    </Link>
                  </li> */}
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/logs">
                      <i className="fas fa-align-justify mr-2"></i>{" "}
                      {this.props.t("Logs")}
                    </Link>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link className="nav-link" to="#">
                      <i className="fas fa-align-justify mr-2"></i>{" "}
                      {this.props.t("PartnerCategory")}
                    </Link>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/users">
                      <i class="far far fa-user mr-2"></i>
                      {this.props.t("Customers")}
                    </Link>
                  </li> */}
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/partner">
                      <i class="far  fas fa-user-tie mr-2"></i>
                      {this.props.t("Partner")}
                    </Link>
                  </li> */}

                  {/* <li
                    className="nav-item dropdown"
                    onClick={() =>
                      this.setState({ showSubMenu: !this.state.showSubMenu })
                    }
                  >
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ appState: !this.state.appState });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-apps"
                      role="button"
                    >
                      <i class="far  fas fa-user-tie mr-2"></i>
                      {this.props.t("Partners")}{" "}
                      <div className="arrow-down"></div>
                    </Link>
                    <div
                      style={{
                        display: this.state.showSubMenu ? "block" : "none",
                      }}
                      className={
                        ("dropdown-menu fruits-nav",
                        {
                          show: this.state.appState,
                        })
                      }
                      aria-labelledby="topnav-apps"
                    >
                      <Link to="/partners" className="dropdown-item">
                        {this.props.t("Partners")}
                      </Link>
                      <Link to="/partner-approval" className="dropdown-item">
                        {this.props.t("Partner's Approval")}
                      </Link>
                    </div>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/help-and-support">
                      <i className="ri-chat-1-line mr-2"></i>
                      {this.props.t("Help and Support")}
                    </Link>
                  </li> */}
                  {/* <li className="nav-item">
                      <Link className="nav-link" to="/modules">
                        <i className="ri-sound-module-fill mr-2"></i>
                        {this.props.t("Modules")}
                      </Link>
                    </li> */}
                </ul>
              </Collapse>
            </nav>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { leftSideBarType, leftSideBarTheme } = state.Layout;
  return { leftSideBarType, leftSideBarTheme };
};

export default withRouter(
  connect(mapStatetoProps, {})(withNamespaces()(Navbar))
);
