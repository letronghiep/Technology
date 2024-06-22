import { Route, Routes, useLocation } from "react-router-dom";

import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import AccountRoute from "./routes/account.routes";
import BlogsRoute from "./routes/blogs.routes";
import CollectionRoutes from "./routes/collections.routes";
import ProductsRoute from "./routes/products.routes";

function App() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const view = searchParams.get("view");
  console.log(view);
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/products/*" element={<ProductsRoute />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/blogs/*" element={<BlogsRoute />} />
      {/* <Route
        path="/taikhoan"
        element={
          view === "account-order" ? (
            <AccountOrder />
          ) : view === "account-profile" ? (
            <AccountProfile />
          ) : view === "account-settings" ? (
            <AccountSettings />
          ) : view === "account-order/:id" ? (
            <OrderDetail />
          ) : (
            <h1>Page Not Founds</h1>
          )
        }
      />
       */}
      <Route path="/taikhoan/*" element={<AccountRoute />} />
      <Route path="/collections/*" element={<CollectionRoutes />} />
    </Routes>
  );
}

export default App;
