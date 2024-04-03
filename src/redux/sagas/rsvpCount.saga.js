import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_RSVP_COUNT" actions
function* rsvpCount(action) {
  try {
    const rsvpCountResponse = yield axios.get(`/api/rsvp/${action.payload}`);
    yield put({ type: 'SET_RSVP_COUNT', payload: rsvpCountResponse.data });
  } catch (error) {
    console.log('Could not retrieve RSVP count', error);
  }
}

function* rsvpSaga() {
  yield takeLatest('FETCH_RSVP_COUNT', rsvpCount);
}

export default rsvpSaga;
