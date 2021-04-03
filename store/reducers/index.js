import { combineReducers } from "redux";
import product from "./product.reducer";
import post from "./post.reducer";
export default combineReducers({ product, post });
