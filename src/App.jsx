import { Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import ProductsRoute from './routes/products.routes';
import Cart from "./pages/Cart";

function App() {

  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/products/*" element={<ProductsRoute />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
