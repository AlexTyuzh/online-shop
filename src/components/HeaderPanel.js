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

  // const sideMenuRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const sideMenuHandler = (e) => {
      if (buttonRef.current && buttonRef.current.contains(e.target)) {
        return;
      }
      {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", sideMenuHandler);

    return () => {
      document.body.removeEventListener("click", sideMenuHandler);
    };
  }, []);

  return (
    <div className="header-panel-wrapper">
      <div className="header-panel-container">
        <button
          ref={buttonRef}
          onClick={toggleHeaderPanel}
          className="burger-btn"
        >
          {isOpen ? "✖" : "☰"}
          <span>Categories</span>
          {/* <BurgerIcon /> */}
        </button>

        <div className={`side-menu ${isOpen ? "open" : ""}`}>
          {isOpen && <SideMenu />}
        </div>
        <SearchBar />
        {/* <div className="cart-btn"> */}
        <Link className="cart-btn" to="/cart">
          <span>$ {(totalPrice ?? 0).toFixed(2)}</span>
          <div className="cart-quantity">{totalQuantity ?? 0}</div>
          {/* <Link to="/cart"> */}
          <BasketIcon />
        </Link>
      </div>
    </div>
  );
};

export default HeaderPanel;
