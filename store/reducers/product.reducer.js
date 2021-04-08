import * as types from "../types";
import { HYDRATE } from "next-redux-wrapper";
const initState = {
  products: [],
  product: {},
  search: [],
  isEdit: null,
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
    case types.CREATE_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case types.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case types.GET_PRODUCT:
      return { ...state, product: action.payload };
    case types.UPDATE_FAVORITES:
    case types.UPDATE_PRODUCT:
      return { ...state, products: state.products.map(product => product._id === action.payload.product._id ? action.payload.product : product) }
    case types.REMOVE_PRODUCT:
      return { ...state, products: state.products.filter((product) => product._id !== action.payload._id) }
    case types.SEARCH_PRODUCTS:
      return { ...state, search: action.payload }
    case types.SET_EDIT_PRODUCT:
      return { ...state, isEdit: action.payload }
    case types.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
export default product;
