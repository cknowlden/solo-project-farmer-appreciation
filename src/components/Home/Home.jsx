import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box, Typography } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import './Home.css';
import { green } from '@mui/material/colors';

function Home() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  console.log('Home user', user.role_type);

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'HOME' });
    dispatch({ type: 'CLEAR_LOGIN_ERROR' });
  }, []);

  return (
    <div className="wheat">
      <Box
        sx={{
          display: 'left',
          borderRadius: '16px',
          borderColor: 'honeydew',
          marginBottom: '70px',
          marginLeft: '18%',
          marginRight: '18%',
          marginTop: '75px',
          minHeight: '70vh',
          backgroundColor: 'honeydew',
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            marginTop={4}
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <item>
              <Typography variant="h3" fontWeight={600} marginLeft={10}>
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
                  borderColor: 'darkgoldenrod',
                  marginLeft: '285px',
                  backgroundColor: 'darkgoldenrod',
                  display: 'inline-block',
                  marginTop: '100px',
                }}
              >
                <Typography variant="h5" fontWeight={600} margin={2}>
                  You work hard. We see you.
                </Typography>
              </Box>
            </item>

            <div className="link-box">
              {!user.id && (
                <>
                  {/* If there's no user, show these links */}
                  <p>
                    <Link className="home-link" to="/events">
                      Find an appreciation event near you{' '}
                      <TrendingFlatIcon
                        sx={{ verticalAlign: 'middle', color: 'black' }}
                      />
                    </Link>
                  </p>
                  <p>
                    <Link className="home-link" to="/info">
                      Explore mental health information{' '}
                      <TrendingFlatIcon
                        sx={{ verticalAlign: 'middle', color: 'black' }}
                      />
                    </Link>
                  </p>
                  <p>
                    <Link className="home-link" to="/resources">
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
                    <Link className="home-link" to="/events">
                      Find an appreciation event near you{' '}
                      <TrendingFlatIcon
                        sx={{ verticalAlign: 'middle', color: 'black' }}
                      />
                    </Link>
                  </p>
                  <p>
                    <Link className="home-link" to="/create">
                      Create a meetup or event{' '}
                      <TrendingFlatIcon
                        sx={{ verticalAlign: 'middle', color: 'black' }}
                      />
                    </Link>
                  </p>
                  <p>
                    <Link className="home-link" to="/info">
                      Explore mental health information{' '}
                      <TrendingFlatIcon
                        sx={{ verticalAlign: 'middle', color: 'black' }}
                      />
                    </Link>
                  </p>
                  <p>
                    <Link className="home-link" to="/resources">
                      Resources{' '}
                      <TrendingFlatIcon
                        sx={{ verticalAlign: 'middle', color: 'black' }}
                      />
                    </Link>
                  </p>
                </>
              )}
            </div>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              marginLeft: '700px',
              marginTop: '-360px',
            }}
          >
            <img className="field-image" src="images/field.jpg"></img>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
