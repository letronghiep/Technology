import { Route, Routes } from "react-router-dom";
import ProductByCategory from "../pages/ProductByCategory";

function CollectionRoutes() {
  return (
    <Routes>
      <Route path="/:slug" element={<ProductByCategory />} />
    </Routes>
  );
}

export default CollectionRoutes;
