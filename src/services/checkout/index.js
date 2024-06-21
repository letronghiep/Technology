import axiosInstance from "../../configs/axiosInstance";

export async function createCheckout(bankCode = "NCB", amount) {
  try {
    // const res = await axios({
    //   method: "POST",
    //   url: "http://localhost:3055/v1/api/auth/logout",
    //   // headers,

    //   // withCredentials: true,

    //   withCredentials: true,
    // });
    const res = await axiosInstance.post("/checkout", {
      bankCode,
      amount,
    });
    const data = await res.data;
    return data;
  } catch (error) {
    console.log("An error in logout", error);
  }
}
