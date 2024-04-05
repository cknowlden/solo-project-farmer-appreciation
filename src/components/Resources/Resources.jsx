import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';
import './Resources.css';

function Resources() {
  const resources = useSelector((store) => store.resources);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_RESOURCES' });
  }, []);

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'RESOURCES' });
  }, []);

  return (
    <div className="wheat">
      <Grid
        sx={{
          display: 'flex',
          borderRadius: '16px',
          borderColor: 'honeydew',
          margin: '75px',
          marginRight: '75px',
          backgroundColor: 'honeydew',
          height: '70vh',
        }}
      >
        <Grid item sx={{ margin: '15px', marginTop: '40px', width: '55%' }}>
          <item>
            {resources &&
              resources.map((resource) => {
                return (
                  <>
                    <Box
                      sx={{
                        margin: '15px',
                        marginTop: '35px',
                      }}
                    >
                      <div className="resources" key={resource.id}>
                        <Typography variant="h5" fontWeight={600}>
                          <a href={resource.link} target="_blank">
                            {resource.title}
                          </a>
                        </Typography>
                        <Typography variant="body1">
                          {resource.description}
                        </Typography>
                      </div>
                    </Box>
                  </>
                );
              })}
          </item>
        </Grid>

        <Grid
          item
          sx={{
            marginTop: '20px',
            marginLeft: '50px',
          }}
        >
          <item>
            <img className="support" src="images/support.jpg"></img>
          </item>
        </Grid>
      </Grid>
    </div>
  );
}

export default Resources;
