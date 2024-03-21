import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_DETAILS" actions
function* fetchDetails() {
  try {
    const eventsResponse = yield axios.get('/api/events');
    yield put({ type: 'SET_DETAILS', payload: eventsResponse.data });
  } catch (error) {
    console.log('Events get request failed', error);
  }
}

function* detailsSaga() {
  yield takeEvery('FETCH_DETAILS', fetchDetails);
}

export default detailsSaga;
