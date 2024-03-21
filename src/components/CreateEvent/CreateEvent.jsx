import React from 'react';
import { useHistory } from 'react-router-dom';

function CreateEvent() {
  const history = useHistory();

  const nextAction = () => {
    alert('Your event has been created!');
    history.push('/events');
  };

  const handleSubmit = (event) => {
    nextAction();
    event.preventDefault();
    dispatchEvent({
      type: 'CREATE_EVENT',
      payload: {},
    });
  };
  return (
    <div>
      <h1>Create your Event</h1>

      <center>
        <button type="button" className="button" onClick={handleSubmit}>
          Create Event
        </button>
      </center>
    </div>
  );
}

export default CreateEvent;
