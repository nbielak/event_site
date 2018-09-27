import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({currentUser, logout}) => {
  const loggedInNavBar = () => <nav id="nav-bar" className="nav-bar">
      <Link className="nav-bar-link" to="/">
        browse events
      </Link>
      <div className="nav-bar-link" to="/">
        {currentUser.firstName}
        <div className="nav-bar-drop-down">
          <a className="nav-bar-drop-down-list-item" href="/">
            Browse Events
          </a>
          <a className="nav-bar-drop-down-list-item" href={`/#/users/${currentUser.id}/profile`}>
            Tickets
          </a>
          <a className="nav-bar-drop-down-list-item" href={`/#/users/${currentUser.id}/profile`}>
            Saved
          </a>
          <a className="nav-bar-drop-down-list-item" href={`/#/users/${currentUser.id}/profile`}>
            Following
          </a>
          <a className="nav-bar-drop-down-list-item" href="/#/myevents">
            Manage Events
          </a>
          <a className="nav-bar-drop-down-list-item" href="/#/">
            Account Settings
          </a>
        <button id="logout-button" className="nav-bar-drop-down-list-item" onClick={() => logout()}>
            Log Out
          </button>
        </div>
      </div>
      <Link className="nav-bar-link" to="/create">
        create event
      </Link>
    </nav>;

  const loggedOutNavBar = () => (
    <nav className = "nav-bar">
      <Link className="nav-bar-link" to="/">browse events</Link>
      <Link className="nav-bar-link" to="/signin">sign in</Link>
      <Link className="nav-bar-link" to="/create">create event</Link>
    </nav>
  );

  return currentUser ? loggedInNavBar() : loggedOutNavBar();
};

export default NavBar;
