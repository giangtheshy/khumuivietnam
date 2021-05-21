import axios from "./axios";
axios.defaults.withCredentials = true;

// ===================API Product======================
export const createProduct = (product, token) =>
  axios.post("/api/products/createProduct", product, { headers: { Authorization: token } });
export const getProducts = (page) => axios.get(`/api/products/getProducts?page=${page}`);
export const getProduct = (id) => axios.get(`/api/products/getProduct/${id}`);
export const updateProduct = (product, token) =>
  axios.patch(`/api/products/updateProduct/${product._id}`, product, { headers: { Authorization: token } });
export const removeProduct = (id, token) =>
  axios.delete(`/api/products/removeProduct/${id}`, { headers: { Authorization: token } });
export const searchProducts = (search) => axios.post(`/api/products/search`, search);
export const getProductsUnVerify = (token) =>
  axios.get(`/api/products/get_unverify`, { headers: { Authorization: token } });
export const verifyProduct = (id, token) =>
  axios.get(`/api/products/verify/${id}`, { headers: { Authorization: token } });

// ===================API Post======================
export const createPost = (post, token) =>
  axios.post("/api/posts/createPost", post, { headers: { Authorization: token } });
export const removePost = (id, token) => axios.delete(`/api/posts/delete/${id}`, { headers: { Authorization: token } });
export const updatePost = (post, token) =>
  axios.patch(`/api/posts/update`, post, { headers: { Authorization: token } });
export const getPosts = () => axios.get("/api/posts/getPosts");
export const getPost = (title) => axios.get(`/api/posts/getPost/${title}`);

// ===================API User======================
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
export const UpdateUser = (name, token) => axios.patch("/api/user/update", name, { headers: { Authorization: token } });
export const updateUserRole = (id, role, token) =>
  axios.post(`/api/user/update_role/${id}`, role, { headers: { Authorization: token } });
export const updateAvatar = (avatar, token) =>
  axios.patch("/api/user/update_avatar", avatar, { headers: { Authorization: token } });
export const getUser = (token) => axios.get("/api/user/info", { headers: { Authorization: token } });
export const getAllUsers = (token) => axios.get("/api/user/get_all", { headers: { Authorization: token } });
export const deleteUser = (id, token) => axios.delete(`/api/user/delete/${id}`, { headers: { Authorization: token } });

export const updateFavorites = (id, token) =>
  axios.patch(`/api/user/updateFavorites/${id}`, null, { headers: { Authorization: token } });
export const getFavorites = (token) => axios.get(`/api/user/getFavorites`, { headers: { Authorization: token } });

// ===================API Cart======================
export const addToCart = (cart, token) =>
  axios.post("/api/cart/addToCart", cart, { headers: { Authorization: token } });
export const getCart = (token) => axios.get("/api/cart/getCarts", { headers: { Authorization: token } });
export const removeFromCart = (id) => axios.delete(`/api/cart/removeFromCart/${id}`);
export const incrementCart = (id) => axios.patch(`/api/cart/incrementCart/${id}`);
export const decrementCart = (id) => axios.patch(`/api/cart/decrementCart/${id}`);

// ===================API Payment======================
export const createPayment = (data, token) =>
  axios.post("/api/payment/create", data, { headers: { Authorization: token } });
export const returnVnPay = (query) => axios.get(`/api/payment/vnpay_return${query}`);

// ===================API Bill======================
export const getAllBillByUser = (token) => axios.get("/api/bill/get_bills", { headers: { Authorization: token } });
export const getAllBills = (token) => axios.get("/api/bill/get_all", { headers: { Authorization: token } });

// ===================API Request======================
export const createRequest = (data) => axios.post("api/request/create", data);
export const confirmRequest = (id, token) =>
  axios.get(`api/request/confirm/${id}`, { headers: { Authorization: token } });
export const getAllRequest = (token) => axios.get(`api/request/get_all`, { headers: { Authorization: token } });
export const deleteRequest = (id, token) =>
  axios.delete(`api/request/delete/${id}`, { headers: { Authorization: token } });
