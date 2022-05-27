import React, { Component } from "react";
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
import { connect } from "react-redux";
import { logoutUser } from "../../../store/auth/login/actions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
//i18n
import { withNamespaces } from "react-i18next";
import { FetchAdminProfile } from "../../../store/adminprofile/actions/action";

// users
import nouser from "../../../assets/images/nouser.png";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import AdminProfile from "../../../pages/Admin/AdminProfile";

class ProfileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      profilePhoto: "",
      fullName: "",
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }
componentDidMount() {
  this.props.FetchAdminProfile();
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

  handleLogout = () => {
    localStorage.removeItem("accessToken");
    this.props.logoutUser();
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    let username = "Admin";
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"));
      const uNm = obj.email.split("@")[0];
      username = uNm.charAt(0).toUpperCase() + uNm.slice(1);
    }
  
    const data = {
      profilePhoto: this.props.profilePhoto,
      fullName: this.props.fullName,  
    };

    return (
      <>
        <Dropdown
          isOpen={this.state.menu}
          toggle={this.toggle}
          className="d-inline-block user-dropdown"
        >
          <DropdownToggle
            tag="button"
            className="btn header-item waves-effect"
            id="page-header-user-dropdown"
          >
            <img
              className="rounded-circle header-profile-user mr-1"
              src={
                this.props.admin.admin.profilePhoto === null
                  ? nouser
                  : this.props.admin.admin.profilePhoto
              }
              // src={nouser}
              alt="avatar"
            />
            <span className="d-none d-xl-inline-block ml-1 text-transform">
              {this.props.admin.admin.fullName}
            </span>
            <i className="mdi mdi-chevron-down d-none ml-1 d-xl-inline-block"></i>
          </DropdownToggle>

          <DropdownMenu right>
            {/* <Link to="Admin-Profile"> */}
            <DropdownItem onClick={this.profileToggle}>
              <i className="ri-user-line align-middle mr-1"></i>
              {this.props.t("Profile")}
              <Modal
                funk={true}
                isOpen={this.state.modal}
                toggle={this.profileToggle}
                centered
              >
                <ModalHeader toggle={this.profileToggle}>Profile</ModalHeader>
                <ModalBody>
                  <AdminProfile />
                </ModalBody>
              </Modal>
            </DropdownItem>
            {/* </Link> */}
            {/* <DropdownItem href="Admin-profile">
              <i className="ri-wallet-2-line align-middle mr-1"></i>{" "}
              {this.props.t("My Wallet")}
            </DropdownItem> */}
            {/* <DropdownItem className="d-block" href="#">
              <span className="badge badge-success float-right mt-1">11</span>
              <i className="ri-settings-2-line align-middle mr-1"></i>{" "}
              {this.props.t("Settings")}
            </DropdownItem> */}
            {/* <DropdownItem href="#">
              <i className="ri-lock-unlock-line align-middle mr-1"></i>{" "}
              {this.props.t("Lock screen")}
            </DropdownItem> */}
            <DropdownItem divider />
            <DropdownItem className="text-danger" onClick={this.handleLogout}>
              <i className="ri-shut-down-line align-middle mr-1 text-danger"></i>{" "}
              {this.props.t("Logout")}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    admin: state.AdminProfile,
  };
};

export default withRouter(
  connect(mapStateToProps, { logoutUser, FetchAdminProfile })(
    withNamespaces()(ProfileMenu)
  )
);
