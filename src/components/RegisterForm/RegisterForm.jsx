import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Button, Box, Grid, IconButton, Typography } from '@mui/material';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const navHome = () => {
    history.push('/');
  };

  const registerUser = (event) => {
    navHome();
    event.preventDefault();
    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <div className="wheat">
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
        <div className="insert-bg-reg">
          <form className="formPanel" onSubmit={registerUser}>
            <center>
              <h1>User Registration</h1>
            </center>
            {errors.registrationMessage && (
              <h3 className="alert" role="alert">
                {errors.registrationMessage}
              </h3>
            )}
            <div className="input-section">
              <div className="input-login">
                <label htmlFor="username">
                  Email:
                  <p>
                    <input
                      className="inputField"
                      type="text"
                      name="username"
                      placeholder="Email address"
                      value={username}
                      required
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
              <div>
                <br />
                <center>
                  <Button
                    type="submit"
                    value="Register"
                    variant="contained"
                    size="large"
                  >
                    Log In
                  </Button>
                </center>
              </div>
              <div className="link">
                <Link to="/login">Already have an account? Login HERE</Link>
              </div>
            </div>
          </form>
        </div>
      </Box>
    </div>
  );
}

export default RegisterForm;
