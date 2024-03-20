import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_EVENTS" actions
function* fetchEvents() {
  try {
    const eventsResponse = yield axios.get('/api/events');
    yield put({ type: 'SET_EVENTS', payload: eventsResponse.data });
  } catch (error) {
    console.log('Events get request failed', error);
  }
}

function* eventsSaga() {
  yield takeEvery('FETCH_EVENTS', fetchEvents);
}

export default eventsSaga;
