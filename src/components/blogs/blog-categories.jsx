import { Link } from "react-router-dom";
import blogs from "../../data/blog";

function BlogCategory() {
  return (
    <div className="blog-categories">
      <h4>Categories</h4>
      <ul>
        {[...new Set(blogs.map((post) => post.category))].map(
          (category, index) => (
            <li key={index}>
              <Link
                to={`/category/${category
                  .toLowerCase()
                  .replace(/[\\/\s]+/g, "-")}`}
                className="blog-category-button"
              >
                <span>{category}</span>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default BlogCategory;
