import * as types from "../types";
import * as api from "../../apis";

export const loginUser = () => (dispatch) => {
  dispatch({ type: types.LOGIN });
};
export const getAccessToken = () => async (dispatch) => {
  try {
    const { data } = await api.getAccessToken();

    dispatch({ type: types.GET_TOKEN, payload: data.access_token });
  } catch (error) {
    return error.response?.data?.message;
  }
};
export const getUser = (token) => async (dispatch) => {
  try {
    const { data } = await api.getUser(token);

    dispatch({ type: types.GET_USER, payload: data });
  } catch (error) {
    return error.response.data.message;
  }
};

export const updateAvatar = (avatar, token) => async (dispatch) => {
  try {
    const { data } = await api.updateAvatar(avatar, token);
    console.log(data);
    dispatch({ type: types.UPDATE_AVATAR, payload: data.avatar });
  } catch (error) {
    console.log(error);
  }
};
export const logoutUser = () => (dispatch) => {
  try {
    dispatch({ type: types.LOGOUT });
  } catch (error) {
    console.log(error);
  }
};

export const updateFavorites = (id, token, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const { data } = await api.updateFavorites(id, token);
    dispatch({ type: types.UPDATE_FAVORITES, payload: data });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
export const getFavorites = (token, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const { data } = await api.getFavorites(token);
    dispatch({ type: types.GET_FAVORITES, payload: data });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
