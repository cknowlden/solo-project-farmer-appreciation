const rsvpCountReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_RSVP_COUNT':
      return action.payload;
    default:
      return state;
  }
};

export default rsvpCountReducer;
