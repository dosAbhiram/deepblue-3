import "../../assets/styles/common/blogSection.css";

function BlogSection() {
  return (
    <div className="blog-container">
      <div className="blog-title">
        <div className="width-container">
          <div className="blog-title-inner">
            <p>The Blog /</p>
          </div>
        </div>
      </div>
      <div className="blog-section">
        <div className="width-container">
          <div className="blog-post">
            <p>ARTIFICIAL INTELLIGENCE</p>
            <h2>
              <a href="https://deepblue.com/ai-a-game-changer-for-small-business-website/">
                AI: A Game-Changer for Small Business Websites
              </a>
            </h2>

            <span className="time">
              August 11,2024 <span className="line">|</span> by Frank Farris
            </span>
          </div>
        </div>
      </div>
      <div className="blog-section">
        <div className="width-container">
          <div className="blog-post">
            <p>BRAND DESIGN</p>
            <h2>Typography: The Unsung Hero of Web Design</h2>
            <span className="time">
              August 5,2024 <span className="line">|</span> by Antje Knott
            </span>
          </div>
        </div>
      </div>
      <div className="blog-section" style={{ borderBottom: "none" }}>
        <div className="width-container">
          <div className="blog-post">
            <p>WEB DESIGN</p>
            <h2>Future of Web Design: Emerging Technologies</h2>
            <span className="time">
              July 30,2024 <span className="line">|</span> by Antje Knott
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogSection;
