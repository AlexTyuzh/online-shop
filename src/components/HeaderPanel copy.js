import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BurgerIcon from "./icons/BurgerIcon";
import SideMenu from "./SideMenu";
import SearchBar from "./SearchBar";
import BasketIcon from "./icons/BasketIcon";
import { CartContext, useCart } from "../context/CartContext";

import "./HeaderPanel.css";

const HeaderPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalPrice, totalQuantity } = useCart();
  const toggleHeaderPanel = () => setIsOpen(!isOpen);
  const burgerBtnRef = useRef(null);
  const sideMenuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (
        sideMenuRef.current &&
        !sideMenuRef.current.contains(e.target) &&
        burgerBtnRef.current &&
        !burgerBtnRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });

  return (
    <div className="header-panel-container">
      <button
        ref={burgerBtnRef}
        className="burger-btn"
        onClick={toggleHeaderPanel}
      >
        {isOpen ? "✖" : "☰"}
        <span>Categories</span>
        {/* <BurgerIcon /> */}
      </button>
      <div
        ref={sideMenuRef}
        className={`side-menu ${isOpen ? "side-menu-open" : ""}`}
      >
        {isOpen && <SideMenu />}
      </div>
      <SearchBar />
      {/* <div className="cart-btn"> */}
      <Link className="cart-btn" to="/cart">
        $ {(totalPrice ?? 0).toFixed(2)}
        <div className="cart-quantity">{totalQuantity ?? 0}</div>
        {/* <Link to="/cart"> */}
        <BasketIcon />
      </Link>
    </div>
    // </div>
  );
};

export default HeaderPanel;
