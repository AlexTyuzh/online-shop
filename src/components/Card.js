import { useState } from "react";
import { Link } from "react-router-dom";
import BtnQuantity from "./BtnQuantity";
import BtnBuy from "./BtnBuy";
// import WishlistIcon from "./icons/WishlistIcon";
import BasketIcon from "./icons/BasketIcon";

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

  const toggleLike = () => setIsLiked(!isLiked);

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
          <Link className="card-categories" to={`/category/${categories}`}>
            <p>{categories}</p>
          </Link>
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
          <BtnQuantity
            quantity={quantity}
            setQuantity={setQuantity}
            inStock={inStock}
          />
          <BtnBuy
            product={{ id, title, price, image, inStock }}
            quantity={quantity}
          >
            ADD <BasketIcon />
          </BtnBuy>
          {/* <button
            className={`card-btn-like ${isLiked ? "liked" : ""}`}
            onClick={toggleLike}
          >
            <WishlistIcon isLiked={isLiked} />
          </button> */}
        </div>
      </div>
    </div>
  );
}
