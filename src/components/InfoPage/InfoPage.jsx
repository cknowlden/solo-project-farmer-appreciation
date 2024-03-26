import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
    <div className="container">
      {/* <p>A list of information goes here</p> */}
      {/* {JSON.stringify(info)} */}
      <div>
        {info &&
          info.map((information) => {
            return (
              <div className="information" key={information.id}>
                <p>{information.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default InfoPage;
