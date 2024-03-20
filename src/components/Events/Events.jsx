import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Events() {
  const events = useSelector((store) => store.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_EVENTS' });
  }, []);
  return (
    <div className="container">
      <div>
        <p>Here's a list of events in your area</p>
        {/* {JSON.stringify(events)} */}
        <section className="events">
          {events.map((event) => {
            return (
              <div key={event.id}>
                <h3>{event.name}</h3>
                <p>{event.date}</p>
                <p>{event.location}</p>
                <p>{event.street} </p>
                <p>
                  {event.city},{event.state}
                  {event.zip}
                </p>
                {/* <img
                data-testid="toDetails"
                id={movie.id}
                src={movie.poster}
                alt={movie.title}
                onClick={handleClick}
              /> */}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Events;
