import { DateTime } from 'luxon';
import React, { useState, useEffect, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { Button, Box, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Swal from 'sweetalert2';
import './EditEvent.css';
import '../App/App.css';

function EditEvent() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const eventDetails = useSelector((store) => store.details);
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);

  const formattedDate = useMemo(() => {
    if (eventDetails[0]) {
      return DateTime.fromISO(eventDetails[0].date).toISO();
    }
    return '';
  }, [eventDetails]);

  // const date = DateTime.fromISO(eventDetails[0].date);
  // const formattedDate = date.toLocaleString('yyyy-MM-ddThh:mm');
  // .toLocaleDateString('en-US', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   hour12: true,
  // });
  // date.toISOString();
  // yyyy-MM-ddThh:mm

  const showConfirmation = () => {
    Swal.fire({
      text: 'Your event has been updated!',
      icon: 'success',
      confirmButtonText: 'Great! Take me back to Events',
    }).then(() => goBack());
  };

  const [formData, setFormData] = useState({
    name: eventDetails[0] ? eventDetails[0].name : '',
    date: formattedDate ? formattedDate : '',
    location: eventDetails[0] ? eventDetails[0].location : '',
    street: eventDetails[0] ? eventDetails[0].street : '',
    city: eventDetails[0] ? eventDetails[0].city : '',
    state: eventDetails[0] ? eventDetails[0].state : '',
    zip: eventDetails[0] ? eventDetails[0].zip : '',
    cost: eventDetails[0] ? eventDetails[0].cost : '',
    image: '',
    details: eventDetails[0] ? eventDetails[0].details : '',
  });

  const details = useMemo(() => {
    return eventDetails[0] || 'No details available';
  }, [eventDetails]);

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'EDIT EVENT' });
  }, []);

  const goBack = () => {
    history.push('/details/:id');
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
      type: 'EDIT_EVENT',
      payload: {
        formData,
        id: id,
      },
    });
    clearForm();
    showConfirmation();
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
        <div className="insert-bg-edit">
          <form className="formPanel" onSubmit={handleSubmit}>
            <center>
              <Typography variant="h3" fontWeight={600}>
                You are now editing:
              </Typography>{' '}
              <h1>{details.name}</h1>
            </center>
            <br />
            <input
              className="n-ame"
              required
              onChange={handleInputChange}
              value={formData.name}
              name="name"
              type="text"
              placeholder="Event title (required)"
              defaultValue={details.name}
            />{' '}
            <br />
            <textarea
              className="de-tails"
              required
              onChange={handleInputChange}
              value={formData.details}
              name="details"
              type="text"
              placeholder="Event description (required)"
            />
            <br />
            <input
              className="l-ocation"
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
                className="city"
                required
                onChange={handleInputChange}
                value={formData.city}
                name="city"
                type="text"
                placeholder="City"
              />
              <input
                className="state"
                required
                onChange={handleInputChange}
                value={formData.state}
                name="state"
                type="text"
                placeholder="State"
              />
              <input
                className="zip"
                required
                onChange={handleInputChange}
                value={formData.zip}
                name="zip"
                type="text"
                placeholder="Zip"
              />{' '}
            </div>
            <div className="img-upload">
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
              {/* {formData.date} */}
              <TextField
                required
                onChange={handleInputChange}
                value={formData.date}
                InputLabelProps={{
                  shrink: true,
                }}
                name="date"
                label="Event Date & Time"
                variant="outlined"
                type="datetime-local"
              />
              {''}
              <div className="cost">
                <AttachMoneyIcon sx={{ marginTop: '8px' }} />
                <input
                  className="cost"
                  required
                  onChange={handleInputChange}
                  value={formData.cost}
                  name="cost"
                  type="number"
                  placeholder="Cost (required)"
                />
              </div>
              {''}
            </div>
            <center>
              <br />
              <Button type="submit" variant="contained" size="large">
                Submit Edits
              </Button>
              {/* <Snackbar
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
              </Snackbar> */}
            </center>
          </form>
        </div>
      </Box>
    </div>
  );
}
export default EditEvent;
