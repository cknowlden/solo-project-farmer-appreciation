import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CreateEvent() {
  const history = useHistory();
  const dispatch = useDispatch();
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
    dispatch({ type: 'SET_TITLE', payload: 'CREATE AN EVENT' });
  }, []);

  const nextAction = () => {
    alert('Your event has been created!');
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
    console.log('form data', formData);
    dispatch({
      type: 'CREATE_EVENT',
      payload: {
        formData,
      },
    });
    nextAction();
  };
  return (
    <div>
      <h1>Add your event here:</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={formData.name}
          name="name"
          type="text"
          placeholder="Event title (required)"
        />{' '}
        <br />
        <textarea
          onChange={handleInputChange}
          value={formData.details}
          name="details"
          type="text"
          placeholder="Event description (required)"
        />
        <br />
        <input
          onChange={handleInputChange}
          value={formData.location}
          name="location"
          type="text"
          placeholder="Event location title (optional)"
        />{' '}
        <br />
        <input
          onChange={handleInputChange}
          value={formData.street}
          name="street"
          type="text"
          placeholder="Location street address (required)"
        />{' '}
        <br />
        <input
          onChange={handleInputChange}
          value={formData.city}
          name="city"
          type="text"
          placeholder="City (required)"
        />
        <input
          onChange={handleInputChange}
          value={formData.state}
          name="state"
          type="text"
          placeholder="State (required)"
        />
        <input
          onChange={handleInputChange}
          value={formData.zip}
          name="zip"
          type="text"
          placeholder="Zip (required)"
        />{' '}
        <br />
        Image upload:
        <input
          onChange={handleInputChange}
          value={formData.image}
          name="image"
          type="file"
          label="Image upload (optional)"
        />{' '}
        <br />
        <TextField
          onChange={handleInputChange}
          value={formData.date}
          name="date"
          variant="outlined"
          type="datetime-local"
        />
        <input
          onChange={handleInputChange}
          value={formData.cost}
          name="cost"
          type="number"
          placeholder="Cost (required)"
        />
        <center>
          {/* <button onClick={handleSubmit} type="button" className="button">
            Create Event
          </button> */}
          <Button type="submit" variant="contained">
            Create Event
          </Button>
        </center>
      </form>
    </div>
  );
}

export default CreateEvent;
