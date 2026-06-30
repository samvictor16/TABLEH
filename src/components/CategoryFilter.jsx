import { categories } from "../data/menuData";

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <nav className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`category-btn ${activeCategory === cat.id ? "active" : ""}`}
          onClick={() => onCategoryChange(cat.id)}
        >
          <span className="category-icon">{cat.icon}</span>
          <span className="category-name">{cat.name}</span>
        </button>
      ))}
    </nav>
  );
}
