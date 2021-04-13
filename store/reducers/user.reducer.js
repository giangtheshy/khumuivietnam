import * as types from "../types";

const initState = {
  user: null,
  favorites: [],
  role: null,
  token: 0,
  isLogged: false,
  loading: false,
  error: null,
};
const user = (state = initState, { type, payload }) => {
  switch (type) {
    case types.LOGIN:
      return { ...state, isLogged: true };
    case types.GET_USER:
      return { ...state, user: payload, role: payload.role };
    case types.GET_TOKEN:
      return { ...state, token: payload };
    case types.UPDATE_FAVORITES:
      return { ...state, user: { ...state.user, favorites: payload.favorites } };
    case types.GET_FAVORITES:
      return { ...state, favorites: payload };
    case types.UPDATE_AVATAR:
      return { ...state, user: { ...state.user, avatar: payload } };
    case types.SET_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
export default user;
