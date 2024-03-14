import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Prime Solo Project</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          <>
            {/* If there's no user, show login/registration links */}
            <Link className="navLink" to="/login">
              Login
            </Link>
            <Link className="navLink" to="/">
              Home
            </Link>
            <Link className="navLink" to="/events">
              Events
            </Link>
            <Link className="navLink" to="/info">
              Information
            </Link>
            <Link className="navLink" to="/resources">
              Resources
            </Link>
          </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/">
              Home
            </Link>

            <Link className="navLink" to="/events">
              Events
            </Link>

            <Link className="navLink" to="/create">
              Create Event
            </Link>

            <Link className="navLink" to="/info">
              Information
            </Link>

            <Link className="navLink" to="/resources">
              Resources
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
