import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker saga: will be fired on "DELETE_RSVP" actions
function* deleteRSVP(action) {
  try {
    // what is detailsResponse
    const detailsResponse = yield axios.delete(
      `/api/rsvp/${action.payload.id}`
    );
    yield put({ type: 'SET_DELETE_RSVP', payload: detailsResponse.data });
  } catch (error) {
    console.log('Event could not be deleted', error);
  }
}
function* deleteRSVPSaga() {
  yield takeEvery('DELETE_RSVP', deleteRSVP);
}

export default deleteRSVPSaga;
