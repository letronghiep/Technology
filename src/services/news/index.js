import axiosInstance from "../../configs/axiosInstance";

export async function getAllNews () {
    try {
      const res = await axiosInstance.get('/news');
      const data = await res.data;
      return data;

    } catch (error) {
        console.log("An error in get news", error)
    }
}