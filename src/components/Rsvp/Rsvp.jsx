import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Snackbar, Alert, Box } from '@mui/material';
import '../App/App.css';

function Rsvp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });

  const eventDetails = useSelector((store) => store.details);
  const details = eventDetails[0] || 'No details available';

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'RSVP' });
  }, []);

  const clearForm = () => {
    setFormData(() => ({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
    }));
  };

  const goBack = () => {
    history.push('/events');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'RSVP_EVENT',
      payload: {
        formData,
        id: id,
      },
    });
    handleClick();
    clearForm();
  };

  return (
    <div className="container">
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
      <p>RSVP for:</p>
      <p>{details.name}</p>
      <form onSubmit={handleSubmit}>
        <input
          required
          onChange={handleInputChange}
          value={formData.first_name}
          name="first_name"
          type="text"
          placeholder="First Name (required)"
        />{' '}
        <br />
        <input
          required
          onChange={handleInputChange}
          value={formData.last_name}
          name="last_name"
          type="text"
          placeholder="Last Name (required)"
        />{' '}
        <br />
        <input
          onChange={handleInputChange}
          value={formData.phone}
          name="phone"
          type="number"
          placeholder="Phone (123)456-7890"
        />{' '}
        <br />
        <input
          required
          onChange={handleInputChange}
          value={formData.email}
          name="email"
          type="text"
          placeholder="Email (required)"
        />{' '}
        <br />
        <center>
          <Button type="submit" className="btn" variant="outlined">
            RSVP
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
              Successfully RSVP'd for {details.name}. You may now return to
              Events Page.
            </Alert>
          </Snackbar>
        </center>
      </form>
    </div>
  );
}

export default Rsvp;
