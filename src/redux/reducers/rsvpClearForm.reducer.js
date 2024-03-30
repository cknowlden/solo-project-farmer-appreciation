const rsvpClearForm = (state = null, action) => {
  if (action.type === 'RESET') {
    return formData;
  }

  const result = { ...state };
  result[action.type] = action.value;
  return result;
};

export default rsvpClearForm;
