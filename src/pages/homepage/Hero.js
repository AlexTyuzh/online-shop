import { useProducts } from "../../context/ProductsContext";
import { Link } from "react-router-dom";
import ShopView from "../../img/ShopView.jpg";
import "./Hero.css";

const Hero = () => {
  const { products } = useProducts();
  const featuredProduct = products[0];

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to Green Plant Shop!</h1>
        <p>Special Offer: -20% on all seeds this December!</p>
        <Link className="hero-btn" to="/category/Seeds">
          Shop Now
        </Link>
      </div>
      <div className="hero-img">
        {/* <img src={ShopView} alt="Shop View" /> */}
      </div>

      {/* {featuredProduct && (
        <div className="hero-featured">
          <img src={featuredProduct.image} alt={featuredProduct.title} />
          <p>
            Today's best: {featuredProduct.title} - ${featuredProduct.price}{" "}
          </p>
        </div>
      )} */}
    </div>
  );
};
export default Hero;
