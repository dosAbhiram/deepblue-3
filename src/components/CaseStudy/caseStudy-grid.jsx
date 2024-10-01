import { motion } from "framer-motion";

function CaseStudyGrid() {
  return (
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
                Igniting Sparks of Innovation. DEEPBLUE was brought onboard to
                create a brand new website for Intel that highlights their
                commitment to open source.
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
                The new ObjectRocket website was hand-crafted from the ground
                up. This included a fully custom web design and built on a
                responsive framework to ensure an optimal mobile experience.
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
                ground up. This included brand services, including logo design,
                a fully custom web design and built on a responsive framework to
                ensure an optimal mobile experience.
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
                We were tasked to completely overhaul the Roberts Boché website
                with a fresh design and make it more visible for local search
                (Local <abbr title="Search Engine Optimization">SEO</abbr>) in
                the Bay Area of California. The updated website uses the latest
                in best practices and emerging technologies designed to provide
                a competitive advantage.
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
                The new <abbr title="Native American Health Center">NAHC</abbr>{" "}
                site is a non profit website that was hand-crafted from the
                ground up. This included a fully custom design, built on a
                responsive framework to ensure an optimal mobile experience, and
                integrated with the powerful WordPress{" "}
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
  );
}

export default CaseStudyGrid;
