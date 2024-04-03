import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Box, Grid, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

import '../App/App.css';
import './EventDetails.css';

function EventDetails() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const eventDetails = useSelector((store) => store.details);
  const user = useSelector((store) => store.user);
  const details = eventDetails[0] || 'No details available';
  const date = new Date(details.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  useEffect(() => {
    dispatch({ type: 'FETCH_DETAILS', payload: id });
  }, []);

  const goBack = () => {
    history.push('/events');
  };

  const goRsvp = () => {
    const id = details.id;
    history.push(`/rsvp/${id}`);
  };

  const goEdit = () => {
    const id = details.id;
    history.push(`/events/${id}`);
  };

  const handleDelete = (event) => {
    const id = details.id;
    event.preventDefault();
    dispatch({
      type: 'DELETE_EVENT',
      payload: {
        id: id,
      },
    });
    goBack();
  };

  return (
    <div className="woods">
      <Box
        display="flex"
        justifyContent="flex-end"
        marginTop={2}
        marginRight={2}
      >
        <Button className="btn_goBack" onClick={goBack} variant="contained">
          X
        </Button>
      </Box>

      <Box
        sx={{
          display: 'left',
          borderRadius: '16px',
          borderColor: 'honeydew',
          margin: '50px',
          marginLeft: '18%',
          marginRight: '18%',
          marginTop: '75px',
          minHeight: '60vh',
          backgroundColor: 'honeydew',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <item>
              <img
                className="img"
                id={details.id}
                src={details.image}
                alt={details.name}
              />
            </item>
          </Grid>
          <Grid item xs={5} marginTop={4} sx={{ display: 'block' }}>
            <item className="details">
              <Typography variant="h4" fontWeight={600} sx>
                {details.name}
              </Typography>
              <p className="description">{details.details}</p>
              <CalendarTodayIcon
                sx={{ verticalAlign: 'middle', marginRight: '5px' }}
              />{' '}
              {''}
              {formattedDate}
              <br />
              <p>{details.location}</p>
              <p>{details.street} </p>
              <p>
                {details.city},{details.state} {''}
                {details.zip}
              </p>
              <center>
                <Box
                  display="flex"
                  justifyContent="space-evenly"
                  className="ticket-people"
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    marginTop: '50px',
                    marginBottom: '50px',
                  }}
                >
                  <ConfirmationNumberIcon sx={{ verticalAlign: 'middle' }} /> $
                  {details.cost}
                  <PeopleAltOutlinedIcon
                    sx={{
                      verticalAlign: 'middle',
                      display: 'inline-block',
                      marginLeft: '95px',
                    }}
                  />{' '}
                  Going
                </Box>
              </center>
              <br />
              <center>
                <Button
                  className="goRsvp"
                  onClick={goRsvp}
                  variant="contained"
                  size="large"
                >
                  RSVP NOW!
                </Button>
              </center>
              <div className="control-panel">
                {details &&
                  (user.id == details.userid || user.role_type === 'admin') && (
                    <div>
                      {' '}
                      <IconButton
                        alignItems="right"
                        aria-label="delete"
                        color="primary"
                        size="large"
                        onClick={handleDelete}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        aria-label="edit"
                        color="primary"
                        size="large"
                        onClick={goEdit}
                      >
                        <EditIcon />
                      </IconButton>
                    </div>
                  )}
              </div>
            </item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default EventDetails;
