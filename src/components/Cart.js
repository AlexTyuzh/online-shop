import { useCart } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const {
    cartItems,
    deleteFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalQuantity,
  } = useCart();
  // const totalPrice = () =>
  //   //     let total = 0;
  //   // for (const item of cartItems) {
  //   //   total += item.price * item.quantity;
  //   // }
  //   cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-item">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} width={150} />
                <h3>{item.title}</h3>
                <p>Price: {(item.price * item.quantity).toFixed(2)}</p>
                <div className="cart-btn-quantity">
                  <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                  <span>{item.quantity}</span>
                  <button
                    disabled={item.quantity >= item.inStock}
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn-delete"
                  onClick={() => deleteFromCart(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <h3>Total to pay: ${totalPrice}</h3>
      <p>Total items: {totalQuantity}</p>
      <button className="btn-clear" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}
