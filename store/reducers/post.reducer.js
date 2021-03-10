import * as types from "../types";
const initState = {
  posts: [],
  post: {},
  loading: false,
  error: null,
};
export default (state = initState, action) => {
  switch (action.type) {
    case types.GET_POST:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};
