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
      <Box
        sx={{
          display: 'left',
          border: 1,
          borderRadius: '16px',
          borderColor: 'honeydew',
          margin: '50px',
          padding: '60px',
          minHeight: '60vh',
          backgroundColor: 'honeydew',
        }}
      >
        {resources &&
          resources.map((resource) => {
            return (
              <>
                <Box
                  sx={{
                    display: 'left',
                    border: 1,
                    borderRadius: '16px',
                    borderColor: 'honeydew',
                    // margin: '50px',
                    padding: '20px',
                    // maxWidth: '57vh',
                    maxWidth: '700px',
                    backgroundColor: 'honeydew',
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
        <img className="support" src="images/support.jpg"></img>
      </Box>
    </div>
  );
}

export default Resources;
