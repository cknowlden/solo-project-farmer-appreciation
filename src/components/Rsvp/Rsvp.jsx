import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function Rsvp() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'RSVP' });
  }, []);

  const goBack = () => {
    history.push('/events');
  };

  return (
    <div className="container">
      <Button className="goBackButton" onClick={goBack} variant="outlined">
        X
      </Button>
      <p>Hello please RSVP here</p>
    </div>
  );
}

export default Rsvp;
