import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Admin() {
  // const resources = useSelector((store) => store.resources);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: 'FETCH_RESOURCES' });
  // }, []);

  useEffect(() => {
    dispatch({ type: 'SET_TITLE', payload: 'ADMINISTRATION PAGE' });
  }, []);

  return (
    <div className="container">
      <p>This is the administration page</p>
    </div>
  );
}

export default Admin;
