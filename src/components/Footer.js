import { Link } from "react-router-dom";

import "./Footer.css";
import SideMenu from "./SideMenu";

const categories = [
  { name: "Indoor Plants", path: "/indoor" },
  { name: "Outdoor Plants", path: "/outdoor" },
  { name: "Seeds", path: "/seeds" },
  { name: "Pots", path: "/pots" },
  { name: "Accessories", path: "/accessories" },
  { name: "Gardening", path: "/gardening" },
  { name: "Fertilizers", path: "/fertilizers" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <h3>Categories</h3>
        <ul>
          {/* {categories.map((category, index) => (
            <li key={index}>
              <Link to={category.path}>{category.name}</Link>
            </li>
          ))} */}
          <SideMenu />
        </ul>
      </div>
      <p>© 2025 Green Plant Shop. All rights reserved.</p>
    </footer>
  );
}
