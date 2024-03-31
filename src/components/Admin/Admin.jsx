import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Box, Grid, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../App/App.css';

function Admin() {
  const rsvp = useSelector((store) => store.rsvp);
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((store) => store.user);

  // useEffect(() => {
  //   dispatch({ type: 'FETCH_RSVP' });
  // }, []);

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'ADMINISTRATION PAGE' });
  }, []);

  return (
    <div>
      {/* {rsvp &&
        user.type ===
          'admin'( */}
      <div>
        <div className="container">
          <p>This is the administration page</p>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default Admin;
