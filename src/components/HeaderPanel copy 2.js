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
  const toggleHeaderPanel = () => setIsOpen((prev) => !prev);
  // const toggleHeaderPanel = () => setIsOpen(!isOpen);

  const sideMenuRef = useRef(null);

  useEffect(() => {
    const sideMenuHandler = (e) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", sideMenuHandler);
    return () => document.removeEventListener("click", sideMenuHandler);
  });

  return (
    <div className="header-panel-container">
      <button className="burger-btn" onClick={toggleHeaderPanel}>
        {isOpen ? "✖" : "☰"}
        <span>Categories</span>
        {/* <BurgerIcon /> */}
      </button>
      <div ref={sideMenuRef} className="side-menu">
        {isOpen && <SideMenu className="side-menu-open" />}
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
