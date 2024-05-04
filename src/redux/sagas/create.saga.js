import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "CREATE_EVENT" actions
function* createEvent(action) {
  try {
    const fileName = encodeURIComponent(action.payload.files.name);
    const formData = new FormData();
    formData.append('image', action.payload.files);
    formData.append('name', action.payload.formData.name);
    formData.append('date', action.payload.formData.date);
    formData.append('location', action.payload.formData.location);
    formData.append('street', action.payload.formData.street);
    formData.append('city', action.payload.formData.city);
    formData.append('state', action.payload.formData.state);
    formData.append('zip', action.payload.formData.zip);
    formData.append('cost', action.payload.formData.cost);
    formData.append('details', action.payload.formData.details);
    const infoResponse = yield axios.post(
      `/api/events/create/?imageName=${fileName}`,
      formData
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
