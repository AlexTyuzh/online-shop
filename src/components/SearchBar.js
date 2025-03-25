import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import SearchIcon from "./icons/SearchIcon";
import AdvSearchIcon from "./icons/AdvSearchIcon";

import "./SearchBar.css";

const SearchBar = () => {
  const { products } = useContext(ProductsContext);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const searchProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLocaleLowerCase())
    )
    .slice(0, 5);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && searchInput.length > 0) {
      e.target.blur();
      navigate(`/search/${searchInput.trim()}`);
    }
  };

  return (
    <div className="search-bar">
      <Link className="search-icon" to={`/search/${searchInput}`}>
        <SearchIcon />
      </Link>
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search here..."
        onChange={handleSearch}
        value={searchInput}
        onKeyDown={handleEnter}
      />
      <div className="search-dropdown">
        {searchProducts.length > 0 ? (
          searchProducts.map((product) => (
            <Link
              className="search-item"
              key={product.id}
              to={`/product/${product.id}`}
            >
              {product.title}
            </Link>
          ))
        ) : (
          <p>No results</p>
        )}
      </div>
      <AdvSearchIcon />
    </div>
  );
};

export default SearchBar;
