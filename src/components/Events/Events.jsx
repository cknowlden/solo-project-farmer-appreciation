import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EventCard from '../EventCard/EventCard';
import { Grid } from '@mui/material';

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

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'EVENTS' });
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

        {/* <section className="events">
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
                <p>${event.cost}</p>
              </div>
            );
          })}
        </section> */}

        <Grid container>
          {events.map((event) => {
            return (
              <Grid item key={event.id} xs={12} md={4} lg={3}>
                <img
                  onClick={handleClick}
                  id={event.id}
                  src={event.image}
                  alt={event.name}
                />
                <h3>{event.name}</h3>
                <p>{event.date}</p>
                <p>{event.location}</p>
                <p>${event.cost}</p>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default Events;
