import { Route, Routes } from "react-router-dom";
import FlashSale from "../pages/FlashSale";
import ProductDetail from "../pages/ProductDetail";

function ProductsRoute() {
  return (
    <Routes>
      <Route path="/:slug" element={<ProductDetail />} />
      <Route path="/flash-sale-laptop" element={<FlashSale />} />
    </Routes>
  );
}

export default ProductsRoute;
