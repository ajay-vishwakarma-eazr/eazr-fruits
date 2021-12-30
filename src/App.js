import React, { Component } from "react";
import {Switch, Route, BrowserRouter as Router, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { store } from "./store";

// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";
// layouts
import VerticalLayout from "./components/VerticalLayout/";
import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";

// Import scss
import "./theme.scss";

//Actions
import { setCurrentUser, setPartnerModules } from "./store/auth/login/actions";

//Check for token
if (localStorage.accessToken) {
  //Set auth token header auth
  setAuthToken(localStorage.accessToken);
  //decode token and get user info and exp
  const decoded = jwt_decode(localStorage.accessToken);

  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded.user, localStorage.accessToken));
  // window.location.href = "/dashboard";

  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(setCurrentUser(null, null));
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getLayout = this.getLayout.bind(this);
  }


  /**
   * Returns the layout
   */
  getLayout = () => {
    let layoutCls = VerticalLayout;

    switch (this.props.layout.layoutType) {
      case "horizontal":
        layoutCls = HorizontalLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  };

  render() {
    const Layout = this.getLayout();

    return (
      <>
        <Router>
          <Switch>
            {publicRoutes.map((route, idx) => (
              <AppRoute
                path={route.path}
                layout={NonAuthLayout}
                component={route.component}
                key={idx}
                isAuthProtected={false}
              />
            ))}

            {authProtectedRoutes.map((route, idx) => (
              <AppRoute
                path={route.path}
                layout={Layout}
                component={route.component}
                key={idx}
                isAuthProtected={true}
              />
            ))}
          </Switch>
        </Router>
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    layout: state.Layout,
    auth: state.auth,
  };
};

export default withRouter(connect(mapStateToProps, null)(App));
