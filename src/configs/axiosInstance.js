// // utils/axios.js

// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3055/v1/api", // Thay thế bằng URL của API của bạn
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosInstance;
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3055/v1/api", // Thay thế bằng URL của API của bạn
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Thêm dòng này để gửi cookie cùng với các yêu cầu
});

// Thiết lập interceptor để thêm header Authorization cho mọi yêu cầu
axiosInstance.interceptors.request.use(
  (config) => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const accessToken = JSON.parse(currentUser).accessToken;
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    } else {
      // Handle case when there's no logged in user (e.g., clear headers)
      delete config.headers["Authorization"];
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
