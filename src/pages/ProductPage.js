import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { useState } from "react";
import BtnBuy from "../components/BtnBuy";
import BtnQuantity from "../components/BtnQuantity";
import "./ProductPage.css";
import BasketIcon from "..//components/icons/BasketIcon";

export default function ProductPage() {
  const { id } = useParams();
  const { products } = useProducts();
  const product = (products || []).find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-page">
      <div className="product-img-container">
        <img src={product.image} alt={product.title} className="product-img" />
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <p>{product.subcategories}</p>
        <p>{product.categories}</p>

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
        <div className="product-btns">
          <BtnQuantity
            quantity={quantity}
            setQuantity={setQuantity}
            inStock={product.inStock}
          />
          <BtnBuy className="product-btn" product={product} quantity={quantity}>
            Add to Cart <BasketIcon />
          </BtnBuy>
        </div>
      </div>
    </div>
  );
}
