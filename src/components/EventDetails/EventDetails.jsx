import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import '../App/App.css';

function EventDetails() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const eventDetails = useSelector((store) => store.details);
  const user = useSelector((store) => store.user);
  const details = eventDetails[0] || 'No details available';

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
    <>
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
      <br />
      <div className="details">
        {/* <h3>{JSON.stringify(details)}</h3> */}
        <img id={details.id} src={details.image} alt={details.name} />
        <h3>{details.name}</h3>
        <p>{details.details}</p>
        <p>{details.date}</p>
        <p>{details.location}</p>
        <p>{details.street} </p>
        <p>
          {details.city},{details.state} {''}
          {details.zip}
        </p>
        <p> ${details.cost}</p>
        <Button className="goRsvp" onClick={goRsvp} variant="outlined">
          RSVP NOW!
        </Button>
      </div>
      {((details && user.id === details.userid) || (user.type = 'admin')) && (
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
          <IconButton aria-label="edit" color="primary" size="large">
            <EditIcon />
          </IconButton>
        </div>
      )}
    </>
  );
}

export default EventDetails;
