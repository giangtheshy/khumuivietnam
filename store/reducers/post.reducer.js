import * as types from "../types";
const initState = {
  posts: [],
  post: {},
  loading: false,
  error: null,
};
const post = (state = initState, action) => {
  switch (action.type) {
    case types.GET_POST:
      return { ...state, posts: action.payload };
    case types.GET_SINGLE_POST:
      return { ...state, post: action.payload };

    case types.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
export default post;
