import * as types from "../types";
import { HYDRATE } from "next-redux-wrapper";
const initState = {
  posts: [],
  post: {},
  edit: null,
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
      if (nextState.posts.length === 0) nextState.posts = state.posts;

      return nextState;
    case types.GET_PROPS_HOME:
      return { ...state, posts: action.payload.posts }
    case types.GET_PROPS_POST:
      return { ...state, posts: action.payload.posts, post: action.payload.post }

    case types.GET_POSTS:
      return { ...state, posts: action.payload };
    case types.GET_POST:
      return { ...state, post: action.payload };
    case types.EDIT_POST:
      return { ...state, edit: action.payload };

    case types.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
export default post;
