import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
    <div className="container">
      <p>A list of resources here from database</p>
      {/* {JSON.stringify(resources)} */}
      {resources &&
        resources.map((resource) => {
          return (
            <div className="resources" key={resource.id}>
              <a href={resource.link} target="_blank">
                {resource.title}
              </a>
            </div>
          );
        })}
    </div>
  );
}

export default Resources;
