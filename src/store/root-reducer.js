import { combineReducers } from "redux";
import HeaderReducer from "./head/header.reducer";

export const rootReducer = combineReducers({
    head: HeaderReducer
})