const deleteEventReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_DELETE_EVENT':
      return action.payload;
    default:
      return state;
  }
};

export default deleteEventReducer;
