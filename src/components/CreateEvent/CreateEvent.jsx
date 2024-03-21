import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
    nextAction();
    event.preventDefault();
    console.log('form data', formData);
    dispatchEvent({
      type: 'CREATE_EVENT',
      payload: {
        formData,
      },
    });
  };
  return (
    <div>
      <h1>Create your Event</h1>
      <h1>Add your event here:</h1>
      <form>
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
        <center>
          <button onClick={handleSubmit} type="button" className="button">
            Create Event
          </button>
        </center>
      </form>
    </div>
  );
}

export default CreateEvent;
