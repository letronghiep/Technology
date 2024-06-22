import { Container } from "@mui/material";
import  { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../components/layout/layout";
import { getAllNews } from "../services/news";
import { setNews } from "../store/data/data.reducer";
import SkeletonProduct from "../components/loading/skeleton-product";
import NewsItem from "../components/news/news-item";
function Blog() {
  const dispatch = useDispatch();
  const [listNews, setListNews] = useState();
  useEffect(() => {
    async function fetchedNews() {
      const data = await getAllNews();
      console.log(data);
      if (data) {
        setListNews(data.metadata);
        dispatch(setNews(data.metadata));
      }
    }
    fetchedNews();
  }, []);
  if (!listNews) return <SkeletonProduct />;
  return (
    <Layout>
      <Container>
        <div className="px-2 py-8 bg-white rounded-md">
          {listNews.map((item) => (
            <NewsItem news={item} key={item._id} />
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export default Blog;
