import { combineReducers } from "redux";
import sessionSlice from "./sessionSlice";
import persistedSlice from "./persistedSlice";

export default combineReducers({ sessionSlice, persistedSlice });
