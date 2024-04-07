import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* searchEvents(action) {
  try {
    const eventsResponse = yield axios.get(`/api/search/${action.payload.zip}`);
    yield put({ type: 'SET_EVENTS', payload: eventsResponse.data });
  } catch (error) {
    console.log('Events get request failed', error);
  }
}

function* searchSaga() {
  yield takeEvery('FETCH_EVENTS_SEARCH', searchEvents);
}

export default searchSaga;
