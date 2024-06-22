import { formatDate } from "../../libs/convertNumber";
import { Link } from "react-router-dom";

function NewsItem({ news }) {
  console.log(news);
  const { title, slug, avatar, createdAt, user_id } = news;
  return (
    <Link
      to={`/blogs/${slug}`}
      className="flex gap-x-5 px-3 py-3 hover:bg-slate-100 shadow-sm shadow-slate-300 line-clamp-2"
    >
      <img src={avatar} alt="avatar" className="w-[220px] h-[140px]" />
      <div className="flex flex-col gap-y-2">
        <h3 className="font-semibold text-[14px]">{title}</h3>
        <p className="text-gray-500 text-[13px]">
          {formatDate(createdAt)} - <span>{user_id.full_name}</span>
        </p>
      </div>
    </Link>
  );
}

export default NewsItem;
