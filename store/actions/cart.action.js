import * as types from "../types";
import * as apis from "../../apis";

export const addToCart = (cart, token, setLoadingCart) => async (dispatch) => {
  try {
    setLoadingCart(true);
    const { data } = await apis.addToCart(cart, token);
    dispatch({ type: types.ADD_TO_CART, payload: data });
    setLoadingCart(false);
  } catch (error) {
    setLoadingCart(false);
    console.log(error);
  }
};
export const getCart = (token, setLoadingPage) => async (dispatch) => {
  try {
    setLoadingPage(true);
    const { data } = await apis.getCart(token);
    dispatch({ type: types.GET_CART, payload: data });
    setLoadingPage(false);
  } catch (error) {
    setLoadingPage(false);
    console.log(error);
  }
};
export const removeFromCart = (id, setLoadingRemove) => async (dispatch) => {
  try {
    setLoadingRemove(true);
    const { data } = await apis.removeFromCart(id);
    dispatch({ type: types.REMOVE_FROM_CART, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const incrementCart = (id, setLoadingInc) => async (dispatch) => {
  try {
    setLoadingInc(true);
    await apis.incrementCart(id);
    dispatch({ type: types.INCREASE_FROM_CART, payload: id });
    setLoadingInc(false);
  } catch (error) {
    setLoadingInc(false);
    console.log(error);
  }
};
export const decrementCart = (id, setLoadingDec) => async (dispatch) => {
  try {
    setLoadingDec(true);
    await apis.decrementCart(id);
    dispatch({ type: types.DECREASE_FROM_CART, payload: id });
    setLoadingDec(false);
  } catch (error) {
    setLoadingDec(false);
    console.log(error);
  }
};
