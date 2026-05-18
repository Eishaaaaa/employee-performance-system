import axios from "axios";

const API = axios.create({
  baseURL: "https://employee-backend.onrender.com/api",
});

export default API;