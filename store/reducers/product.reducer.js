import * as types from "../types";
import { HYDRATE } from "next-redux-wrapper";
const initState = {
  products: [],
  product: {},
  loading: false,
  error: null,
};
const product = (state = initState, action) => {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state,
        ...action.payload.product,
      };
      if (nextState.products.length === 0) nextState.products = state.products;

      return nextState;
    case types.GET_PROPS_HOME:
      return { ...state, products: action.payload.products }
    case types.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case types.GET_PRODUCT:
      return { ...state, product: action.payload };

    case types.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
export default product;
