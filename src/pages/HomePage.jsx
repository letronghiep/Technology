import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "~/components/layout/layout";
import Loading from "~/components/loading/pre-loading";
import FlashSales from "~/components/product/flash-sale/flash-sales";
import NewProducts from "~/components/product/products-slide/new-products";
import Sidebar from "~/components/sidebar";
import { getAllCategories } from "../services/categories";
import { getAllProducts } from "../services/products";
import { setNews, setProducts } from "../store/data/data.reducer";
import { setLimit, setPage } from "../store/filter/filter.reducer";
import { getAllNews } from "../services/news";
import SliderNews from "../components/news/slider-news/slider-news";

// import ProductLists from "~/components/product/product-list";

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [listNews, setListNews] = useState();
  const { page, sort, limit } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  async function fetchedCategories() {
    const data = await getAllCategories();
    if (data) {
      setCategories(data.metadata);
    }
  }
  useEffect(() => {
    setIsLoading(true);
    fetchedCategories();
    setIsLoading(false);
  }, []);
  useEffect(() => {
    async function fetchedNews() {
      const data = await getAllNews();
      console.log("Dc", data)
      if (data) {
        setListNews(data.metadata);
        dispatch(setNews(data.metadata));
      }
    }
    fetchedNews();
  }, []);
  console.log("LIst", listNews);
  useEffect(() => {
    async function fetchedProducts() {
      const data = await getAllProducts({ page, sort, limit });
      if (data) {
        setProduct(data.metadata.data);
        dispatch(setProducts(data.metadata.data));
        dispatch(setPage(data.metadata.currentPage));
        // dispatch(setSort(data.metadata.))
        dispatch(setLimit(data.metadata.limit));
      }
    }
    fetchedProducts();
  }, [page, sort, limit]);
 
  const pcs = useMemo(() => {
    return product.filter((item) => item.category_id?.category_name === "PC");
  }, [product]);
  const laptops = useMemo(() => {
    return product.filter(
      (item) => item.category_id?.category_name === "Laptop"
    );
  }, [product]);
  if (isLoading) return <Loading />;
  return (
    <Layout>
      {/* <Header /> */}
      <>
        <Sidebar categories={categories} />
        <FlashSales products={product} />
        <NewProducts title="PC bán chạy" products={pcs} />
        <NewProducts title="Laptop bán chạy" products={laptops} />
        <SliderNews title="Bài viết" news={listNews} />
      </>
    </Layout>
  );
}

export default HomePage;
