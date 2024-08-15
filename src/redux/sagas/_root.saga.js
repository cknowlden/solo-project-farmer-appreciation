import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import resourcesSaga from './resources.saga';
import eventsSaga from './events.saga';
import infoSaga from './info.saga';
import createSaga from './create.saga';
import detailsSaga from './details.saga';
import rsvpSaga from './rsvp.saga';
import deleteSaga from './delete.saga';
import editSaga from './edit.saga';
import rsvpCountSaga from './rsvpCount.saga';
import fetchRSVPSaga from './fetchRSVP.saga';
import searchSaga from './search.saga';
import deleteRSVPSaga from './deleteRSVP.saga';
// import uploadSaga from './upload.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    resourcesSaga(),
    eventsSaga(),
    infoSaga(),
    createSaga(),
    detailsSaga(),
    rsvpSaga(),
    deleteSaga(),
    editSaga(),
    rsvpCountSaga(),
    fetchRSVPSaga(),
    searchSaga(),
    // uploadSaga(),
    deleteRSVPSaga(),
  ]);
}
