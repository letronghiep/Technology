import axiosInstance from "../../configs/axiosInstance";

export async function createCheckout(formCheckout) {
  try {
    const res = await axiosInstance.post("/checkout", formCheckout);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log("An error::", error);
  }
}
