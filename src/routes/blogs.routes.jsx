import { Route, Routes } from "react-router-dom";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";

function BlogsRoute() {
  return (
    <Routes>
      <Route path="/" index element={<Blog />} />
      <Route path="/:slug" element={<BlogDetail />} />
    </Routes>
  );
}

export default BlogsRoute;

