import "../../assets/styles/blogs/blog.css";
import BlogBanner from "../../components/blogs/blog-banner";
import BlogContent from "../../components/blogs/blog-content";
import BlogSearch from "../../components/blogs/blog-search";
import BlogRecents from "../../components/blogs/blog-recent";
import BlogCategory from "../../components/blogs/blog-categories";
import BlogArchives from "../../components/blogs/blog-archive";

function Blogs() {
  return (
    <>
      <BlogBanner />
      <div className="blog-site">
        <div className="width-container">
          <div className="blog-content-wrapper">
            <BlogContent />
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

export default Blogs;
