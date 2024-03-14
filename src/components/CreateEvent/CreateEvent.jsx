import React from 'react';
import { useHistory } from 'react-router-dom';

function CreateEvent() {
  const history = useHistory();

  return (
    <div>
      <h1>Create your Event</h1>

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/events');
          }}
        ></button>
      </center>
    </div>
  );
}

export default CreateEvent;
