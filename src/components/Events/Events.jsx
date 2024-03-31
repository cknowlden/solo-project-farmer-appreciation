import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Card,
  Box,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './Events.css';

function Events() {
  const events = useSelector((store) => store.events);
  const dispatch = useDispatch();
  const history = useHistory();
  const [zip, setZip] = useState('');

  const eventDetails = () => {
    const id = event.target.id;
    history.push(`/details/${id}`);
  };

  // const postgresDateTime = event.date;
  const date = new Date();

  // console.log(formattedDate);

  //NEEDS TO BE COMPLETED
  const handleClick = (event) => {
    const id = event.target.id;
    eventDetails();
    event.preventDefault();
    dispatch({
      type: 'SET_ZIP',
      payload: {
        id: id,
      },
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SET_CUSTOMER_INFO',
      payload: {
        zip: zip,
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
          <Typography
            variant="h3"
            paddingTop={6}
            align="center"
            fontWeight={600}
          >
            Find an event near you
          </Typography>
          <div className="search">
            <LocationOnOutlinedIcon
              sx={{
                verticalAlign: 'middle',
                marginRight: '30px',
                marginLeft: '10px',
              }}
            />{' '}
            <input
              onChange={handleSearch}
              value={zip}
              name="zip"
              type="text"
              placeholder="Enter your zip code"
              className="input-field"
            />{' '}
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                verticalAlign: 'middle',
                marginRight: '-150px',
                marginLeft: '120px',
              }}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="card-section">
        <h2 className="title">Upcoming Events</h2>
        <Grid
          paddingLeft={5}
          paddingRight={5}
          paddingBottom={5}
          container
          spacing={3}
        >
          {events.map((event) => {
            const date = new Date(event.date);
            const formattedDate = date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            });
            return (
              <Grid item key={event.id} xs={12} md={4} lg={3}>
                <Card
                  elevation={15}
                  sx={{ minWidth: 290, maxHeight: 485, borderRadius: '15px' }}
                >
                  <CardMedia
                    sx={{ maxHeight: 200, minHeight: 200 }}
                    component="img"
                    id={event.id}
                    image={event.image}
                    alt={event.name}
                    onClick={handleClick}
                  />
                  <CardContent sx={{ minHeight: 350, maxHeigh: 350 }}>
                    <Typography>
                      {' '}
                      <h3 className="event-name">{event.name}</h3>
                      <p className="event-loc">{event.location}</p>
                      <CalendarTodayIcon
                        sx={{ verticalAlign: 'middle', marginRight: '5px' }}
                      />
                      {formattedDate}
                      <br />
                      <Box
                        display="flex"
                        justifyContent="space-evenly"
                        className="ticket-people"
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-end',
                          // marginTop: 'flex-start',
                          marginBottom: '10px',
                        }}
                      >
                        <ConfirmationNumberIcon
                          sx={{ verticalAlign: 'middle' }}
                        />{' '}
                        ${event.cost}
                        <PeopleAltOutlinedIcon
                          sx={{
                            verticalAlign: 'middle',
                            display: 'inline-block',
                            marginLeft: '95px',
                          }}
                        />{' '}
                        Going
                      </Box>
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
