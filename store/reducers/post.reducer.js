import * as types from "../types";
import { HYDRATE } from "next-redux-wrapper";
const initState = {
  posts: [],
  post: {},
  loading: false,
  error: null,
};
const post = (state = initState, action) => {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state,
        ...action.payload.post,
      };
      if (state.posts.length > 0) nextState.posts = state.posts;

      return nextState;
    case types.GET_POST:
      return { ...state, posts: action.payload };
    case types.GET_SINGLE_POST:
      return { ...state, ...action.payload };

    case types.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
export default post;
