import { combineReducers } from "redux";
import calcReducer from "./calculationReducer";


export const rootReducer = combineReducers({
    calculation: calcReducer
})
