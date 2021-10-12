import all from "./components/reducers/combine";
import { createStore } from "redux";

const store = createStore(all)

export default store