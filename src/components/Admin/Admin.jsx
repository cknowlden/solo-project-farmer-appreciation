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
  return (
    <div>
      <Typography
        variant="h5"
        fontWeight={600}
        sx={{ paddingLeft: '50px', color: 'lightblue' }}
      >
        Event RSVPs:
      </Typography>
      {/* {JSON.stringify({ fetchRSVP })} */}
      <TableContainer component={Paper} sx={{ margin: '50px', width: '90%' }}>
        <Table sx={{ width: '100%' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '30%' }}>Event</TableCell>
              <TableCell sx={{ width: '15%' }}>First Name</TableCell>
              <TableCell sx={{ width: '15%' }}>Last Name</TableCell>
              <TableCell sx={{ width: '20%' }}>Email</TableCell>
              <TableCell sx={{ width: '20%' }}>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fetchRSVP.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Admin;
