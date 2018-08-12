import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LookUpFormContainer from './session_form/look_up_form_container';
import { AuthRoute, EmailAuthRoute } from '../util/route_util';

const App = () => (
  <div className="main-content">
    <header>
      <div className="logo" >
        <Link className="logo-link" to="/">EventSite</Link>
      </div>

      <div className="header-search">
      </div>
      <NavBarContainer />
    </header>
    <div className="main-container">
      <Switch>
        <EmailAuthRoute exact path="/signin/login" component={LoginFormContainer} />
        <EmailAuthRoute exact path="/signin/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/signin" component={LookUpFormContainer}/>
        <Route exact path="/" />
      </Switch>
    </div>
  </div>
);

export default App;

// render={() => <LookUpFormContainer found={null} />}
