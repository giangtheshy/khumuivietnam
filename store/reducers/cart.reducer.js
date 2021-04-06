import * as types from "../types";
const initState = {
  cart: [],
  loading: false,
  error: null,
};
const cart = (state = initState, action) => {
  switch (action.type) {

    case types.GET_CART:
      return { ...state, cart: action.payload }
    case types.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case types.REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item._id !== action.payload._id) };
    case types.INCREASE_FROM_CART:
      return { ...state, cart: state.cart.map(item => item._id === action.payload ? { ...item, quantity: item.quantity + 1 } : item) }
    case types.DECREASE_FROM_CART:
      return { ...state, cart: state.cart.map(item => item._id === action.payload ? { ...item, quantity: item.quantity - 1 } : item) }
    case types.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
export default cart;
