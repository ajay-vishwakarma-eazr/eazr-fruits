import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  auth,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (isAuthProtected && !auth.isAuthenticated) {
        return (
          <Redirect
            to={{ 
              pathname: "/login", 
              state: { from: props.location } }}
          />
        );
      } else if (!isAuthProtected && auth.isAuthenticated) {
        return (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: props.location },
            }}
          />
        );
      }
      return (
        <>
        <Layout>
          <Component 
          {...props} />
        </Layout>
        </>
      );
    }}
  />
);

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(AppRoute);
