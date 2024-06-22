
function RelatedNews({ item }) {
  const { avatar, title } = item;
  return (
    <div className="flex flex-col">
      <img src={avatar} />
      <h2 className="text-[14px] font-semibold">{title}</h2>
    </div>
  );
}

export default RelatedNews;
