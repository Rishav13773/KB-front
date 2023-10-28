const loaderReducer = (state = null, action) => {
  switch (action.type) {
    case "LOADER_SHOW":
      return action.payload;

    default:
      return state;
  }
};

export default loaderReducer;
