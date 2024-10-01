import { motion } from "framer-motion";

function ServiceGrid() {
  return (
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
                We are a nationally-recognized web design agency with a passion
                for building hand-crafted websites. We have experienced teams
                focused on creating the most beautiful and intuitive user
                experiences on the web.
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
                campaigns centered around bold ideas and creative expertise that
                are designed to create impact and deliver measurable results.
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
  );
}

export default ServiceGrid;
