const rsvpCountReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_RSVP_COUNT':
      return { ...state, [action.payload.id]: action.payload.data };
    default:
      return state;
  }
};

export default rsvpCountReducer;
