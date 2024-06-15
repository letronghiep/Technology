// Create Api

import axiosInstance from "../../configs/axiosInstance";

export async function getAllProducts({ page, limit, sort }) {
  try {
    const res = await axiosInstance.get(
      `/product?page=${page}&limit=${limit}&sort=${sort}`
    );
    const data = await res.data;
    console.log(`page: ${page}, limit: ${limit}, sort: ${sort}`);
    return data;
  } catch (error) {
    console.log("An error in get products", error);
  }
}
export async function getProductBySlug(slug) {
  try {
    const res = await axiosInstance.get(`/product/${slug}`);
    const data = await res.data;
    console.log("data!:",data)
    return data;
  } catch (error) {
    console.log("An error in get product", error);
  }
}
