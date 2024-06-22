import axiosInstance from "../../configs/axiosInstance";

export async function addItemToCart(formData)  {
    try {
        const res = await axiosInstance.post("/cart", formData);
        const data = await res.data;
        return data;
    } catch (error) {
        throw new Error(error);
    }   
}