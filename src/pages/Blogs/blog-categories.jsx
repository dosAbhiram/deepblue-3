import { useParams, Link } from "react-router-dom";
import blogs from "../../data/blog";
import categoryImages from "../../data/blog-category";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BlogSearch from "../../components/blogs/blog-search";
import BlogRecents from "../../components/blogs/blog-recent";
import BlogCategory from "../../components/blogs/blog-categories";
import BlogArchives from "../../components/blogs/blog-archive";

function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function CategoryBanner() {
  const { category } = useParams();
  const formattedCategory = generateSlug(category);

  const categoryImage = categoryImages.find(
    (item) => generateSlug(item.category) === formattedCategory
  );

  const backgroundImage = categoryImage
    ? categoryImage.link
    : "/deepblue-3/images/blogs/blog-768x384.jpg";

  const categoryName = categoryImage ? categoryImage.name : category;

  return (
    <div
      className="blog-banner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="width-container">
        <div className="bl-inner">
          <div className="bl-wrapper">
            <h1>Category: {categoryName}</h1>
            <div className="bl-empty-space-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryContent() {
  const { category } = useParams();
  const formattedCategory = generateSlug(category);

  const filteredBlogs = blogs.filter(
    (post) => generateSlug(post.category) === formattedCategory
  );

  return (
    <div className="blog-posts">
      {filteredBlogs.map((post, index) => (
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
              to={`/blog/${generateSlug(post.title)}`}
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
  );
}

function CategoryBlogs() {
  return (
    <>
      <CategoryBanner />
      <div className="blog-site">
        <div className="width-container">
          <div className="blog-content-wrapper">
            <CategoryContent />
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

export default CategoryBlogs;
