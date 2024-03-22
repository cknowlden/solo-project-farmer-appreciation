import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchTitle() {
  try {
    yield put({ type: 'SET_TITLE', payload: title });
  } catch (error) {
    console.log('title get request failed', error);
  }
}

function* navSaga() {
  yield takeEvery('FETCH_TITLE', fetchTitle);
}

export default navSaga;
