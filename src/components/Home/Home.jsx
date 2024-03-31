import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import './Home.css';

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
          borderColor: 'honeydew',
          margin: '50px',
          padding: '80px',
          minHeight: '60vh',
          backgroundColor: 'honeydew',
        }}
      >
        <Typography variant="h3" fontWeight={600}>
          Rural Wisconsin Events
        </Typography>

        <p className="body">
          You and your community deserve to live life to its fullest. We
          appreciate you and all you do.
        </p>
        <Box
          sx={{
            border: 1,
            borderRadius: '8px',
            borderColor: 'honeydew',
            marginLeft: '285px',
            backgroundColor: 'hotpink',
            display: 'inline-block',
            marginTop: '50px',
          }}
        >
          <h2> You work hard. We see you.</h2>
        </Box>
        <img className="field-image" src="images/field.jpg"></img>

        <div className="link-box">
          {!user.id && (
            <>
              {/* If there's no user, show these links */}
              <p>
                <Link className="link" to="/events">
                  Find an appreciation event near you{' '}
                  <TrendingFlatIcon
                    sx={{ verticalAlign: 'middle', color: 'black' }}
                  />
                </Link>
              </p>
              <p>
                <Link className="link" to="/info">
                  Explore mental health information{' '}
                  <TrendingFlatIcon
                    sx={{ verticalAlign: 'middle', color: 'black' }}
                  />
                </Link>
              </p>
              <p>
                <Link className="link" to="/resources">
                  Resources{' '}
                  <TrendingFlatIcon
                    sx={{ verticalAlign: 'middle', color: 'black' }}
                  />
                </Link>
              </p>
            </>
          )}

          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
              <p>
                <Link className="link" to="/events">
                  Find an appreciation event near you{' '}
                  <TrendingFlatIcon
                    sx={{ verticalAlign: 'middle', color: 'black' }}
                  />
                </Link>
              </p>
              <p>
                <Link className="link" to="/create">
                  Create a meetup or event{' '}
                  <TrendingFlatIcon
                    sx={{ verticalAlign: 'middle', color: 'black' }}
                  />
                </Link>
              </p>
              <p>
                <Link className="link" to="/info">
                  Explore mental health information{' '}
                  <TrendingFlatIcon
                    sx={{ verticalAlign: 'middle', color: 'black' }}
                  />
                </Link>
              </p>
              <p>
                <Link className="link" to="/resources">
                  Resources{' '}
                  <TrendingFlatIcon
                    sx={{ verticalAlign: 'middle', color: 'black' }}
                  />
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
