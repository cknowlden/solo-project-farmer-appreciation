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
      <div>
        <p>RSVPs:</p>
        {/* {JSON.stringify({ fetchRSVP })} */}
        <center>
          <TableContainer component={Paper} sx={{ margin: '50px' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Event</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
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
        </center>
      </div>
    </div>
  );
}

export default Admin;
