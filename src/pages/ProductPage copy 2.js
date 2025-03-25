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
    <div className="product-page">
      <div className="product-img-container">
        <img src={product.image} alt={product.title} className="product-img" />
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <p>{product.categories}</p>
        <p>{product.subcategories}</p>

        <p className="product-description">{product.description}</p>
        <div className="product-prices">
          {product.priceOld && (
            <span className="product-price-old">${product.priceOld}</span>
          )}
          <span className="product-price">${product.price}</span>
        </div>
        {product.inStock === 0 ? (
          <div className="product-soldout">SOLD OUT</div>
        ) : (
          <div className="product-stock">In Stock: {product.inStock}</div>
        )}
        <button className="product-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
