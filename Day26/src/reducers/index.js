import formReducers from "./formReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  form: formReducers
});

export default rootReducer;
