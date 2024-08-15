import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker saga: will be fired on "DELETE_RSVP" actions
function* deleteEvent(action) {
  try {
    const detailsResponse = yield axios.delete(
      `/api/details/${action.payload.id}`
    );
    yield put({ type: 'SET_DELETE_EVENT', payload: detailsResponse.data });
  } catch (error) {
    console.log('Event could not be deleted', error);
  }
}
function* deleteSaga() {
  yield takeEvery('DELETE_EVENT', deleteEvent);
}

export default deleteSaga;
