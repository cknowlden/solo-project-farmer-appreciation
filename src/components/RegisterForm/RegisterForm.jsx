import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
      <form className="formPanel" onSubmit={registerUser}>
        <h2>Register User</h2>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="username">
            Email:
            <input
              type="text"
              name="username"
              placeholder="Email address"
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
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
      </form>
      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Already have an account? Login HERE
        </button>
      </center>
    </div>
  );
}

export default RegisterForm;
