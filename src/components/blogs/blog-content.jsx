import { useState } from "react";
import blog from "../../data/blogs"; // Import the blog data
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function BlogContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedYears, setExpandedYears] = useState([]); // Track the expanded years

  const filteredPosts = blog.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getArchiveData = (blogPosts) => {
    const archive = {};

    blogPosts.forEach((post) => {
      const postDate = new Date(post.date);
      const year = postDate.getFullYear();
      const month = postDate.toLocaleString("default", { month: "long" });

      if (!archive[year]) {
        archive[year] = [];
      }

      if (!archive[year].includes(month)) {
        archive[year].push(month);
      }
    });

    return archive;
  };

  const archiveData = getArchiveData(blog);

  const toggleYear = (year) => {
    if (expandedYears.includes(year)) {
      setExpandedYears(expandedYears.filter((y) => y !== year));
    } else {
      setExpandedYears([...expandedYears, year]);
    }
  };

  return (
    <>
      <div className="blog-site">
        <div className="width-container">
          <div className="blog-content-wrapper">
            {/* Blog Posts Section */}
            <div className="blog-posts">
              {filteredPosts
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort posts by date
                .slice(0, 20) // Limit to the first 20 posts
                .map((post, index) => (
                  <div key={index} className="blog-articles">
                    <p>{post.category.toUpperCase()}</p>
                    <h2>
                      <a href={post.link}>{post.title}</a>
                    </h2>
                    <span className="blog-time">
                      {post.date} <span className="line">|</span> by{" "}
                      {post.author}
                    </span>
                  </div>
                ))}
            </div>

            {/* Sidebar with Search, Recent Posts, Categories, and Archives */}
            <div className="blog-filter">
              {/* Search Box */}
              <div className="search-box">
                <div className="blog-searchBox">
                  <input
                    className="blog-search"
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button type="submit"></button>
                </div>
              </div>

              {/* Recent Posts Section */}
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

              {/* Categories Section */}
              <div className="blog-categories">
                <h4>Categories</h4>
                <ul>
                  {[...new Set(blog.map((post) => post.category))].map(
                    (category, index) => (
                      <li key={index}>
                        <a
                          href={`#${category
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          {category}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Archives Section */}
              <div className="blog-archive">
                <h4>Archives</h4>
                <ul>
                  {Object.keys(archiveData)
                    .sort((a, b) => b - a)
                    .map((year) => (
                      <li
                        key={year}
                        className={expandedYears.includes(year) ? "active" : ""}
                      >
                        <span
                          className="archive-year"
                          onClick={() => toggleYear(year)}
                        >
                          {year}
                        </span>
                        <ul className="archive-months">
                          {archiveData[year].map((month, index) => (
                            <li key={index}>
                              <Link to={`/${year}/${month.toLowerCase()}`}>
                                <span>{month}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogContent;
