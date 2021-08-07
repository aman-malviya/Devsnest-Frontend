const INITIAL_STATE = [];

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "DEL_ITEM":
      return state.filter((value, index) => index !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;
