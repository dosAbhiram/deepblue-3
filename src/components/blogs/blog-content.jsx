import blogs from "../../data/blog"; // Import the blog data
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Slug generation function for safe URLs
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/(^-|-$)+/g, ""); // Remove leading or trailing hyphens
}

function BlogContent() {
  return (
    <>
      <div className="blog-posts">
        {blogs
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((post, index) => (
            <div key={index} className="blog-articles">
              <Link
                to={`/category/${generateSlug(post.category)}`}
                className="blog-category-link"
              >
                {post.category.toUpperCase()}
              </Link>

              <h2>
                <Link
                  className="blog-links"
                  to={`/blog/${generateSlug(post.title)}`} // Use generateSlug for the title
                >
                  {post.title}
                </Link>
              </h2>
              <span className="blog-time">
                {post.date} <span className="line">|</span> by {post.author}
              </span>
            </div>
          ))}
      </div>
    </>
  );
}

export default BlogContent;
