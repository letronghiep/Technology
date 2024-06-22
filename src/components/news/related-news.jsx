import { Link } from "react-router-dom";

function RelatedNews({ item }) {
  const { slug, avatar, title } = item;
  return (
    <Link to={`/blogs/${slug}`} className="flex flex-col">
      <img src={avatar} />
      <h2 className="text-[14px] font-semibold">{title}</h2>
    </Link>
  );
}

export default RelatedNews;
