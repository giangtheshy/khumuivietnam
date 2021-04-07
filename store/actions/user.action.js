import * as types from "../types";
import * as api from "../../apis";

export const registerUser = (user, setCookies, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    await api.registerUser(user);
    const { data } = await api.loginUser({ email: user.email, password: user.password });
    await setCookies("user", data.token, { path: "/" });
    dispatch({ type: types.REGISTER, payload: data });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    return error.response.data.message;
  }
};
export const loginUser = (user, setCookies, setLoading) => async (dispatch) => {
  try {
    setLoading(true)
    const { data } = await api.loginUser({ email: user.email, password: user.password });
    await setCookies("user", data.token, { path: "/" });
    dispatch({ type: types.LOGIN, payload: data });
    setLoading(false)
  } catch (error) {
    setLoading(false)
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
export const updateFavorites = (id, token, setLoading) => async (dispatch) => {
  try {
    setLoading(true)
    const { data } = await api.updateFavorites(id, token);
    dispatch({ type: types.UPDATE_FAVORITES, payload: data });
    setLoading(false)
  } catch (error) {
    setLoading(false)
    console.log(error);
  }
};
export const getFavorites = (token, setLoading) => async (dispatch) => {
  try {
    setLoading(true)
    const { data } = await api.getFavorites(token);
    dispatch({ type: types.GET_FAVORITES, payload: data });
    setLoading(false)
  } catch (error) {
    setLoading(false)
    console.log(error);
  }
};