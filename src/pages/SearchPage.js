import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useProducts } from "../context/ProductsContext";
import "./CategorySearchPage.css";

const SearchPage = () => {
  const { searchInput } = useParams();
  const { products } = useProducts();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="page-container">
      <h2 className="page-title">Search for {searchInput}</h2>
      {filteredProducts.length > 0 ? (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <p className="no-results">No results</p>
      )}
    </div>
  );
};

export default SearchPage;
