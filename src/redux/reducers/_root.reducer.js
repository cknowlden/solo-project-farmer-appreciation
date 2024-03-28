import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import resources from './resources.reducer';
import events from './events.reducer';
import info from './info.reducer';
import create from './create.reducer';
import details from './details.reducer';
import title from './nav.reducer';
import rsvp from './rsvp.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  resources, //returns links to resources
  events, //full list of all events
  info, //statistical data pulled
  create, //creates event
  details, //pulls details for close up of events
  title, //displays the current page title in nav bar
  rsvp, //ingests user information for rsvp
});

export default rootReducer;
