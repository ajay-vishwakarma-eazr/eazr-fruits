import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withNamespaces } from "react-i18next";

import { connect } from "react-redux";
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader,
} from "../../store/actions";

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
    };
  }

  componentDidMount() {
    this.initMenu();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.type !== prevProps.type) {
        this.initMenu();
      }
    }
  }

  initMenu() {
    new MetisMenu("#side-menu");

    var matchingMenuItem = null;
    var ul = document.getElementById("side-menu");
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
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("mm-active");
          }
        }
      }
      return false;
    }
    return false;
  };

  render() {
    return (
      <>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link to="/partner-dashboard" className="waves-effect">
                <i className="ri-dashboard-line"></i>
                <span className="ml-1">{this.props.t("Dashboard")}</span>
              </Link>
            </li>
            
            <li>
              <Link to="/customer" className=" waves-effect">
                <i class="far far fa-user"></i>
                <span className="ml-1">{this.props.t("Customer")}</span>
              </Link>
            </li>

            <li>
              <Link to="/partner" className=" waves-effect">
                <i class="far  fas fa-user-tie"></i>
                <span className="ml-1">{this.props.t("Partner")}</span>
              </Link>
            </li>
            <li>
              <Link to="/help-and-support" className=" waves-effect">
                <i className="ri-chat-1-line"></i>
                <span className="ml-1">{this.props.t("Help and Support")}</span>
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

const mapStatetoProps = (state) => {
  return { ...state.Layout };
};

export default withRouter(
  connect(mapStatetoProps, {
    changeLayout,
    changeSidebarTheme,
    changeSidebarType,
    changeLayoutWidth,
    changePreloader,
  })(withNamespaces()(SidebarContent))
);
