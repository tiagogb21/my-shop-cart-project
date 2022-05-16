import { createStore } from "redux";

import rootReducer from "../reducers/myReducer";

const store = createStore(rootReducer);

export default store;
