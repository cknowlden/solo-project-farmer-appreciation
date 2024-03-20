import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_INFO" actions
function* fetchInfo() {
  try {
    const infoResponse = yield axios.get('/api/info');
    yield put({ type: 'SET_INFO', payload: infoResponse.data });
  } catch (error) {
    console.log('Info get request failed', error);
  }
}

function* infoSaga() {
  yield takeEvery('FETCH_INFO', fetchInfo);
}

export default infoSaga;
