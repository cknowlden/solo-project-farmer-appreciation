import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Events() {
  const events = useSelector((store) => store.events);
  const dispatch = useDispatch();
  const history = useHistory();

  const eventDetails = () => {
    const id = event.target.id;
    history.push(`/details/${id}`);
  };

  const handleClick = (event) => {
    const id = event.target.id;
    eventDetails();
    event.preventDefault();
    dispatch({
      type: 'SET_DETAILS',
      payload: {
        id: id,
      },
    });
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_EVENTS' });
  }, []);

  return (
    <>
      <div className="search">
        <h1>Find an event near you</h1>
        <div>
          <p>
            Location <button>Search</button>
          </p>
        </div>
      </div>
      <div>
        <h2>Upcoming Events</h2>
        {/* {JSON.stringify(events)} */}
        <section className="events">
          {events.map((event) => {
            return (
              <div key={event.id}>
                <img
                  onClick={handleClick}
                  id={event.id}
                  src={event.image}
                  alt={event.name}
                />
                <h3>{event.name}</h3>
                <p>{event.date}</p>
                <p>{event.location}</p>
                <p>{event.cost}</p>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default Events;
