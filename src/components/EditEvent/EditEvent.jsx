import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { Button, Snackbar, Alert, Box, Typography } from '@mui/material';
import './EditEvent.css';
import '../App/App.css';

function EditEvent() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const eventDetails = useSelector((store) => store.details);
  const details = eventDetails[0] || 'No details available';
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

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'EDIT EVENT' });
  }, []);

  const goBack = () => {
    history.push('/details/:id');
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
      <div className="big-rect">
        <Box
          sx={{
            backgroundImage: "url('images/lighthouse.jpg')",
            height: '700px',
            width: '100%',
            marginLeft: '100px',
            marginRight: '300px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            borderRadius: '10px',
          }}
        >
          <Box
            alignItems="center"
            justifyContent={'center'}
            sx={{
              bgcolor: 'honeydew',
              height: '78vh',
              width: '600px',
              marginLeft: '100px',
              marginRight: '300px',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '10px',
            }}
          >
            <Typography variant="h3" fontWeight={600}>
              You are now editing:
            </Typography>

            <h1>{details.name}</h1>
            <br />
            <form onSubmit={handleSubmit}>
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
              <div className="upload">
                Image upload:
                <input
                  onChange={handleInputChange}
                  value={formData.image}
                  name="image"
                  type="file"
                  label="Image upload (optional)"
                />
              </div>{' '}
              <br />
              <div className="date-cost">
                <TextField
                  required
                  onChange={handleInputChange}
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
                    required
                    onChange={handleInputChange}
                    value={formData.cost}
                    name="cost"
                    type="number"
                    placeholder="Cost (required)"
                  />
                </div>
              </div>
              <center>
                <br />
                <Button type="submit" variant="contained" size="large">
                  Submit Edits
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
                    Congrats! Your event has been updated. Return to the Events
                    Page to view it.
                  </Alert>
                </Snackbar>
              </center>
            </form>
          </Box>
        </Box>
        {/* </div> */}
      </div>
    </div>
  );
}
export default EditEvent;
