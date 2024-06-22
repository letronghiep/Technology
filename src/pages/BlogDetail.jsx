import  { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { getNewsBySlug } from "../services/news";
import SkeletonProduct from "../components/loading/skeleton-product";
import { formatDate } from "../libs/convertNumber";
import { useSelector } from "react-redux";
import RelatedNews from "../components/news/related-news";

function BlogDetail() {
  const { slug } = useParams();
  const [newsItem, setNewsItem] = useState();
  useEffect(() => {
    async function fetchedNewsItem() {
      const data = await getNewsBySlug(slug);
      if (data) {
        setNewsItem(data.metadata);
      }
    }
    fetchedNewsItem();
  }, [slug]);
  const { news } = useSelector((state) => state.data);
  console.log(news);
  const content = { __html: newsItem?.content };
  if (!newsItem) return <SkeletonProduct />;
  const relatedNews = news?.map(
    (item) => item._id !== newsItem?._id && item.tags.includes(newsItem?.tags)
  );
  return (
    <Layout>
      <Container>
        <div className="p-8 bg-white">
          <h1 className="text-[28px] font-bold text-center">
            {newsItem.title}
          </h1>
          <div className="text-[14px] text-center flex items-center gap-x-2 justify-center my-5">
            <p>{formatDate(newsItem.createdAt)}</p>
            <p>{newsItem.user_id.full_name}</p>
          </div>
          <div className="px-28" dangerouslySetInnerHTML={content} />
        </div>
        <div className="my-3">
          <h1 className="text-[28px]">Bài viết liên quan</h1>
          {relatedNews?.map((item) => (
            <RelatedNews key={item._id} item={item} />
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export default BlogDetail;
