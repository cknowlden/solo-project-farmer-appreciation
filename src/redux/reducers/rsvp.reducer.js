const rsvpReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_RSVP':
      return action.payload;
    default:
      return state;
  }
};

export default rsvpReducer;
