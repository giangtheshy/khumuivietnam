import axios from "./axios";
export const getProducts = () => axios.get("/api/products/getProducts");
export const getProduct = (id) => axios.get(`/api/products/getProduct/${id}`);
