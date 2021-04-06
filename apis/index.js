import axios from "./axios";
export const getProducts = () => axios.get("/api/products/getProducts");
export const getProduct = (id) => axios.get(`/api/products/getProduct/${id}`);
export const getPosts = () => axios.get("/api/posts/getPosts");
export const getPost = (title) => axios.get(`/api/posts/getPost/${title}`);


export const loginUser = (user) => axios.post("/api/users/login", user);
export const registerUser = (user) => axios.post("/api/users/register", user);
// export const logoutUser = () => axios.get(`/api/users/logout`);
export const deleteUser = (id) => axios.delete(`/api/users/${id}`);
export const getUser = (token) => axios.get("/api/users", { headers: { "x-auth-token": token } });
export const checkLogin = (token) =>
  axios.post("/api/users/isValidToken", null, { headers: { "x-auth-token": token } });
export const loginGoogle = (user) => axios.post("/api/users/loginGoogle", user);

export const addToCart = (cart, token) => axios.post("/api/cart/addToCart", cart, { headers: { "x-auth-token": token } });
export const getCart = (token) => axios.get("/api/cart/getCarts", { headers: { "x-auth-token": token } });
export const removeFromCart = (id) => axios.delete(`/api/cart/removeFromCart/${id}`);
export const incrementCart = (id) => axios.patch(`/api/cart/incrementCart/${id}`)
export const decrementCart = (id) => axios.patch(`/api/cart/decrementCart/${id}`);
