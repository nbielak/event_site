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
import EventIndexContainer from './events/event_index_container';
import EventShowContainer from './events/event_show_container';
import CreateEventFormContainer from './events/create_event_form_container';
import ManageEventsContainer from './events/manage_events_container';
import EditEventFormContainer from './events/edit_event_form_container';
import CreateUserTicketFormContainer from './user_tickets/create_user_ticket_form_container';
import RedirectToMain from './redirect_to_main';
import PageFooter from './footer/footer';
import { AuthRoute, ProtectedRoute, EmailAuthRoute } from '../util/route_util';

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
        <Route exact path="/" component={EventIndexContainer}/>
        <EmailAuthRoute exact path="/signin/login" component={LoginFormContainer} />
        <EmailAuthRoute exact path="/signin/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/signin" component={LookUpFormContainer}/>
        <ProtectedRoute exact path="/create" component={CreateEventFormContainer}/>
        <ProtectedRoute exact path="/myevents" component={ManageEventsContainer}/>
        <ProtectedRoute exact path="/events/:eventId/edit" component={EditEventFormContainer} />
        <Route exact path="/events/:eventId" component={EventShowContainer} />
        <Route component={RedirectToMain} />
      </Switch>
    </div>

    <PageFooter/>
  </div>
);

export default App;
