import { combineReducers } from "redux";
import { useReducer } from "./userReducer";
import projectReducer from "./project/projectsReducer";
import loaderReducer from "./loader/loaderReducers";

const rootReducer = combineReducers({
  user: useReducer,
  projects: projectReducer,
  loader: loaderReducer,
});

export default rootReducer;
