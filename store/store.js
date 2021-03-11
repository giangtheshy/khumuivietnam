import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";

const initState = {};
const middleware = [thunk];

const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(...middleware)));
const makeStore = () => store;
export const wrapper = createWrapper(makeStore, { debug: false });
export default store;
