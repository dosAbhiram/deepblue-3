import "../../assets/styles/work/section.css";
import { motion } from "framer-motion";

function Section() {
  return (
    <>
      <div className="work-background">
        <div className="width-container">
          <div className="work-section-wrapper">
            <div className="work-content-wrapper">
              <div className="work-left-content">
                <div className="work-left-inner">
                  <h2>
                    DEEPBLUE <br />{" "}
                    <abbr title="Artificial Intelligence">A.I.</abbr> Web Design
                    Portfolio
                  </h2>
                </div>
              </div>

              <div className="work-right-content">
                <div className="work-right-inner">
                  <p>
                    A leading Web Design and WordPress development agency, we
                    offer a core set of AI-powered design, development, and
                    marketing services to a diverse group of industries. Our
                    capabilities range from custom web design, infused with
                    AI-driven personalization and optimization, to responsive
                    design and robust{" "}
                    <abbr title="Content Management System">CMS</abbr>{" "}
                    solutions. We integrate cutting-edge AI into branding and{" "}
                    <abbr title="Search Engine Optimization">SEO</abbr>{" "}
                    marketing campaigns, always prioritizing an exceptional user
                    experience.
                  </p>
                  <p>
                    Let us show you how AI can transform your online presence!
                  </p>
                  <p>
                    Explore the industry links below to view our{" "}
                    <em>web design portfolio</em> and{" "}
                    <a title="Contact Us" href="#creative_partner">
                      contact us
                    </a>{" "}
                    to schedule your complimentary assessment.
                  </p>
                  <p>
                    <span style={{ color: "#275a8a" }}>
                      <em>
                        We provide user experience with deep focus and
                        measurable results.
                      </em>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="work-section">
        <div className="work-grid">
          <div className="width-container">
            <div className="wsec-wrapper">
              <motion.div
                className="work-content"
                initial={{ opacity: 0, x: "-25vw" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>Corporate</h2>
                <p>
                  Our experience in corporate web design goes back 25 years and
                  our collaborations have always served as inspiration for the
                  convergence of creativity and brand positioning.
                </p>
                <a href="#">
                  <em>Learn More ›</em>
                </a>
              </motion.div>
            </div>
          </div>
          <div className="work-image-outer">
            <div className="background-img corporate"></div>
          </div>
        </div>
        <div className="work-grid">
          <div className="width-container">
            <div className="wsec-wrapper">
              <motion.div
                className="work-content"
                initial={{ opacity: 0, x: "-25vw" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>Non-Profit</h2>
                <p>
                  Non-profit organizations have unique challenges, particularly
                  with their web designer and outreach fundraising strategies.
                </p>
                <a href="#">
                  <em>Learn More ›</em>
                </a>
              </motion.div>
            </div>
          </div>
          <div className="work-image-outer">
            <div className="background-img nonprofit"></div>
          </div>
        </div>
        <div className="work-grid">
          <div className="width-container">
            <div className="wsec-wrapper">
              <motion.div
                className="work-content"
                initial={{ opacity: 0, x: "-25vw" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>Technology</h2>
                <p>
                  From startups in Silicon Valley seeking to secure Series A
                  funding to global titans that dominate the public
                  consciousness we create websites for technology companies that
                  change the world.
                </p>
                <a href="#">
                  <em>Learn More ›</em>
                </a>
              </motion.div>
            </div>
          </div>
          <div className="work-image-outer">
            <div className="background-img technology"></div>
          </div>
        </div>
        <div className="work-grid">
          <div className="width-container">
            <div className="wsec-wrapper">
              <motion.div
                className="work-content"
                initial={{ opacity: 0, x: "-25vw" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>Healthcare</h2>
                <p>
                  Healthcare web design that puts patient needs first. We create
                  websites for healthcare companies, ranging from the largest
                  operator of hospitals in America to a small surgery center in
                  remote Alaska.
                </p>
                <a href="#">
                  <em>Learn More ›</em>
                </a>
              </motion.div>
            </div>
          </div>
          <div className="work-image-outer">
            <div className="background-img healthcare"></div>
          </div>
        </div>
        <div className="work-grid">
          <div className="width-container">
            <div className="wsec-wrapper">
              <motion.div
                className="work-content"
                initial={{ opacity: 0, x: "-25vw" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>Education</h2>
                <p>
                  We have been privileged to work with some of the most
                  prestigious educational institutions in the country for web
                  design strategies.
                </p>
                <a href="#">
                  <em>Learn More ›</em>
                </a>
              </motion.div>
            </div>
          </div>
          <div className="work-image-outer">
            <div className="background-img education"></div>
          </div>
        </div>
        <div className="work-grid">
          <div className="width-container">
            <div className="wsec-wrapper">
              <motion.div
                className="work-content"
                initial={{ opacity: 0, x: "-25vw" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>Government</h2>
                <p>
                  We do government web design like no one else. We break through
                  the bureaucracy and create beautiful and intuitive websites.
                </p>
                <a href="#">
                  <em>Learn More ›</em>
                </a>
              </motion.div>
            </div>
          </div>
          <div className="work-image-outer">
            <div className="background-img government"></div>
          </div>
        </div>
        <div className="work-grid">
          <div className="width-container">
            <div className="wsec-wrapper">
              <motion.div
                className="work-content"
                initial={{ opacity: 0, x: "-25vw" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>eCommerce</h2>
                <p>
                  As a business, it is crucial to have the tools to manage your
                  eCommerce website and the administrative features to fit with
                  your business processes.
                </p>
                <a href="#">
                  <em>Learn More ›</em>
                </a>
              </motion.div>
            </div>
          </div>
          <div className="work-image-outer">
            <div className="background-img ecommerce"></div>
          </div>
        </div>
        <div className="work-grid">
          <div className="width-container">
            <div className="wsec-wrapper">
              <motion.div
                className="work-content"
                initial={{ opacity: 0, x: "-25vw" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>Brand & Identity Strategy</h2>
                <p>
                  We ideate, execute and manage brand strategy & design
                  campaigns centered around bold ideas and creative expertise
                  that are designed to create impact and deliver measurable
                  results.
                </p>
                <a href="#">
                  <em>Learn More ›</em>
                </a>
              </motion.div>
            </div>
          </div>
          <div className="work-image-outer">
            <div className="background-img brandIdentity"></div>
          </div>
        </div>
        <div className="work-grid no-border">
          <div className="width-container">
            <div className="wsec-wrapper">
              <motion.div
                className="work-content"
                initial={{ opacity: 0, x: "-25vw" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2>Search Engine Marketing</h2>
                <p>
                  Building a website is just the first step in creating
                  predictable and sustained results. We provide expert search
                  engine marketing, including SEO, Social, Digital Advertising &
                  Analytics to ensure continued prosperity.
                </p>
                <a href="#">
                  <em>Learn More ›</em>
                </a>
              </motion.div>
            </div>
          </div>
          <div className="work-image-outer">
            <div className="background-img searchEngine"></div>
          </div>
        </div>
      </div>
      <div className="work-parallax-section">
        <div className="width-container">
          <div className="wps-inner">
            <div className="wps-quote">
              “For whatever we lose (like a you or a me) it’s always ourselves
              we find in the sea.”
            </div>
            <p>– e.e. cummings –</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section;
