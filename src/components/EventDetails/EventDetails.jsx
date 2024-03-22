import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

function EventDetails() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const eventDetails = useSelector((store) => store.details);
  const details = eventDetails[0] || 'No details available';

  useEffect(() => {
    dispatch({ type: 'FETCH_DETAILS', payload: id });
  }, []);

  const goBack = () => {
    history.push('/events');
  };

  return (
    <>
      {' '}
      <Button className="goBackButton" onClick={goBack} variant="outlined">
        X
      </Button>
      <div className="details">
        {/* <h3>{JSON.stringify(details)}</h3> */}
        <img id={details.id} src={details.image} alt={details.name} />
        <h3>{details.name}</h3>
        <p>{details.date}</p>
        <p>{details.location}</p>
        <p>{details.street} </p>
        <p>
          {details.city},{details.state} {''}
          {details.zip}
        </p>
        <p> ${details.cost}</p>
        <p>{details.details}</p>
      </div>
    </>
  );
}

export default EventDetails;
