import * as types from "../types";

const initState = {
  user: null,
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
    case types.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
export default user;