import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducerCounter";
import { divReducer } from './reducerDiv';

let rootReducer = combineReducers({
    counterReducer, divReducer
})

export const store = createStore(rootReducer);