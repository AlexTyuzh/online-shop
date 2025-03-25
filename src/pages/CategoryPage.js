import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useProducts } from "../context/ProductsContext";
import "./CategorySearchPage.css";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { products } = useProducts();

  const filteredProducts = products.filter((product) =>
    product.categories.includes(categoryName)
  );

  return (
    <div className="page-container">
      <h2 className="page-title">{categoryName}</h2>
      {filteredProducts.length > 0 ? (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <p className="no-results">No items in this category was found</p>
      )}
    </div>
  );
};

export default CategoryPage;
