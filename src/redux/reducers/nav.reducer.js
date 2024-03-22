const navReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return action.payload;
    default:
      return state;
  }
};

export default navReducer;
