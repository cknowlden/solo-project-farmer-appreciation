import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Rsvp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'RSVP' });
  }, []);

  return (
    <div className="container">
      <p>Hello please RSVP here</p>
    </div>
  );
}

export default Rsvp;
