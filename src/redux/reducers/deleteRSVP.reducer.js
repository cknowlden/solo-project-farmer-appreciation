const deleteRSVPReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_DELETE_RSVP':
      return action.payload;
    default:
      return state;
  }
};

export default deleteRSVPReducer;
