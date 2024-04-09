import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Snackbar, Alert, Box, Grid, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import '../App/App.css';
import '../Rsvp/Rsvp.css';

function Rsvp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });

  const eventDetails = useSelector((store) => store.details);
  const details = eventDetails[0] || 'No details available';

  const showConfirmation = () => {
    Swal.fire({
      text: `You have successfully RSVP'd!  See you there!`,
      icon: 'success',
      confirmButtonText: 'OKAY',
    }).then(() => goBack());
  };

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'RSVP' });
  }, []);

  const clearForm = () => {
    setFormData(() => ({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
    }));
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'RSVP_EVENT',
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
      <Box
        display="flex"
        justifyContent="flex-end"
        marginTop={2}
        marginRight={2}
      >
        <Button className="btn_goBack" onClick={goBack} variant="contained">
          X
        </Button>
      </Box>

      <Box
        sx={{
          display: 'left',
          borderRadius: '16px',
          borderColor: 'honeydew',
          marginBottom: '35px',
          marginLeft: '18%',
          marginRight: '18%',
          marginTop: '5px',
          minHeight: '60vh',
          backgroundColor: 'honeydew',
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={5}
            marginTop={4}
            sx={{ display: 'flex', flexDirection: 'column', width: '100px' }}
          >
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{ paddingLeft: '20px' }}
            >
              RSVP for:
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{ paddingLeft: '20px' }}
            >
              {details.name}
            </Typography>

            <br />
            <center>
              <form onSubmit={handleSubmit}>
                <input
                  required
                  className="first"
                  onChange={handleInputChange}
                  value={formData.first_name}
                  name="first_name"
                  type="text"
                  placeholder="First Name (required)"
                />{' '}
                <br />
                <input
                  required
                  className="last"
                  onChange={handleInputChange}
                  value={formData.last_name}
                  name="last_name"
                  type="text"
                  placeholder="Last Name (required)"
                />{' '}
                <br />
                <input
                  className="phone"
                  onChange={handleInputChange}
                  value={formData.phone}
                  name="phone"
                  type="number"
                  placeholder="Phone (123) 456-7890"
                />{' '}
                <br />
                <input
                  required
                  className="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  name="email"
                  type="text"
                  placeholder="Email (required)"
                />{' '}
                <br />
                <center>
                  <Button type="submit" className="btn" variant="contained">
                    RSVP
                  </Button>
                </center>
              </form>
            </center>
          </Grid>

          <Grid
            item
            xs={7}
            sx={{
              marginLeft: '-15px',
            }}
          >
            <item>
              <img
                className="img-event"
                id={details.id}
                src={details.image}
                alt={details.name}
              />
            </item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Rsvp;
