import axios from "axios";

export default axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "https://khumuivietnam.herokuapp.com/" : "http://localhost:5000/",
});
