import blog from "../../data/blogs";
import "@fortawesome/fontawesome-free/css/all.min.css";

function BlogRecents() {
  return (
    <div className="recent-posts">
      <h4>Recent Posts</h4>
      <ul>
        {blog
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5)
          .map((post, index) => (
            <li key={index}>
              <a href={post.link}>{post.title}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default BlogRecents;
