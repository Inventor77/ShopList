import map from "./reducer";
import sea from "./search";
import { combineReducers } from "redux";


const all = combineReducers({
    map,
    sea
})

export default all