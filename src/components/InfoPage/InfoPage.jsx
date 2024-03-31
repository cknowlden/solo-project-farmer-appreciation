import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Card, Box, CardContent, Typography } from '@mui/material';
import './InfoPage.css';

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
    <div className="background">
      <Grid
        // paddingLeft={5}
        // paddingRight={5}
        // paddingBottom={5}
        padding="20px"
        marginTop="2px"
        container
        spacing={3}
        justifyContent={'center'}
      >
        {info &&
          info.map((information) => {
            return (
              // <div className="information" key={information.id}>

              <Box
                item
                key={information.id}
                xs={12}
                md={4}
                lg={4}
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
              </Box>
            );
          })}
      </Grid>
    </div>
  );
}

export default InfoPage;
