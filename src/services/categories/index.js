import axiosInstance from "../../configs/axiosInstance";

export async function getAllCategories () {
    try {
      const res = await axiosInstance.get('/category');
      const data = await res.data;
      console.log("Cate", data)
      return data;

    } catch (error) {
        console.log("An error in get categories", error)
    }
}