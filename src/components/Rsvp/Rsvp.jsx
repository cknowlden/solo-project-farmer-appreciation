import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Snackbar, SnackbarContent } from '@mui/material';
import '../App/App.css';

function Rsvp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });

  const eventDetails = useSelector((store) => store.details);
  const rsvpResponse = useSelector((store) => store.rsvp);
  const details = eventDetails[0] || 'No details available';

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'RSVP' });
  }, []);

  useEffect(() => {
    if (rsvpResponse) {
      alert(`Successfully RSVP for, ${details.name}`);
    }
  }, [rsvpResponse]);

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

  const nextAction = () => {
    // alert('Thank you, your RSVP has been received!');
    history.push('/events');
  };

  const handleSubmit = (event) => {
    const id = details.id;
    event.preventDefault();
    dispatch({
      type: 'RSVP_EVENT',
      payload: {
        id: id,
        formData,
      },
    });
    // nextAction();
  };

  return (
    <div className="container">
      <Button onClick={goBack} variant="outlined">
        X
      </Button>
      <p>RSVP for:</p>
      <p>{details.name}</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={formData.first_name}
          name="first_name"
          type="text"
          placeholder="First Name (required)"
        />{' '}
        <br />
        <input
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
          onChange={handleInputChange}
          value={formData.email}
          name="email"
          type="text"
          placeholder="Email (required)"
        />{' '}
        <br />
        <center>
          {/* <Button className="btn" onClick={handleClick} variant="outlined">
            RSVP
          </Button> */}
          <Button type="submit" variant="outlined">
            RSVP
          </Button>
        </center>
      </form>
    </div>
  );
}

export default Rsvp;
