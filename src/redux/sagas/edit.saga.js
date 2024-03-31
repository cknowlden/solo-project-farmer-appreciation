import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* editEvent(action) {
  try {
    const infoResponse = yield axios.put(
      `/api/events/${action.payload.id}`,
      action.payload.formData
    );
    yield put({ type: 'FETCH_DETAILS', payload: action.payload.id });
  } catch (error) {
    console.log('Could not edit event', error);
  }
}

function* editSaga() {
  yield takeLatest('EDIT_EVENT', editEvent);
}

export default editSaga;
