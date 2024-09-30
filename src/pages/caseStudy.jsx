import "../assets/styles/caseStudy/caseStudy.css";
import { motion } from "framer-motion";

function CaseStudy() {
  return (
    <>
      <div>
        <div className="caseStudy-banner">
          <div className="width-container">
            <div className="caseStudy-empty-space"></div>
            <div className="cs-inner">
              <div className="cs-wrapper">
                <h1>Case Studies</h1>
                <p>
                  <em>25 years of success.</em>
                </p>
              </div>
              <div className="cs-empty-space-bottom"></div>
            </div>
          </div>
        </div>

        <div className="caseStudy-background">
          <div className="width-container">
            <div className="cs-section-wrapper">
              <div className="cs-content-wrapper">
                <div className="cs-left-content">
                  <div className="cs-left-inner">
                    <h2> A full service web design and brand agency.</h2>
                  </div>
                </div>

                <div className="cs-right-content">
                  <div className="cs-right-inner">
                    <p>
                      A web design agency that delivers <b>measurable</b>
                      &nbsp;results.
                    </p>
                    <p>
                      We harness{" "}
                      <abbr title="Artificial Intelligence">A.I.</abbr> with a
                      human-centric approach to create custom and unique user
                      experiences. We provide expert and custom web design
                      solutions for your organization’s online challenges. Our
                      ingenuity, creativity, professionalism and the principles
                      that we focus on within our core competencies are
                      unparalleled in the Web industry. We only employ
                      passionate, experienced and dedicated staff with diverse
                      skill sets, supporting our customers and creating
                      meaningful relationships. We exist to create online
                      experiences where passion and purpose come together.
                    </p>
                    <p>
                      <a
                        title="More Case Studies of DEEPBLUE's Web Design"
                        href="https://deepblue.com/category/case-studies/"
                      >
                        <b>Click Here</b>
                      </a>{" "}
                      to see even more case studies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-section3">
          <div className="caseStudy-grid">
            <div className="width-container">
              <div className="csg-wrapper">
                <motion.div
                  className="csg-content"
                  initial={{ x: "-20vw", opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeIn" }}
                  viewport={{ once: true }}
                >
                  <h2>Intel Corp</h2>
                  <p>
                    Igniting Sparks of Innovation. DEEPBLUE was brought onboard
                    to create a brand new website for Intel that highlights
                    their commitment to open source.
                  </p>
                  <p>
                    <a
                      title="Intel Case Study"
                      href="https://deepblue.com/portfolio/intel-case-study/"
                    >
                      View Intel Case Study
                    </a>
                  </p>
                </motion.div>
                <div
                  className="
              csg-image csg-image-1"
                ></div>
              </div>
            </div>
          </div>
          <div className="caseStudy-grid">
            <div className="width-container">
              <div className="csg-wrapper">
                <motion.div
                  className="csg-content"
                  initial={{ x: "-20vw", opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeIn" }}
                  viewport={{ once: true }}
                >
                  <h2>ObjectRocket</h2>
                  <p>
                    The new ObjectRocket website was hand-crafted from the
                    ground up. This included a fully custom web design and built
                    on a responsive framework to ensure an optimal mobile
                    experience.
                  </p>
                  <p>
                    <a
                      title="ObjectRocket Case Study"
                      href="https://deepblue.com/portfolio/objectrocket-web-design/"
                    >
                      View ObjectRocket Case Study
                    </a>
                  </p>
                </motion.div>
                <div
                  className="
              csg-image csg-image-2"
                ></div>
              </div>
            </div>
          </div>
          <div className="caseStudy-grid">
            <div className="width-container">
              <div className="csg-wrapper">
                <motion.div
                  className="csg-content"
                  initial={{ x: "-20vw", opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeIn" }}
                  viewport={{ once: true }}
                >
                  <h2>
                    <abbr title="University of California">UC</abbr> Davis Wild
                    Energy Initiative
                  </h2>
                  <p>
                    The Wild Energy Initiative website was hand-crafted from the
                    ground up. This included brand services, including logo
                    design, a fully custom web design and built on a responsive
                    framework to ensure an optimal mobile experience.
                  </p>
                  <p>
                    <a
                      title="UC Davis Wild Energy Case Study"
                      href="https://deepblue.com/portfolio/wild-energy-initiative/"
                    >
                      View UC Davis Wild Energy Case Study
                    </a>
                  </p>
                </motion.div>
                <div
                  className="
              csg-image csg-image-3"
                ></div>
              </div>
            </div>
          </div>
          <div className="caseStudy-grid">
            <div className="width-container">
              <div className="csg-wrapper">
                <motion.div
                  className="csg-content"
                  initial={{ x: "-20vw", opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeIn" }}
                  viewport={{ once: true }}
                >
                  <h2>Roberts Boché Associates</h2>
                  <p>
                    We were tasked to completely overhaul the Roberts Boché
                    website with a fresh design and make it more visible for
                    local search (Local{" "}
                    <abbr title="Search Engine Optimization">SEO</abbr>) in the
                    Bay Area of California. The updated website uses the latest
                    in best practices and emerging technologies designed to
                    provide a competitive advantage.
                  </p>
                  <p>
                    <a
                      title="Roberts Boché Associates Case Study"
                      href="https://deepblue.com/portfolio/roberts-boche/"
                    >
                      View Roberts Boché Associates Case Study
                    </a>
                  </p>
                </motion.div>
                <div
                  className="
              csg-image csg-image-4"
                ></div>
              </div>
            </div>
          </div>
          <div className="caseStudy-grid no-border">
            <div className="width-container">
              <div className="csg-wrapper">
                <motion.div
                  className="csg-content"
                  initial={{ x: "-20vw", opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeIn" }}
                  viewport={{ once: true }}
                >
                  <h2>Native American Health Center</h2>
                  <p>
                    The new{" "}
                    <abbr title="Native American Health Center">NAHC</abbr> site
                    is a non profit website that was hand-crafted from the
                    ground up. This included a fully custom design, built on a
                    responsive framework to ensure an optimal mobile experience,
                    and integrated with the powerful WordPress{" "}
                    <abbr title="Content Management System">CMS</abbr>.
                  </p>
                  <p>
                    <a
                      title="View Native American Health Center Web Design Case Study"
                      href="https://deepblue.com/portfolio/nahc/"
                    >
                      View Native American Health Center Case Study
                    </a>
                  </p>
                </motion.div>
                <div
                  className="
              csg-image csg-image-5"
                ></div>
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
              viewport={{ once: true }}
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
    </>
  );
}

export default CaseStudy;
