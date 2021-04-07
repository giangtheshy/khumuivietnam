import * as types from "../types";
import * as apis from "../../apis";

export const addToCart = (cart, token) => async (dispatch) => {
  try {
    const { data } = await apis.addToCart(cart, token);
    dispatch({ type: types.ADD_TO_CART, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getCart = (token) => async (dispatch) => {
  try {
    const { data } = await apis.getCart(token);
    dispatch({ type: types.GET_CART, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const removeFromCart = (id) => async (dispatch) => {
  try {
    const { data } = await apis.removeFromCart(id);
    dispatch({ type: types.REMOVE_FROM_CART, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const incrementCart = (id) => async (dispatch) => {
  try {
    apis.incrementCart(id);
    dispatch({ type: types.INCREASE_FROM_CART, payload: id });
  } catch (error) {
    console.log(error);
  }
};
export const decrementCart = (id) => async (dispatch) => {
  try {
    apis.decrementCart(id);
    dispatch({ type: types.DECREASE_FROM_CART, payload: id });
  } catch (error) {
    console.log(error);
  }
};