import { combineReducers } from "redux";
import visibilityFilter from "./filters";
import todos from "./todos";

export default combineReducers({ todos, visibilityFilter });
