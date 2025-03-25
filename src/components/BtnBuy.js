import { useCart } from "../context/CartContext";
import BasketIcon from "./icons/BasketIcon";

const BtnBuy = ({ product, quantity, inStock, children }) => {
  const { addToCart } = useCart();
  return (
    <button
      className="card-btn-buy"
      onClick={() => addToCart(product, quantity)}
      disabled={inStock === 0 || quantity > product.inStock}
    >
      {children}
      {/* ADD <BasketIcon /> */}
    </button>
  );
};

export default BtnBuy;
