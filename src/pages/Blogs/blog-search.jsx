import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import blog from "../../data/blogs";
import BlogSearch from "../../components/blogs/blog-search";
import BlogRecents from "../../components/blogs/blog-recent";
import BlogCategory from "../../components/blogs/blog-categories";
import BlogArchives from "../../components/blogs/blog-archive";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get("query");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const results = blog.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(results);
    }
  }, [searchTerm]);

  return (
    <div className="blog-posts">
      <div className="blogs-search-result">
        <header>
          {filteredPosts.length > 0 ? (
            <h1>Search Results for: {searchTerm}</h1>
          ) : (
            <h1>Nothing Found</h1>
          )}
        </header>
      </div>

      <div className="blog-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="blog-search-item">
              <div className="blog-search-date">
                <span>{post.date}</span>
              </div>
              <h2>{post.title}</h2>
              <p className="search-result-summary">{post.summary}</p>
              <p className="read-more-link">Continue reading</p>
            </div>
          ))
        ) : (
          <p className="search-notFound">
            Sorry, but nothing matched your search terms. Please try again with
            some different keywords.
          </p>
        )}
      </div>
    </div>
  );
}

function SearchBlogs() {
  return (
    <>
      <div className="blog-site">
        <div className="width-container">
          <div className="blog-content-wrapper">
            <SearchResults />
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

export default SearchBlogs;
