import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import HomePage from "../pages/homepage/HomePage";
import ProductPage from "../pages/ProductPage";
import CategoryPage from "../pages/CategoryPage";
import SearchPage from "../pages/SearchPage";

const Routing = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="/category/:categoryName" element={<CategoryPage />} />
    <Route path="/search/:searchInput" element={<SearchPage />} />
  </Routes>
);

export default Routing;
