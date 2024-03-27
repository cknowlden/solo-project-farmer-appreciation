import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function Rsvp() {
  const history = useHistory();
  const dispatch = useDispatch();

  const eventDetails = useSelector((store) => store.details);
  const details = eventDetails[0] || 'No details available';

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'RSVP' });
  }, []);

  const goBack = () => {
    history.push('/events');
  };

  const handleClick = (event) => {
    const id = details.id;
    event.preventDefault();
    dispatch({
      type: 'SET_RSVP',
      payload: {
        id: id,
      },
    });
  };

  return (
    <div className="container">
      <Button className="goBackButton" onClick={goBack} variant="outlined">
        X
      </Button>
      <p>RSVP for:</p>
      <p>{details.name}</p>
      {/* <p>{details.id}</p> */}
      <Button className="btn" onClick={handleClick} variant="outlined">
        RSVP
      </Button>
    </div>
  );
}

export default Rsvp;
