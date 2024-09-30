import "../assets/styles/services/service.css";
import { motion } from "framer-motion";

function Services() {
  return (
    <div>
      {/* Banner Section */}
      <div className="service-banner">
        <div className="width-container">
          <div className="service-empty-space"></div>
          <div className="srv-inner">
            <div className="srv-wrapper">
              <h1>Our Services</h1>
              <p>
                <em>
                  <abbr title="Artificial Intelligence">A.I.</abbr> Web design,
                  Responsive design, WordPress development, Brand &amp; Identity
                  Strategy, Search Engine Marketing services.
                </em>
              </p>
            </div>
            <div className="srv-empty-space-bottom"></div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="serviceSection">
        <div className="width-container">
          <div className="serviceSection-wrapper">
            <div className="serviceSection-left">
              <div className="serviceSection-left-inner">
                <h2>A full stack AI web design agency.</h2>
              </div>
            </div>

            <div className="serviceSection-right">
              <div className="serviceSection-right-inner">
                <p>
                  We love to push the boundaries of the digital landscape. We
                  leverage cutting-edge AI technology to deliver exceptional
                  brand strategy, custom web design, responsive web experiences
                  that drive measurable results for your organization. Add to
                  that our search engine marketing services, including{" "}
                  <abbr title="Search Engine Optimization">SEO</abbr>, and you
                  can’t go wrong.
                </p>
                <h3>
                  Our AI-powered design and marketing services empower you to:
                </h3>
                <ul>
                  <li>
                    <b>Craft a unique</b> <strong>brand identity:</strong> AI
                    analyzes market trends and user behavior to create a brand
                    that resonates with your target audience.
                  </li>
                  <li>
                    <b>Develop a personalized</b>{" "}
                    <strong>web experience:</strong> AI personalizes content and
                    layouts based on user preferences, enhancing engagement and
                    conversions.
                  </li>
                  <li>
                    <strong>Optimize your website for performance:</strong>{" "}
                    <a
                      title="Artificial Intelligence"
                      href="https://en.wikipedia.org/wiki/Artificial_intelligence"
                      target="_blank"
                      rel="external nofollow noopener"
                    >
                      AI
                    </a>{" "}
                    constantly analyzes data to identify areas for improvement,
                    ensuring your website is fast, user-friendly, and{" "}
                    <em>search engine optimized</em>.
                  </li>
                  <li>
                    <b>Stay ahead of the curve:</b> We utilize the latest AI
                    tools and technologies to create future-proof websites that
                    adapt and evolve with your business needs.
                  </li>
                </ul>
                <p>
                  <em style={{ color: "#275a8a" }}>
                    We create web presence, here’s how we do it.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div>
        <div className="serviceSection-grid">
          <div className="width-container">
            <div className="serv3-wrapper">
              <motion.div
                className="serv3-content"
                initial={{ x: "-20vw", opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <h2>Custom Web Design</h2>
                <p>
                  We are a nationally-recognized web design agency with a
                  passion for building hand-crafted websites. We have
                  experienced teams focused on creating the most beautiful and
                  intuitive user experiences on the web.
                </p>
                <p>
                  <a
                    title="Our Web Design &amp; Development services"
                    href="https://deepblue.com/services/custom-web-design-development/"
                  >
                    Learn more about Custom Web Design ›
                  </a>
                </p>
              </motion.div>
              <div className="serv-image serv-image-1"></div>
            </div>
          </div>
        </div>
        <div className="serviceSection-grid">
          <div className="width-container">
            <div className="serv3-wrapper">
              <motion.div
                className="serv3-content"
                initial={{ x: "-20vw", opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <h2>AI-Powered Design</h2>
                <p>
                  We stay ahead of the curve by incorporating cutting-edge AI
                  tools to optimize user experience, personalize content, and
                  enhance efficiency.
                </p>
                <p>
                  <a
                    title="AI-Powered Web Design Services"
                    href="https://deepblue.com/services/ai-powered-design-2/"
                  >
                    Learn more about AI-Powered Design
                  </a>
                </p>
              </motion.div>
              <div className="serv-image serv-image-2"></div>
            </div>
          </div>
        </div>
        <div className="serviceSection-grid">
          <div className="width-container">
            <div className="serv3-wrapper">
              <motion.div
                className="serv3-content"
                initial={{ x: "-20vw", opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <h2>Responsive Web Design</h2>
                <p>
                  Your website will look flawless and function optimally across
                  all devices, from desktops to mobile phones and tablets.
                </p>
                <p>
                  <a
                    title="Response Web Design Services"
                    href="https://deepblue.com/services/responsive-web-design/"
                  >
                    Learn more about Responsive Web Design
                  </a>
                </p>
              </motion.div>
              <div className="serv-image serv-image-3"></div>
            </div>
          </div>
        </div>
        <div className="serviceSection-grid">
          <div className="width-container">
            <div className="serv3-wrapper">
              <motion.div
                className="serv3-content"
                initial={{ x: "-20vw", opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <h2>Brand &amp; Identity Strategy</h2>
                <p>
                  We ideate, execute and manage brand strategy &amp; design
                  campaigns centered around bold ideas and creative expertise
                  that are designed to create impact and deliver measurable
                  results.
                </p>
                <p>
                  <a
                    title="Brand &amp; Identity Strategy Services"
                    href="https://deepblue.com/services/brand-identity-strategy/"
                  >
                    Learn more about Brand &amp; Identity Strategy
                  </a>
                </p>
              </motion.div>
              <div className="serv-image serv-image-4"></div>
            </div>
          </div>
        </div>
        <div className="serviceSection-grid">
          <div className="width-container">
            <div className="serv3-wrapper">
              <motion.div
                className="serv3-content"
                initial={{ x: "-20vw", opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <h2>Search Engine Marketing</h2>
                <p>
                  Building a website is just the first step in creating
                  predictable and sustained results. We provide expert search
                  engine marketing, including SEO, Social, Digital Advertising
                  &amp; Analytics to ensure continued prosperity.
                </p>
                <p>
                  <a
                    title="Search Engine Marketing Services"
                    href="https://deepblue.com/services/search-engine-marketing/"
                  >
                    Learn more about SEM
                  </a>
                </p>
              </motion.div>
              <div className="serv-image serv-image-5"></div>
            </div>
          </div>
        </div>
        <div className="serviceSection-grid no-border">
          <div className="width-container">
            <div className="serv3-wrapper">
              <motion.div
                className="serv3-content"
                initial={{ x: "-20vw", opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <h2>Website Maintenance &amp; Analytics</h2>
                <p>
                  Just like a well-oiled machine, your website requires ongoing
                  maintenance and analysis to function optimally.
                </p>
                <p>
                  <a
                    title="Website Maintenance and Analytics Services"
                    href="https://deepblue.com/services/search-engine-marketing/google-analytics/"
                  >
                    Learn more about Maintenance &amp; Analytics
                  </a>
                </p>
              </motion.div>
              <div className="serv-image serv-image-6"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Section */}
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
      {/* Hiring Section */}
      <div className="service-hiring">
        <div className="width-container">
          <div className="service-hiring-inner">
            <h2>We’re hiring.</h2>
            <div className="service-hiring-button">
              <a>
                <em>Explore open positions</em>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Technologies Section */}
      <div className="techologies-container">
        <div className="width-container">
          <div className="technology-heading">
            <p>
              <em>Technologies /</em>
            </p>
          </div>
          <motion.div
            className="technology-wrapper"
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
            transition={{ duration: 1.5 }}
          >
            <div className="technologies">
              <div className="innerTech">
                <img
                  src="images/services-section/technologies/wordpress2.jpg.webp"
                  alt="WordPress"
                />
              </div>
            </div>
            <div className="technologies">
              <div className="innerTech">
                <img
                  src="images/services-section/technologies/microsoft.png.webp"
                  alt="Microsoft"
                />
              </div>
            </div>
            <div className="technologies">
              <div className="innerTech">
                <img
                  src="images/services-section/technologies/magento.png.webp"
                  alt="Magento"
                />
              </div>
            </div>
            <div className="technologies">
              <div className="innerTech">
                <img
                  src="images/services-section/technologies/sitefinity.png.webp"
                  alt="WordPress"
                />
              </div>
            </div>
            <div className="technologies">
              <div className="innerTech">
                <img
                  src="images/services-section/technologies/kentico.png.webp"
                  alt="WordPress"
                />
              </div>
            </div>
            <div className="technologies">
              <div className="innerTechLeft">
                <img
                  src="images/services-section/technologies/umbraco.png.webp"
                  alt="WordPress"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Services;
