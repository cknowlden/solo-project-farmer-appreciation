import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory, Link } from 'react-router-dom';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

function LoginPage() {
  const history = useHistory();

  return <LoginForm />;
}

export default LoginPage;
