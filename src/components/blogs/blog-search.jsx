import { useState } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";

function BlogSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
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
  );
}

export default BlogSearch;
