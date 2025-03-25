import Lily from "../img/Lily.jpg";
import BasketIcon from "./icons/BasketIcon";
import WishlistIcon from "./icons/WishlistIcon";
import WishlistIconActive from "./icons/WishlistIconActive";
import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="card-img-container">
        <img className="card-img" src={Lily} alt="" />
      </div>
      <div className="card-body">
        <div className="card-details">
          <h3 className="card-title">Plant Green</h3>
          <p className="card-categories">Indoor plant, Sun lover</p>
        </div>
        <div className="card-price-status">
          <div className="card-price">
            <p
              className="card-price-old"
              style={{ textDecoration: "line-through", color: "GrayText" }}
            >
              $ 20
            </p>
            <h3 className="card-price-new"> $ 15</h3>
          </div>
          <div className="card-status">SOLD OUT</div>
        </div>
        <div className="card-btns">
          <button className="card-btn-buy">
            - 1 + <BasketIcon />
          </button>
          <button className="card-btn-like">
            <WishlistIcon />
            {/* <WishlistIconActive /> */}
          </button>
        </div>
      </div>
    </div>
  );
}
