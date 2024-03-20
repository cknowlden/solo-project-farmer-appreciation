import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_RESOURCES" actions
function* fetchResources() {
  try {
    const resourcesResponse = yield axios.get('/api/resources');
    yield put({ type: 'SET_RESOURCES', payload: resourcesResponse.data });
  } catch (error) {
    console.log('Resources get request failed', error);
  }
}

function* resourcesSaga() {
  yield takeEvery('FETCH_RESOURCES', fetchResources);
}

export default resourcesSaga;
