// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, useParams } from 'react-router-dom';
// import { Button, Box, Grid, Typography } from '@mui/material';
// import Swal from 'sweetalert2';
// import '../App/App.css';
// import '../Rsvp/Rsvp.css';

// function Rsvp() {
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   //no longer needed
//   // const [open, setOpen] = React.useState(false);
//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     email: '',
//     phone: '',
//   });

//   const eventDetails = useSelector((store) => store.details);
//   const details = eventDetails[0] || 'No details available';

//   const showConfirmation = () => {
//     Swal.fire({
//       text: `You have successfully RSVP'd!  See you there!`,
//       icon: 'success',
//       confirmButtonText: 'OKAY',
//     }).then(() => goBack());
//   };

//   // show error feedback using sweet alert
//   const showError = (message) => {
//     Swal.fire({
//       text: message,
//       icon: 'error',
//       confirmButtonText: 'OKAY',
//     });
//   };

//   useEffect(() => {
//     dispatch({ type: 'SET_TITLE', payload: 'RSVP' });
//   }, []);

//   const clearForm = () => {
//     setFormData(() => ({
//       first_name: '',
//       last_name: '',
//       email: '',
//       phone: '',
//     }));
//   };

//   const goBack = () => {
//     history.push('/events');
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   // original handleSubmit function
//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   dispatch({
//   //     type: 'RSVP_EVENT',
//   //     payload: {
//   //       formData,
//   //       id: id,
//   //     },
//   //   });
//   //   clearForm();
//   //   showConfirmation();
//   // };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch(`/api/rsvp/${id}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         clearForm();
//         showConfirmation();
//       } else {
//         const result = await response.json();
//         if (result.errors) {
//           showError(result.errors[0].msg); // Show the first error message
//         }
//       }
//     } catch (error) {
//       showError('Something went wrong, please try again.');
//     }
//   };
//   return (
//     <div className="wheat">
//       <Box
//         display="flex"
//         justifyContent="flex-end"
//         marginTop={2}
//         marginRight={2}
//       >
//         {/* <Button className="btn_goBack" onClick={goBack} variant="contained">
//           X
//         </Button> */}
//         {/* altered to allow correct formatting for phone display */}
//         <Button className="btn_goBack" onClick={goBack} variant="uncontained">
//           X
//         </Button>
//       </Box>

//       <Box
//         sx={{
//           display: 'left',
//           borderRadius: '16px',
//           borderColor: 'honeydew',
//           marginBottom: '35px',
//           marginLeft: '10%',
//           marginRight: '10%',
//           marginTop: '5px',
//           minHeight: '80vh',
//           backgroundColor: 'honeydew',
//         }}
//       >
//         <Grid container spacing={2}>
//           {/* altered to allow correct formatting for phone display */}
//           {/* <Grid
//             item
//             xs={5}
//             marginTop={4}
//             sx={{ display: 'flex', flexDirection: 'column', width: '100px' }}
//           >
//             <Typography
//               variant="h4"
//               fontWeight={600}
//               sx={{ paddingLeft: '20px' }}
//             > */}
//           <Grid>
//             <Typography
//               variant="h4"
//               fontWeight={600}
//               sx={{ paddingLeft: '20px' }}
//             >
//               RSVP for:
//             </Typography>
//             <Typography
//               variant="h5"
//               fontWeight={600}
//               sx={{ paddingLeft: '50px', marginTop: '10px' }}
//             >
//               {details.name}
//             </Typography>

//             <br />
//             <center>
//               <form onSubmit={handleSubmit}>
//                 <input
//                   required
//                   className="first"
//                   onChange={handleInputChange}
//                   value={formData.first_name}
//                   name="first_name"
//                   type="text"
//                   placeholder="First Name (required)"
//                 />{' '}
//                 <br />
//                 <input
//                   required
//                   className="last"
//                   onChange={handleInputChange}
//                   value={formData.last_name}
//                   name="last_name"
//                   type="text"
//                   placeholder="Last Name (required)"
//                 />{' '}
//                 <br />
//                 <input
//                   className="phone"
//                   onChange={handleInputChange}
//                   value={formData.phone}
//                   name="phone"
//                   type="number"
//                   placeholder="Phone (123) 456-7890"
//                 />{' '}
//                 <br />
//                 <input
//                   required
//                   className="email"
//                   onChange={handleInputChange}
//                   value={formData.email}
//                   name="email"
//                   type="text"
//                   placeholder="Email (required)"
//                 />{' '}
//                 <br />
//                 {/* additional verbiage added for phone display */}
//                 <Typography
//                   variant="h7"
//                   sx={{
//                     textAlign: 'center',
//                     display: 'block',
//                     marginLeft: '15px',
//                     marginBottom: '30px',
//                   }}
//                 >
//                   **If there are more people in your party than just you, please
//                   be sure to submit an RSVP for each person so we can get an
//                   accurate count!
//                 </Typography>
//                 <center>
//                   <Button type="submit" className="btn" variant="contained">
//                     RSVP
//                   </Button>
//                 </center>
//               </form>
//             </center>
//           </Grid>

//           {/* altered to allow correct formatting for phone display */}
//           {/* <Grid
//             item
//             xs={7}
//             sx={{
//               marginLeft: '-15px',
//             }}
//           >
//             <item>
//               <img
//                 className="img-event"
//                 id={details.id}
//                 src={details.image}
//                 alt={details.name}
//               />
//             </item>
//           </Grid> */}
//         </Grid>
//       </Box>
//     </div>
//   );
// }

// export default Rsvp;

//END OLD BELOW IS NEW CODE FOR PHONE DISPLAY AND SWEET ALERT TO NOTIFY WHEN BAD EMAIL ENTERED

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Box, Grid, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import '../App/App.css';
import '../Rsvp/Rsvp.css';

function Rsvp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
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

  // show error feedback using sweet alert
  const showError = (message) => {
    Swal.fire({
      text: message,
      icon: 'error',
      confirmButtonText: 'OKAY',
    });
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/rsvp/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        clearForm();
        showConfirmation();
      } else {
        const result = await response.json();
        console.log(result); // Debugging line
        if (result.errors) {
          showError(result.errors[0].msg); // Show the first error message
        } else {
          showError('Invalid email address');
        }
      }
    } catch (error) {
      showError('Something went wrong, please try again.');
    }
  };

  return (
    <div className="wheat">
      <Box
        display="flex"
        justifyContent="flex-end"
        marginTop={2}
        marginRight={2}
      >
        <Button className="btn_goBack" onClick={goBack} variant="uncontained">
          X
        </Button>
      </Box>

      <Box
        sx={{
          display: 'left',
          borderRadius: '16px',
          borderColor: 'honeydew',
          marginBottom: '35px',
          marginLeft: '10%',
          marginRight: '10%',
          marginTop: '5px',
          minHeight: '80vh',
          backgroundColor: 'honeydew',
        }}
      >
        <Grid container spacing={2}>
          <Grid>
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
              sx={{ paddingLeft: '50px', marginTop: '10px' }}
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
                <Typography
                  variant="h7"
                  sx={{
                    textAlign: 'center',
                    display: 'block',
                    marginLeft: '15px',
                    marginBottom: '30px',
                  }}
                >
                  **If there are more people in your party than just you, please
                  be sure to submit an RSVP for each person so we can get an
                  accurate count!
                </Typography>
                <center>
                  <Button type="submit" className="btn" variant="contained">
                    RSVP
                  </Button>
                </center>
              </form>
            </center>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Rsvp;
