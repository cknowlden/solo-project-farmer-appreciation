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
    <div className="details">
      <h3>{JSON.stringify(details)}</h3>
      <Button onClick={goBack} variant="outlined">
        X
      </Button>
    </div>
  );
}

export default EventDetails;
{
  /* <div onClick={handleClick} key={event.id}>
  <img id={event.id} src={event.image} alt={event.name} />
  <h3>{event.name}</h3>
  <p>{event.date}</p>
  <p>{event.location}</p>
  <p>{event.street} </p>
  <p>
    {event.city},{event.state}
    {event.zip}
  </p>
</div>; */
}
