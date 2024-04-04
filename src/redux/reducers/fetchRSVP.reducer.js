const fetchRSVPReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_RSVP_FETCH':
      return action.payload;
    default:
      return state;
  }
};

export default fetchRSVPReducer;
