import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Button, Box, Grid, IconButton, Typography } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import './LoginForm.css';

function LoginForm() {
  const user = useSelector((store) => store.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();
  const [triedUser, setTriedUser] = useState(false);
  const navHome = () => {
    history.push('/');
  };

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'LOG IN' });
  }, []);

  useEffect(() => {
    if (user && user.id && user.role) {
      history.push('/');
    }
  }, [user]);

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
      // navHome();
    } else {
      setTriedUser(true);

      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <div className="wheat-login">
      <Box
        sx={{
          display: 'left',
          border: 1,
          borderRadius: '16px',
          borderColor: 'honeydew',
          margin: '50px',
          marginLeft: '18%',
          marginRight: '18%',
          minHeight: '60vh',
          backgroundColor: 'honeydew',
        }}
      >
        <div className="insert-bg">
          <form className="formPanel" onSubmit={login}>
            {errors.loginMessage && (
              <div className="alert" role="alert">
                <h3>{`${errors.loginMessage} `}</h3>
                <center>
                  <button onClick={navHome}>Continue as Guest</button>
                </center>
              </div>
            )}
            <center>
              <h1>Please Log In</h1>
            </center>
            <div className="input-section">
              <div className="input-login">
                <label htmlFor="username">
                  Email:
                  <p>
                    <input
                      className="inputField"
                      placeholder="Email address"
                      type="text"
                      name="username"
                      required
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </p>
                </label>
              </div>
              <div className="input-login">
                <label htmlFor="password">
                  Password:
                  <p>
                    <input
                      className="inputField"
                      placeholder="Password"
                      type="password"
                      name="password"
                      required
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </p>
                </label>
              </div>
              <center>
                <button
                  type="button"
                  className="btn btn_asLink"
                  // onClick={() => {
                  //   history.push('/');
                  // }}
                >
                  Forgot password?
                </button>
              </center>
              <div>
                <br />
                <center>
                  <Button
                    type="submit"
                    value="Log In"
                    variant="contained"
                    size="large"
                  >
                    Log In
                  </Button>
                </center>
              </div>
              <div className="link">
                <Link to="/register">
                  Don't have an account? Register HERE
                  <TrendingFlatIcon
                    sx={{
                      verticalAlign: 'middle',
                      color: 'black',
                      marginLeft: '10px',
                    }}
                  />
                </Link>
                <br />
                <br />
                <Link to="/">
                  Continue as GUEST
                  <TrendingFlatIcon
                    sx={{
                      verticalAlign: 'middle',
                      color: 'black',
                      marginLeft: '10px',
                    }}
                  />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Box>
    </div>
  );
}

export default LoginForm;
