import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
  const user = useSelector((store) => store.user);

  return (
    <>
      <h1>Farmer Appreciation</h1>
      <p>
        You and your community deserve to live life to its fullest. We
        appreciate you and all you do.
      </p>
      <h2>You work hard. We see you.</h2>

      <div className="home-links">
        {!user.id && (
          <>
            {/* If there's no user, show these links */}
            <p>
              <Link className="navLink" to="/events">
                Find an appreciation event near you ---
              </Link>
            </p>
            <p>
              <Link className="navLink" to="/info">
                Explore mental health information ---
              </Link>
            </p>
            <p>
              <Link className="navLink" to="/resources">
                Resources ---
              </Link>
            </p>
          </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <p>
              <Link className="navLink" to="/events">
                Find an appreciation event near you ---
              </Link>
            </p>
            <p>
              <Link className="navLink" to="/create">
                Create a meetup or event ---
              </Link>
            </p>
            <p>
              <Link className="navLink" to="/info">
                Explore mental health information ---
              </Link>
            </p>
            <p>
              <Link className="navLink" to="/resources">
                Resources ---
              </Link>
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
