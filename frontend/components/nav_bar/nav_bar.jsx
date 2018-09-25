import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({currentUser, logout}) => {
  const loggedInNavBar = () => (
    <nav className = "nav-bar">
      <Link className="nav-bar-link" to="/">browse events</Link>
      <div className="nav-bar-link" to="/">{currentUser.firstName}
        <ul className="nav-bar-drop-down">
          <li className="nav-bar-drop-down-list-item">
            <Link className="link" to="/">Browse Events</Link>
          </li>
          <li className="nav-bar-drop-down-list-item">
            <Link className="link" to={`/users/${currentUser.id}/profile`}>Tickets</Link>
          </li>
          <li className="nav-bar-drop-down-list-item">
            <Link className="link" to={`/users/${currentUser.id}/profile`}>Saved</Link>
          </li>
          <li className="nav-bar-drop-down-list-item">
            <Link className="link" to={`/users/${currentUser.id}/profile`}>Following</Link>
          </li>
          <li className="nav-bar-drop-down-list-item">
            <Link className="link" to='/myevents'>Manage Events</Link>
          </li>
          <li className="nav-bar-drop-down-list-item">
            <Link className="link" to='/'>Account Settings</Link>
          </li>
          <li className="nav-bar-drop-down-list-item">
            <button className="logout-button link" onClick={() => logout()}>Log Out</button>
          </li>
        </ul>
      </div>
      <Link className="nav-bar-link" to="/create">create event</Link>

    </nav>
  );

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
