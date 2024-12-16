import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { langReducer } from "./langReducer";

export const reducers = combineReducers({
    movieRed: movieReducer,
    langRed: langReducer
})