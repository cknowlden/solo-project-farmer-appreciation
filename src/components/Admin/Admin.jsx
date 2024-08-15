import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Box, Grid, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EventCount from '../Events/EventCount';
import '../App/App.css';

function Admin() {
  const fetchRSVP = useSelector((store) => store.fetchRSVP);
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'ADMINISTRATION PAGE' });
  }, []);

  useEffect(() => {
    dispatch({ type: 'FETCH_RSVP' });
  }, []);

  //group rsvps to their respective event
  const groupedRSVPs = fetchRSVP.reduce((acc, rsvp) => {
    if (!acc[rsvp.name]) {
      acc[rsvp.name] = [];
    }
    acc[rsvp.name].push(rsvp);
    return acc;
  }, {});

  // Group RSVPs by event ID and count them
  const rsvpCounts = fetchRSVP.reduce((acc, rsvp) => {
    if (!acc[rsvp.event_id]) {
      acc[rsvp.event_id] = 0;
    }
    acc[rsvp.event_id] += 1;
    return acc;
  }, {});

  //////////////////NEED TO FIX BELOW CODE BY ADDING DELETE ROUTE AND SAGA////////////
  const showConfirmationDelete = () => {
    Swal.fire({
      text: 'Are you sure you want to delete this RSVP?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('The RSVP has been deleted').then(() => handleDelete());
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });

    const handleDelete = (event) => {
      const id = details.id;
      dispatch({
        type: 'DELETE_RSVP',
        payload: {
          id: id,
        },
      });
      goBack();
    };
  };

  ///////////////////////ADD SAGA FOR DELETE ROUTES/////////////////////
  return (
    <div className="adminDiv">
      {Object.keys(groupedRSVPs).map((eventName) => (
        <div key={eventName}>
          <Typography
            variant="h2"
            fontWeight={800}
            fontSize={25}
            sx={{ textAlign: 'center', color: 'black', marginTop: '40px' }}
          >
            {eventName} RSVPs
          </Typography>
          <TableContainer
            component={Paper}
            sx={{
              margin: 'auto',
              marginTop: '20px',
              marginBottom: '20px',
              width: '90%',
            }}
          >
            <Table sx={{ width: '100%' }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: '15%', fontSize: '1em' }}>
                    First Name
                  </TableCell>
                  <TableCell sx={{ width: '15%', fontSize: '1em' }}>
                    Last Name
                  </TableCell>
                  <TableCell sx={{ width: '20%', fontSize: '1em' }}>
                    Email
                  </TableCell>
                  <TableCell sx={{ width: '15%', fontSize: '1em' }}>
                    Phone
                  </TableCell>
                  <TableCell sx={{ width: '5%' }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {groupedRSVPs[eventName].map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="delete"
                        color="primary"
                        size="large"
                        onClick={showConfirmationDelete}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="rsvpCount">
            RSVP Count: {rsvpCounts[groupedRSVPs[eventName][0].event_id]}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Admin;
