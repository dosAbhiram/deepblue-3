/* eslint-disable react/prop-types */
import { Suspense, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import blogs from "../../data/blog";
import authors from "../../data/authors";
import BlogSearch from "../../components/blogs/blog-search";
import BlogRecents from "../../components/blogs/blog-recent";
import BlogCategory from "../../components/blogs/blog-categories";
import BlogArchives from "../../components/blogs/blog-archive";

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function InnerBlogBanner({ title, featuredImage }) {
  return (
    <div
      className="blog-banner"
      style={{ backgroundImage: `url(${featuredImage})` }}
    >
      <div className="width-container">
        <div className="bl-inner">
          <div className="bl-wrapper">
            <h1>{title}</h1>
            <div className="bl-empty-space-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InnerBlogs() {
  const { title } = useParams();
  const blogPost = blogs.find((post) => generateSlug(post.title) === title);

  const blogAuthor = blogPost
    ? authors.find((author) => author.name === blogPost.author)
    : null;

  const [BlogComponent, setBlogComponent] = useState(null);

  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const currentIndex = sortedBlogs.findIndex(
    (post) => generateSlug(post.title) === title
  );

  const previousBlog = sortedBlogs[currentIndex + 1];
  const nextBlog = sortedBlogs[currentIndex - 1];

  useEffect(() => {
    if (blogPost && blogPost.component) {
      blogPost
        .component()
        .then((module) => setBlogComponent(() => module.default))
        .catch(() => setBlogComponent(null));
    } else {
      setBlogComponent(null);
    }
  }, [title, blogPost]);

  if (!blogPost) {
    return <p>Blog not found</p>;
  }

  return (
    <>
      <InnerBlogBanner
        title={blogPost.title}
        featuredImage={
          blogPost.featuredImage || "/deepblue-3/images/blogs/blog-768x384.jpg"
        }
      />

      <div className="blog-site">
        <div className="width-container">
          <div className="blog-content-wrapper">
            <div className="blog-posts">
              <div className="blog-article-posts">
                {/* Post Date and Author */}
                <div className="post-date">
                  <span>
                    Posted on
                    <a className="post-date-time"> {blogPost.date} </a>
                  </span>
                  <span>by {blogPost.author}</span>
                </div>

                {/* Blog Content */}
                {BlogComponent ? (
                  <Suspense fallback={<div>Loading blog content...</div>}>
                    <BlogComponent />
                  </Suspense>
                ) : (
                  <p>Blog content not available</p>
                )}

                {/* Author Info */}
                {blogAuthor && (
                  <div className="author-info">
                    <div className="author-avatar">
                      <img src={blogAuthor.image} alt={blogAuthor.name} />
                    </div>
                    <div className="author-description">
                      <h2>{blogAuthor.name}</h2>
                      <p>{blogAuthor.description}</p>
                      <p>
                        <Link to="/" className="post-website-link">
                          Website
                        </Link>
                      </p>
                    </div>
                  </div>
                )}

                <div className="inCategory">
                  Posted in{" "}
                  <Link
                    to={`/category/${generateSlug(blogPost.category)}`}
                    className="inCategoryLink"
                  >
                    <span>{blogPost.category}</span>
                  </Link>
                </div>
              </div>

              {/* Blog Navigation */}
              <div className="blog-navigation">
                {previousBlog && (
                  <Link
                    to={`/blog/${generateSlug(previousBlog.title)}`}
                    className="previous-blog"
                  >
                    ← {previousBlog.title}
                  </Link>
                )}
                {nextBlog && (
                  <Link
                    to={`/blog/${generateSlug(nextBlog.title)}`}
                    className="next-blog"
                  >
                    {nextBlog.title} →
                  </Link>
                )}
              </div>
            </div>
            {/* Sidebar Components */}
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

export default InnerBlogs;
