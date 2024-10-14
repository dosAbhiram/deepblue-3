import blogs from "../../data/blog";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Helper function to generate URL-friendly slugs
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function BlogRecents() {
  return (
    <div className="recent-posts">
      <h4>Recent Posts</h4>
      <ul>
        {blogs
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5)
          .map((post, index) => (
            <li key={index}>
              <Link
                className="blog-recent-links"
                to={`/blog/${generateSlug(post.title)}`}
              >
                {post.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default BlogRecents;
