import { combineReducers } from "redux";
import product from "./product.reducer";
import post from "./post.reducer";
import user from "./user.reducer";
import cart from "./cart.reducer";
export default combineReducers({ product, post, user, cart });
