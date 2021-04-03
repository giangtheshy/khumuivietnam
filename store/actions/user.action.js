import * as types from "../types";
import * as api from "../../apis";

export const registerUser = (user, setCookies) => async (dispatch) => {
  try {
    await api.registerUser(user);
    const { data } = await api.loginUser({ email: user.email, password: user.password });
    await setCookies("user", data.token, { path: "/" });
    dispatch({ type: types.REGISTER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const loginUser = (user, setCookies) => async (dispatch) => {
  try {
    const { data } = await api.loginUser({ email: user.email, password: user.password });
    await setCookies("user", data.token, { path: "/" });
    dispatch({ type: types.LOGIN, payload: data });
  } catch (error) {
    return error.response.data.message;
  }
};
export const logoutUser = () => (dispatch) => {
  try {
    dispatch({ type: types.LOGOUT });
  } catch (error) {
    console.log(error);
  }
};
export const checkLogin = (token) => async (dispatch) => {
  try {

    if (token) {
      const check = await api.checkLogin(token);
      if (check.data) {
        const { data } = await api.getUser(token);
        dispatch({ type: types.CHECK_LOGIN, payload: { user: data, token } });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
export const loginGoogle = (user, setCookies) => async (dispatch) => {
  try {
    const { data } = await api.loginGoogle(user);
    setCookies("user", data.token, { path: "/" });
    dispatch({ type: types.LOGIN_GOOGLE, payload: data });
  } catch (error) {
    console.log(error);
  }
};