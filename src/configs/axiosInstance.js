// utils/axios.js

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3055/v1/api", // Thay thế bằng URL của API của bạn
  timeout: 3000, // Đặt thời gian timeout nếu cần
  headers: {
    "Content-Type": "application/json",
  },
});
// axiosInstance.defaults.withCredentials = true;
export default axiosInstance;