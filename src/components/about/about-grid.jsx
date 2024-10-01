import { motion } from "framer-motion";

function AboutGrid() {
  return (
    <div className="about-section4">
      <div className="aboutsection4-grid">
        <div className="width-container">
          <div className="as4-wrapper">
            <motion.div
              className="as4-content"
              initial={{ x: "-20vw", opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
              viewport={{ once: true }}
            >
              <h2>01 Web Design Agency_Strategy</h2>
              <p>
                Business and organizational consulting, target audience
                assessment, <abbr title="Return On Investment">ROI</abbr>
                /opportunity analysis.
              </p>
              <div className="as4-content-divider"></div>
            </motion.div>
            <div className="as4-image-right as4-image-1"></div>
          </div>
        </div>
      </div>
      <div className="aboutsection4-grid">
        <div className="width-container">
          <div className="as4-wrapper-left">
            <div className="as4-image-left as4-image-2"></div>
            <motion.div
              className="as4-content-left"
              initial={{ x: "20vw", opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
              viewport={{ once: true }}
            >
              <h2>02 Web Design Agency_Creative</h2>
              <p>
                Ideation, mind-mapping, art direction, custom illustration,
                infographics, aesthetic management, visual/brand identity
                creation &amp; management.
              </p>
              <div className="as4-content-divider"></div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="aboutsection4-grid">
        <div className="width-container">
          <div className="as4-wrapper">
            <motion.div
              className="as4-content"
              initial={{ x: "-20vw", opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
              viewport={{ once: true }}
            >
              <h2>03 Web Design Agency_Web &amp; Interactive</h2>
              <p>
                Responsive web design with{" "}
                <abbr title="Content Management System">CMS</abbr> in{" "}
                <abbr title="HyperText Markup Language">HTML5</abbr>,
                information architecture, emerging technologies, quality
                assurance, ADA &amp; W3C-compliance and{" "}
                <abbr title="User eXperience">UX</abbr>.
              </p>
              <div className="as4-content-divider"></div>
            </motion.div>
            <div className="as4-image-right as4-image-3"></div>
          </div>
        </div>
      </div>
      <div className="aboutsection4-grid">
        <div className="width-container">
          <div className="as4-wrapper-left">
            <div className="as4-image-left as4-image-4"></div>
            <motion.div
              className="as4-content-left"
              initial={{ x: "20vw", opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
              viewport={{ once: true }}
            >
              <h2>04 Web Design Agency_Search Engine Marketing</h2>
              <p>
                <abbr title="Search Engine Optimization">SEO</abbr>, paid
                search, analytics, social media marketing, opportunity
                assessment, implementation, management.
              </p>
              <div className="as4-content-divider"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutGrid;
