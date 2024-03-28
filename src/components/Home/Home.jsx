import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import '../App/App.css';

function Home() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'HOME' });
  }, []);

  return (
    <div className="wheat">
      <Box
        sx={{
          display: 'left',
          border: 1,
          borderRadius: '16px',
          margin: '50px',
          padding: '80px',
          minHeight: '60vh',
        }}
      >
        <h1>Rural Wisconsin Events</h1>
        <p>
          You and your community deserve to live life to its fullest. We
          appreciate you and all you do.
        </p>

        <h2 className="mid-container"> You work hard. We see you.</h2>

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
      </Box>
    </div>
  );
}

export default Home;
