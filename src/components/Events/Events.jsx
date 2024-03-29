import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import './Events.css';

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
        <div className="farm">
          <h1>Find an event near you</h1>

          <p>
            Location <button>Search</button>
          </p>
        </div>
      </div>
      <div>
        <h2>Upcoming Events</h2>
        <Grid paddingLeft={5} paddingRight={5} container spacing={5}>
          {events.map((event) => {
            return (
              <Grid item key={event.id} xs={12} md={4} lg={3}>
                <Card elevation={9} sx={{ maxWidth: 345, maxHeight: 485 }}>
                  <CardMedia
                    component="img"
                    id={event.id}
                    image={event.image}
                    alt={event.name}
                    onClick={handleClick}
                  />
                  <CardContent>
                    <Typography>
                      {' '}
                      <h3 className="event-name">{event.name}</h3>
                      <p className="event-loc">{event.location}</p>
                      <CalendarTodayIcon sx={{ verticalAlign: 'middle' }} />
                      {event.date}
                      <ConfirmationNumberIcon /> ${event.cost}
                      <br />
                      <PeopleAltOutlinedIcon /> Going
                    </Typography>
                  </CardContent>{' '}
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default Events;
