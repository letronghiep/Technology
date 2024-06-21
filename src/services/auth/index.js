import axiosInstance from "../../configs/axiosInstance";
const currentUser = localStorage.getItem("currentUser");
const token = JSON.parse(currentUser)?.accessToken;
export async function login(formData) {
  try {
    // const res = await axios({
    //   method: "POST",
    //   url: "http://localhost:3055/v1/api/auth/login",
    //   withCredentials: true,
    //   data: formData,
    //   headers: {
    //     "Content-Type": "application/json",
    //     'authorization': `Bearer ${token}`,
    //   },
    // });
    const res = await axiosInstance.post("/auth/login", formData);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log("An error in login", error);
  }
}
export async function registerUser(formData) {
  try {
    const res = await axiosInstance.post("/auth/register", formData);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log("An error in login", error);
  }
}
export async function logout() {
  try {
    // const res = await axios({
    //   method: "POST",
    //   url: "http://localhost:3055/v1/api/auth/logout",
    //   // headers,

    //   // withCredentials: true,

    //   withCredentials: true,
    // });
    const res= await axiosInstance.post('/auth/logout');
    const data = await res.data;
    return data;
  } catch (error) {
    console.log("An error in logout", error);
  }
}
