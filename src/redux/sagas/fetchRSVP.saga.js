import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_RSVP" actions
function* fetchRSVP() {
  try {
    const rsvpResponse = yield axios.get('/api/rsvp');
    yield put({ type: 'SET_RSVP_FETCH', payload: rsvpResponse.data });
  } catch (error) {
    console.log('RSVP get request failed', error);
  }
}

function* fetchRSVPSaga() {
  yield takeEvery('FETCH_RSVP', fetchRSVP);
}

export default fetchRSVPSaga;
