const INITIAL_STATE = { name: "", email: "" };

const formReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FORM_INPUT":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default formReducers;
