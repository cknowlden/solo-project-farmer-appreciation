import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Card,
  Box,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material';

function InfoPage() {
  const info = useSelector((store) => store.info);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_INFO' });
  }, []);

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'INFORMATION' });
  }, []);

  return (
    <div className="card-section">
      <Grid
        paddingLeft={5}
        paddingRight={5}
        paddingBottom={5}
        container
        spacing={3}
      >
        {info &&
          info.map((information) => {
            return (
              // <div className="information" key={information.id}>

              <Grid
                item
                key={information.id}
                xs={12}
                md={4}
                lg={4}
                spacing={3}
                justifyContent={'space-between'}
              >
                <Card
                  elevation={15}
                  sx={{
                    minWidth: 450,
                    maxWidth: 450,
                    maxHeight: 485,
                    borderRadius: '15px',
                    textAlign: 'center',
                    marginTop: '55px',
                    marginLeft: '40px',
                  }}
                >
                  <CardContent sx={{ minHeight: 300, maxHeight: 300 }}>
                    <Typography variant="h4">
                      {' '}
                      <p>{information.description}</p>
                    </Typography>
                  </CardContent>{' '}
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

export default InfoPage;
