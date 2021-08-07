import { combineReducers } from "redux";
import placeDataReducer from "./placeDataReducer";
import placeReducer from "./placeReducer";

const rootReducer = combineReducers({
    place:placeReducer,
    placeData:placeDataReducer,
})

export default rootReducer;