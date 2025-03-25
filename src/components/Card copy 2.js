import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import BasketIcon from "./icons/BasketIcon";
import WishlistIcon from "./icons/WishlistIcon";
import WishlistIconActive from "./icons/WishlistIconActive";

import "./Card.css";

export default function Card({
  id,
  image,
  title,
  categories,
  priceOld,
  price,
  inStock,
}) {
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  // const { addToCart } = useContext(CartContext);
  const { addToCart } = useCart();
  const plus = () => setQuantity((prev) => prev + 1);
  const minus = () => setQuantity((prev) => (quantity > 1 ? prev - 1 : prev));

  const toggleLike = () => setIsLiked(!isLiked);
  // const toggleLike = () => setIsLiked((prev) => !prev); //asynch

  return (
    <div className="card">
      <div className="card-img-container">
        <Link
          to={`/product/${id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img className="card-img" src={image} alt={title} />
        </Link>
      </div>
      <div className="card-body">
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <Link to={`/category/${categories}`}>
            <p className="card-categories">{categories}</p>
          </Link>

          {/* {categories.map((category, index) => (
              <Link
                key={index}
                to={`/category/${category}`}
                className="category-link"
              >
                {category}
                {index < categories.length - 1 ? ", " : ""}
              </Link>
            ))} */}
        </div>
        <div className="card-prices">
          <div className="card-price">
            {priceOld && <p className="card-price-old">${priceOld}</p>}
            <h3 className="card-price-new"> ${price}</h3>
          </div>
          {inStock === 0 && <div className="card-soldout">SOLD OUT</div>}
          {inStock >= 1 && (
            <div className="card-stock">In Stock: {inStock}</div>
          )}
        </div>

        <div className="card-btns">
          <div className="card-btn-quantity">
            <button onClick={minus} disabled={quantity <= 1}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={plus} disabled={quantity >= inStock}>
              +
            </button>
          </div>
          <button
            className="card-btn-buy"
            onClick={() =>
              addToCart({ id, title, price, image, inStock }, quantity)
            }
            disabled={inStock === 0 || quantity > inStock}
          >
            ADD <BasketIcon />
          </button>
          <button
            className={`card-btn-like ${isLiked ? "liked" : ""}`}
            onClick={toggleLike}
          >
            <WishlistIcon isLiked={isLiked} />
            {/* <WishlistIconActive /> */}
          </button>
        </div>
      </div>
    </div>
  );
}
