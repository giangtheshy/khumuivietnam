import * as types from "../types";
import * as apis from "../../apis";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await apis.getPosts();
    dispatch({ type: types.GET_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const editPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: types.EDIT_POST, payload: post });
  } catch (error) {
    console.log(error);
  }
};
