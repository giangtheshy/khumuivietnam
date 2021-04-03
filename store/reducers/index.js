import { combineReducers } from "redux";
import product from "./product.reducer";
import post from "./post.reducer";
import user from "./user.reducer";
export default combineReducers({ product, post, user });
