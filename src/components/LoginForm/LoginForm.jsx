import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Box, Grid, IconButton, Typography } from '@mui/material';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const navHome = () => {
    history.push('/');
  };

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'LOG IN' });
  }, []);

  const login = (event) => {
    navHome();
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <div className="wheat">
      <Box
        sx={{
          display: 'left',
          border: 1,
          borderRadius: '16px',
          borderColor: 'honeydew',
          margin: '50px',
          // padding: '80px',
          minHeight: '60vh',
          backgroundColor: 'honeydew',
        }}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          sx={{
            backgroundImage: "url('images/old-farm.jpg')",
            // height: '89vh',
            justifyContent: 'space-around',
            width: '100%',
            maxWidth: '900px',
            padding: '80px',
            marginLeft: '100px',
            marginRight: '100px',
            marginTop: '100px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        >
          <form className="formPanel" onSubmit={login}>
            {errors.loginMessage && (
              <h3 className="alert" role="alert">
                {errors.loginMessage}
              </h3>
            )}
            <div>
              <label htmlFor="username">
                Email:
                <p>
                  <input
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
            <div>
              <label htmlFor="password">
                Password:
                <p>
                  <input
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
              <button type="button">Forgot password?</button>
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
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default LoginForm;
