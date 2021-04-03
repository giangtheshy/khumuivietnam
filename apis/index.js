import axios from "./axios";
export const getProducts = () => axios.get("/api/products/getProducts");
export const getProduct = (id) => axios.get(`/api/products/getProduct/${id}`);
export const getPosts = () => axios.get("/api/posts/getPosts");
export const getPost = (title) => axios.get(`/api/posts/getPost/${title}`);
