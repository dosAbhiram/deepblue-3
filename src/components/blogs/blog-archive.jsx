import { useState } from "react";
import blog from "../../data/blogs";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function BlogArchives() {
  const [expandedYears, setExpandedYears] = useState([]);

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
              <span className="archive-year" onClick={() => toggleYear(year)}>
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
  );
}

export default BlogArchives;
