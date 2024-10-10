import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use this to navigate to another page
import "@fortawesome/fontawesome-free/css/all.min.css";

function BlogSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Hook to navigate to a different route

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (searchTerm.trim()) {
      // Navigate to the search results page with the search term as a query param
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="search-box">
      <form className="blog-searchBox" onSubmit={handleSearch}>
        <input
          className="blog-search"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default BlogSearch;
