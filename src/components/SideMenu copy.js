import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/category/Indoor Plants">Indoor Plans</Link>
        </li>
        <li>
          <Link to="/category/Outdoor Plants">Outdoor Plans</Link>
        </li>
        <li>
          <Link to="/category/Seeds">Seeds</Link>
        </li>
        <li>
          <Link to="/category/Pots">Pots</Link>
        </li>
        <li>
          <Link to="/category/Accessories">Accessories</Link>
        </li>
        <li>
          <Link to="/category/Gardening">Gardening</Link>
        </li>
        <li>
          <Link to="/category/Fertilizers">Fertilizers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
