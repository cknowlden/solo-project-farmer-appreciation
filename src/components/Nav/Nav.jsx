import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);
  const title = useSelector((store) => store.title);

  return (
    <div className="nav">
      <h2 className="nav-title">{title}</h2>

      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          <>
            {/* If there's no user, show login/registration links */}
            <p className="userLog">Welcome, Guest</p>
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
            <p className="userLog">Logged in as: {user.username}</p>

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
