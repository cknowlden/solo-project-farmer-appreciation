import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "UPLOAD_IMAGE" actions
function* uploadImage(action) {
  const fileName = encodeURIComponent(selectedFile.name);
  try {
    const infoResponse = yield axios.post(
      `/api/events/image?imageName=${fileName}`,
      action.payload.formData.image
    );
    yield put({ type: 'SET_UPLOAD' });
  } catch (error) {
    console.log('Upload image request failed', error);
  }
}

function* createSaga() {
  yield takeLatest('UPLOAD_IMAGE', uploadImage);
}

export default createSaga;
