import * as types from "../types";
import * as apis from "../../apis";
export const createProduct = (product, token) => async (dispatch) => {
  try {
    const { data } = await apis.createProduct(product, token);
    dispatch({ type: types.CREATE_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getProducts = (page,setLoading) => async (dispatch) => {
  try {
    setLoading(true)
    const { data } = await apis.getProducts(page);
    dispatch({ type: types.GET_PRODUCTS, payload: data });
    setLoading(false)
  } catch (error) {
    setLoading(false)
    console.log(error);
  }
};
export const updateProduct = (product, token) => async (dispatch) => {
  try {
    const { data } = await apis.updateProduct(product, token);
    dispatch({ type: types.UPDATE_PRODUCT, payload: { product: data } });
  } catch (error) {
    console.log(error);
  }
};
export const removeProduct = (id, token) => async (dispatch) => {
  try {
    const { data } = await apis.removeProduct(id, token);
    dispatch({ type: types.REMOVE_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    if (id) {
      const { data } = await apis.getProduct(id);
      dispatch({ type: types.GET_PRODUCT, payload: data });
    } else {
      dispatch({ type: types.GET_PRODUCT, payload: {} });
    }
  } catch (error) {
    console.log(error);
  }
};
export const setLoading = (type) => (dispatch) => {
  dispatch({ type: types.SET_LOADING, payload: type });
};
export const setEditProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.SET_EDIT_PRODUCT, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const searchProducts = (search, setLoading) => async (dispatch) => {
  try {
    setLoading(true)
    const { data } = await apis.searchProducts({ search });
    dispatch({ type: types.SEARCH_PRODUCTS, payload: data });
    setLoading(false)
  } catch (error) {
    setLoading(false)
    console.log(error);
  }
};
