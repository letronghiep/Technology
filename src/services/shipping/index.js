import axiosInstance from "../../configs/axiosInstance";

export async function createShipping(formData) {
  try {
    const res = await axiosInstance.post("/shipping", formData);
    const data = await res.data;
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
export async function getShippingById(id) {
  try {
    const res = await axiosInstance(`/shipping/${id}`);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
