import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductsRoute from "./routes/products.routes";
import Cart from "./pages/Cart";
import AccountOrder from "./components/account/account-order";
import AccountProfile from "./components/account/account-profile";
import AccountSettings from "./components/account/account-settings";

function App() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const view = searchParams.get("view");
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/products/*" element={<ProductsRoute />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/taikhoan"
        element={
          view === "account-order" ? (
            <AccountOrder />
          ) : view === "account-profile" ? (
            <AccountProfile />
          ) : view === "account-settings" ? (
            <AccountSettings />
          ) : (
            <h1>Page Not Founds</h1>
          )
        }
      />
    </Routes>
  );
}

export default App;
