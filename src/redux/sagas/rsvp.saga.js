import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "RSVP_EVENT" actions
function* rsvpEvent(action) {
  try {
    const infoResponse = yield axios.post(
      `/api/rsvp/${action.payload.id}`,
      action.payload.formData
    );
    yield put({ type: 'SET_RSVP', payload: action.payload });
  } catch (error) {
    console.log('RSVP post request failed', error);
  }
}

function* rsvpSaga() {
  yield takeLatest('RSVP_EVENT', rsvpEvent);
}

export default rsvpSaga;
