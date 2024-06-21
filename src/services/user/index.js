// User
/* 
  Update user
*/

import axios from "axios";
// import axiosInstance from "../../configs/axiosInstance";
const currentUser = localStorage.getItem('currentUser');

export async function updateUserInfo(id, formData) {
  try {
    const res = await axios({
      method: "PUT",
      url: `http://localhost:3055/v1/api/user/${id}`,
      
      withCredentials: true,
      data: formData,
      headers: {
        "Content-Type": "application/json",
        "X-Foo": "bar",
        'authorization': `Bearer ${JSON.parse(currentUser).refreshToken}`
      },
    });
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
