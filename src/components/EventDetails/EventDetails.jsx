import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function EventDetails() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const event = useSelector((store) => store.events);

  useEffect(() => {
    dispatch({ type: 'FETCH_DETAILS', payload: id });
  }, []);

  return (
    <div className="details">
      <h3>{JSON.stringify(event)}</h3>
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
