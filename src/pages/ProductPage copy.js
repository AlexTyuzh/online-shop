import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductsContext";
import "./ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { products } = useProducts();
  const product = (products || []).find((item) => item.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {product.inStock === 0 && <div className="card-soldout">SOLD OUT</div>}
      {product.inStock >= 1 && (
        <div className="card-stock">In Stock: {product.inStock}</div>
      )}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
