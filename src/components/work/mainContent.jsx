import "../../assets/styles/work/section.css";
import { motion } from "framer-motion";

function Section() {
  return (
    <>
      <div className="section">
        <div className="content-wrapper">
          <div className="left-content">
            <h2>DEEPBLUE A.I. Web Design Portfolio</h2>
          </div>
          <div className="right-content">
            <p>
              A leading Web Design and WordPress development agency, we offer a
              core set of AI-powered design, development, and marketing services
              to a diverse group of industries. Our capabilities range from
              custom web design, infused with AI-driven personalization and
              optimization, to responsive design and robust CMS solutions. We
              integrate cutting-edge AI into branding and SEO marketing
              campaigns, always prioritizing an exceptional user experience.
              <p>Let us show you how AI can transform your online presence!</p>
            </p>
            <p>
              Explore the industry links below to view our web design portfolio
              and contact us to schedule your complimentary assessment.
            </p>
          </div>
        </div>
      </div>
      <div className="content-divider"></div>
      <div className="work-section">
        <div className="work-grid">
          <motion.div
            className="content"
            initial={{ opacity: 0, x: "-25vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Corporate</h2>
            <p>
              Our experience in corporate web design goes back 25 years and our
              collaborations have always served as inspiration for the
              convergence of creativity and brand positioning.
            </p>
            <a href="#">
              <em>Learn More</em>
            </a>
          </motion.div>
          <img src="images/work-section/corporate.jpg" />
        </div>
        <div className="work-grid">
          <motion.div
            className="content"
            initial={{ opacity: 0, x: "-25vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>eCommerce</h2>
            <p>
              eCommerce As a business, it is crucial to have the tools to manage
              your eCommerce website and the administrative features to fit with
              your business processes.
            </p>
            <a href="#">
              <em>Learn More</em>
            </a>
          </motion.div>
          <img src="images/work-section/ecommerce.jpg" />
        </div>
        <div className="work-grid">
          <motion.div
            className="content"
            initial={{ opacity: 0, x: "-25vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Government</h2>
            <p>
              We do government web design like no one else. We break through the
              bureaucracy and create beautiful and intuitive websites.
            </p>
            <a href="#">
              <em>Learn More</em>
            </a>
          </motion.div>
          <img src="images/work-section/government.jpg" />
        </div>
        <div className="work-grid">
          <motion.div
            className="content"
            initial={{ opacity: 0, x: "-25vw" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Healthcare</h2>
            <p>
              Healthcare web design that puts patient needs first. We create
              websites for healthcare companies, ranging from the largest
              operator of hospitals in America to a small surgery center in
              remote Alaska
            </p>
            <a href="#">
              <em>Learn More</em>
            </a>
          </motion.div>
          <img src="images/work-section/health.jpg" />
        </div>
      </div>
    </>
  );
}
export default Section;
