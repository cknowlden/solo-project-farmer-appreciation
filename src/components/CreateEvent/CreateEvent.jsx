import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { Button, Snackbar, Alert, Box, Grid, Typography } from '@mui/material';
import './CreateEvent.css';
import '../App/App.css';

function CreateEvent() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    cost: '',
    image: '',
    details: '',
  });

  const goBack = () => {
    history.push('/events');
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const clearForm = () => {
    setFormData(() => ({
      name: '',
      date: '',
      location: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      cost: '',
      image: '',
      details: '',
    }));
  };

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'CREATE AN EVENT' });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form data', formData);
    dispatch({
      type: 'CREATE_EVENT',
      payload: {
        formData,
      },
    });
    handleClick();
    clearForm();
  };
  return (
    <div className="wheat">
      <Button
        className="btn_goBack"
        onClick={goBack}
        variant="contained"
        marginTop={2}
      >
        X
      </Button>
      <Box
        sx={{
          display: 'left',
          border: 1,
          borderRadius: '16px',
          borderColor: 'honeydew',
          marginLeft: '18%',
          marginRight: '18%',
          minHeight: '60vh',
          backgroundColor: 'honeydew',
        }}
      >
        <div className="insert-bg-create">
          <form className="formPanel" onSubmit={handleSubmit}>
            <center>
              <Typography variant="h4" fontWeight={600}>
                Add your event here:
              </Typography>
            </center>
            <br />
            <center>
              <input
                className="name"
                required
                onChange={handleInputChange}
                value={formData.name}
                name="name"
                type="text"
                placeholder="Event title (required)"
              />{' '}
              <br />
              <textarea
                className="details"
                required
                onChange={handleInputChange}
                value={formData.details}
                name="details"
                type="text"
                placeholder="Event description (required)"
              />
              <br />
              <input
                className="location"
                onChange={handleInputChange}
                value={formData.location}
                name="location"
                type="text"
                placeholder="Event location title (optional)"
              />{' '}
              <br />
              <input
                className="street"
                required
                onChange={handleInputChange}
                value={formData.street}
                name="street"
                type="text"
                placeholder="Location street address (required)"
              />{' '}
            </center>
            <br />
            <div className="address">
              <input
                required
                onChange={handleInputChange}
                value={formData.city}
                name="city"
                type="text"
                placeholder="City (required)"
              />
              <input
                required
                onChange={handleInputChange}
                value={formData.state}
                name="state"
                type="text"
                placeholder="State (required)"
              />
              <input
                required
                onChange={handleInputChange}
                value={formData.zip}
                name="zip"
                type="text"
                placeholder="Zip (required)"
              />{' '}
            </div>
            Image upload:
            <input
              onChange={handleInputChange}
              value={formData.image}
              name="image"
              type="file"
              label="Image upload (optional)"
            />{' '}
            <br />
            <div className="date-cost">
              <TextField
                required
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.date}
                name="date"
                label="Event Date & Time"
                variant="outlined"
                type="datetime-local"
              />
              {''}
              <div className="cost">
                $
                <input
                  className="cost"
                  required
                  onChange={handleInputChange}
                  value={formData.cost}
                  name="cost"
                  type="number"
                  placeholder="Cost (required)"
                />
              </div>{' '}
            </div>
            <center>
              <br />
              <Button type="submit" variant="contained" size="large">
                Create Event
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  variant="filled"
                  sx={{ width: '100%' }}
                >
                  Congrats! Your event has been created. You may return to the
                  Events Page to view it.
                </Alert>
              </Snackbar>
            </center>
          </form>
        </div>
      </Box>
    </div>
  );
}

export default CreateEvent;
