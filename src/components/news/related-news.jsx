import { Link } from "react-router-dom";

function RelatedNews({ item }) {
  const { slug, avatar, title } = item;
  return (
    <Link to={`/blogs/${slug}`} className="flex flex-col mr-3">
      <img src={avatar} className="w-full h-[160px]"  />
      <h2 className="text-[14px] font-semibold  line-clamp-2">{title}</h2>
    </Link>
  );
}

export default RelatedNews;
