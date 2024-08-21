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
        {/* If an admin is logged in, show these links */}
        {user.role_type === 'admin' && (
          <>
            <p className="userLog">Logged in as: {user.username}</p>
            <div>
              {/* Commented out temporarily for actual live event */}
              {/* <Link className="navLink" to="/">
                Home
              </Link> */}

              <Link className="navLink" to="/events">
                Events
              </Link>

              {/* Commented out temporarily for actual live event */}
              {/* <Link className="navLink" to="/create">
                Create Event
              </Link>

              <Link className="navLink" to="/info">
                Information
              </Link>

              <Link className="navLink" to="/resources">
                Resources
              </Link> */}

              <Link className="navLink" to="/admin">
                Admin
              </Link>

              <LogOutButton className="navLink" />
            </div>
          </>
        )}

        {/* If no user is logged in, show these links */}
        {!user.id && (
          <>
            {/* If there's no user, show login/registration links */}

            {/* Commented out temporarily for actual live event */}
            <p className="userLog">Welcome, Guest</p>
            <div>
              <Link className="navLink" to="/login">
                Log In
              </Link>
              {/* <Link className="navLink" to="/">
                Home
              </Link> */}
              <Link className="navLink" to="/events">
                Events
              </Link>
              {/* <Link className="navLink" to="/info">
                Information
              </Link>
              <Link className="navLink" to="/resources">
                Resources
              </Link> */}
            </div>
          </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && user.role_type !== 'admin' && (
          <>
            <p className="userLog">Logged in as: {user.username}</p>

            <div>
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
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
