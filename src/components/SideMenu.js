import { Link } from "react-router-dom";
import categories from "../data/categories";

const SideMenu = () => {
  return (
    <nav>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <Link to={`/category/${category.name}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
