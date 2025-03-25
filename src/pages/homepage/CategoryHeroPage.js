import { Link } from "react-router-dom";
import categories from "../../data/categories";
import "./CategoryHeroPage.css";

const CategoryHeroPage = () => {
  return (
    <div className="category-hero-container">
      {categories.map((category) => (
        <Link
          to={`/category/${category.name}`}
          key={category.name}
          className="category-card"
        >
          <h3 className="category-title">{category.name}</h3>
          <img
            src={category.image}
            alt={category.name}
            className="category-image"
          />
        </Link>
      ))}
    </div>
  );
};

export default CategoryHeroPage;
