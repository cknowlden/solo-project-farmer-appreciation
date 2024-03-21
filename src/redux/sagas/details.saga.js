import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_DETAILS" actions
function* fetchDetails(action) {
  try {
    const detailsResponse = yield axios.get(`/api/events/${action.payload}`);
    yield put({ type: 'SET_DETAILS', payload: detailsResponse.data });
  } catch (error) {
    console.log('Details get request failed', error);
  }
}

function* detailsSaga() {
  yield takeEvery('FETCH_DETAILS', fetchDetails);
}

export default detailsSaga;
