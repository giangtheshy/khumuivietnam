import * as types from "../types";
import * as apis from "../../apis";
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await apis.getPosts();
    dispatch({ type: types.GET_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
