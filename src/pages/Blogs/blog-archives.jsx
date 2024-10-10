import blog from "../../data/blogs"; // Import the blog data
import { useParams } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BlogSearch from "../../components/blogs/blog-search";
import BlogRecents from "../../components/blogs/blog-recent";
import BlogCategory from "../../components/blogs/blog-categories";
import BlogArchives from "../../components/blogs/blog-archive";

function ArchiveBanner() {
  const { year, month } = useParams();

  const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return (
    <div className="blog-banner">
      <div className="width-container">
        <div className="bl-inner">
          <div className="bl-wrapper">
            <h1>
              Month: {formattedMonth} {year}
            </h1>
            <div className="bl-empty-space-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchiveContent() {
  const { year, month } = useParams();

  const filteredPosts = blog.filter((post) => {
    const postDate = new Date(post.date);
    const postYear = postDate.getFullYear();
    const postMonth = postDate
      .toLocaleString("default", { month: "long" })
      .toLowerCase();
    return postYear === parseInt(year) && postMonth === month.toLowerCase();
  });
  return (
    <div className="blog-posts">
      {filteredPosts
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
  );
}
function ArchiveBlogs() {
  return (
    <>
      <ArchiveBanner />
      <div className="blog-site">
        <div className="width-container">
          <div className="blog-content-wrapper">
            <ArchiveContent />
            <div className="blog-filter">
              <BlogSearch />
              <BlogRecents />
              <BlogCategory />
              <BlogArchives />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArchiveBlogs;
