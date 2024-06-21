import axiosInstance from "../../configs/axiosInstance";

export async function getAllOrderById() {
  try {
    const res = await axiosInstance(`/order`);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createOrder(formData) {
  try {
    const res = await axiosInstance.post("/order", formData);
    const data = await res.data;
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
