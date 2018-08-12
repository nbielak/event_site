import React from 'react';
import {Redirect, withRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, loggedIn, exact,}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const EmailAuth = ({component: Component, path, loggedIn, email, exact,}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn && email ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser), email: Boolean(state.session.lookUp.email)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const EmailAuthRoute = withRouter(connect(mapStateToProps, null)(EmailAuth));
