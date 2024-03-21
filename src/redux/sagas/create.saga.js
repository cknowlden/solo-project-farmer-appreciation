import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "CREATE_EVENT" actions
function* createEvent(action) {
  try {
    const infoResponse = yield axios.post(
      '/api/events/create',
      action.payload.formData
    );
    yield put({ type: 'SET_CREATE' });
  } catch (error) {
    console.log('Create event post request failed', error);
  }
}

function* createSaga() {
  yield takeLatest('CREATE_EVENT', createEvent);
}

export default createSaga;
