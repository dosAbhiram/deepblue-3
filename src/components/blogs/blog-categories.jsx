import { Link } from "react-router-dom";
import blog from "../../data/blogs"; // Import the blog data

function BlogCategory() {
  return (
    <div className="blog-categories">
      <h4>Categories</h4>
      <ul>
        {[...new Set(blog.map((post) => post.category))].map(
          (category, index) => (
            <li key={index}>
              <Link
                to={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
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
