import * as types from "../types";

const initState = {
  user: null,
  favorites: [],
  loading: false,
  error: null,
};
const user = (state = initState, action) => {
  switch (action.type) {

    case types.REGISTER:
    case types.LOGIN:
    case types.CHECK_LOGIN:
    case types.LOGIN_GOOGLE:
      return { ...state, user: action.payload };
    case types.LOGOUT:
      return { ...state, user: null };
    case types.UPDATE_FAVORITES:
      return { ...state, user: { ...state.user, user: { ...state.user.user, favorites: action.payload.favorites } } };
    case types.GET_FAVORITES:
      return { ...state, favorites: action.payload }
    case types.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
export default user;