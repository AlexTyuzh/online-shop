import Hero from "./Hero";
import Card from "../../components/Card";
import { useProducts } from "../../context/ProductsContext";
import "./HomePage.css";
import CategoryHeroPage from "./CategoryHeroPage";

export default function Homepage() {
  const { products } = useProducts();

  return (
    <div className="homepage">
      <Hero />
      <h2 className="homepage-title">Categories</h2>

      <CategoryHeroPage />
      <h2 className="homepage-title">Descover our products</h2>
      <div className="product-list">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
