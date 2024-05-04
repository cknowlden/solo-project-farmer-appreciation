const createReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_UPLOAD':
      return action.payload;
    default:
      return state;
  }
};

export default createReducer;
