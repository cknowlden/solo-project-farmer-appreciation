import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function InfoPage() {
  const info = useSelector((store) => store.info);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_INFO' });
  }, []);
  return (
    <div className="container">
      <p>A list of information goes here</p>
      {JSON.stringify(info)}
      {/* {resources &&
        resources.map((resource) => {
          return (
            <div className="resources" key={resource.id}>
              <a href={resource.link} target="_blank">
                {resource.title}
              </a>
            </div>
          );
        })} */}
    </div>
  );
}

export default InfoPage;
