import axios from "./axios";
axios.defaults.withCredentials = "same-origin";

export const createProduct = (product, token) =>
  axios.post("/api/products/createProduct", product, { headers: { Authorization: token } });
export const getProducts = (page) => axios.get(`/api/products/getProducts?page=${page}`);
export const getProduct = (id) => axios.get(`/api/products/getProduct/${id}`);
export const updateProduct = (product, token) =>
  axios.patch(`/api/products/updateProduct/${product._id}`, product, { headers: { Authorization: token } });
export const removeProduct = (id, token) =>
  axios.delete(`/api/products/removeProduct/${id}`, { headers: { Authorization: token } });
export const searchProducts = (search) => axios.post(`/api/products/search`, search);

export const getPosts = () => axios.get("/api/posts/getPosts");
export const getPost = (title) => axios.get(`/api/posts/getPost/${title}`);

export const loginUser = (user) => axios.post("/api/user/login", user);
export const registerUser = (user) => axios.post("/api/user/register", user);
export const activationToken = (token) => axios.post("/api/user/activate_email", { activation_token: token });
export const getAccessToken = () => axios.get("/api/user/refresh_token");
export const logout = () => axios.get("/api/user/logout");
export const forgot = (email) => axios.post("/api/user/forgot", email);
export const reset = (password, token) =>
  axios.post("/api/user/reset", password, { headers: { Authorization: token } });
export const googleLogin = (data) => axios.post("/api/user/google_login", data);
export const facebookLogin = (data) => axios.post("/api/user/facebook_login", data);
export const getUser = (token) => axios.get("/api/user/info", { headers: { Authorization: token } });

export const updateFavorites = (id, token) =>
  axios.patch(`/api/user/updateFavorites/${id}`, null, { headers: { Authorization: token } });
export const getFavorites = (token) => axios.get(`/api/user/getFavorites`, { headers: { Authorization: token } });

export const addToCart = (cart, token) =>
  axios.post("/api/cart/addToCart", cart, { headers: { Authorization: token } });
export const getCart = (token) => axios.get("/api/cart/getCarts", { headers: { Authorization: token } });
export const removeFromCart = (id) => axios.delete(`/api/cart/removeFromCart/${id}`);
export const incrementCart = (id) => axios.patch(`/api/cart/incrementCart/${id}`);
export const decrementCart = (id) => axios.patch(`/api/cart/decrementCart/${id}`);
