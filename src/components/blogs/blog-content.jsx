import blog from "../../data/blogs"; // Import the blog data
import "@fortawesome/fontawesome-free/css/all.min.css";

function BlogContent() {
  return (
    <>
      <div className="blog-posts">
        {blog
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((post, index) => (
            <div key={index} className="blog-articles">
              <p>{post.category.toUpperCase()}</p>
              <h2>
                <a href={post.link}>{post.title}</a>
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
