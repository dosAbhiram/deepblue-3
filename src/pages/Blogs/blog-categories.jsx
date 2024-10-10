import { useParams } from "react-router-dom";
import blog from "../../data/blogs";
import categoryImages from "../../data/blog-category";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BlogSearch from "../../components/blogs/blog-search";
import BlogRecents from "../../components/blogs/blog-recent";
import BlogCategory from "../../components/blogs/blog-categories";
import BlogArchives from "../../components/blogs/blog-archive";

function CategoryBanner() {
  const { category } = useParams();

  const formattedCategory = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  console.log(formattedCategory);

  const categoryImage = categoryImages.find(
    (item) => item.category.toLowerCase() === formattedCategory.toLowerCase()
  );

  console.log(categoryImage);

  const backgroundImage = categoryImage
    ? categoryImage.link
    : "/deepblue-3/images/blogs/blog-768x384.jpg";

  console.log(categoryImage);
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
            <h1>Category: {formattedCategory}</h1>
            <div className="bl-empty-space-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryContent() {
  const { category } = useParams();
  const filteredBlogs = blog.filter(
    (post) => post.category.toLowerCase().replace(/\s+/g, "-") === category
  );

  return (
    <div className="blog-posts">
      {filteredBlogs.map((post, index) => (
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
