import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_RSVP_COUNT" actions
function* rsvpCount(action) {
  try {
    const rsvpCountResponse = yield axios.get(`/api/rsvp/${action.payload}`);
    yield put({
      type: 'SET_RSVP_COUNT',
      payload: { data: rsvpCountResponse.data[0], id: action.payload },
    });
  } catch (error) {
    console.log('Could not retrieve RSVP count', error);
  }
}

function* rsvpSaga() {
  yield takeEvery('FETCH_RSVP_COUNT', rsvpCount);
}

export default rsvpSaga;
