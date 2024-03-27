import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <div className="App">
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/register');
          }}
        >
          Don't have an account? Register HERE
        </button>
        <p>{''}</p>
        <p>{''}</p>
        <div>
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push('/');
            }}
          >
            Continue as GUEST
          </button>
        </div>
      </center>
    </div>
  );
}

export default LoginPage;
