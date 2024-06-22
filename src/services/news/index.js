import axiosInstance from "../../configs/axiosInstance";

export async function getAllNews() {
  try {
    const res = await axiosInstance.get("/news");
    const data = await res.data;
    return data;
  } catch (error) {
    console.log("An error in get news", error);
  }
}

export async function getNewsBySlug(slug) {
  try {
    const res = await axiosInstance.get(`/news/${slug}`);
    const data = await res.data;
    console.log("data!:", data);
    return data;
  } catch (error) {
    console.log("An error in get product", error);
  }
}
