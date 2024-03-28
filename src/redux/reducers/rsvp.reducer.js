const rsvpReducer = (state = [], action) => {
  switch (action.type) {
    case 'RSVP_EVENT':
      return action.payload;
    default:
      return state;
  }
};

export default rsvpReducer;
