import axios from "./axios";
export const getPosts = () => axios.get("/api/posts");
export const getSinglePost = (id) => axios.get(`/api/post/${id}`);
