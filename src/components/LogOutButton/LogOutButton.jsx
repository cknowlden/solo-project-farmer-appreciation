import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

function LogOutButton(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const navLogin = () => {
    console.log('Testing login');
    history.push('/login');
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navLogin();
  };

  const showConfirmationLogout = () => {
    Swal.fire({
      text: 'You are now logged out',
      icon: 'success',
      confirmButtonText: 'OKAY',
    }).then(() => logout());
  };

  return (
    <button className={props.className} onClick={showConfirmationLogout}>
      Logout
    </button>
  );
}

export default LogOutButton;
