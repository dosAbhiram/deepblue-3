import "../../assets/styles/home/main.css";
import "../../assets/styles/parallaxSection.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Section() {
  return (
    <div className="section1-container">
      <div className="width-container">
        <div className="section1-homepage">
          <div className="section1-left-content">
            <h2>
              Atlanta Web Design.
              <br />
              <span>est. 1999.</span>
            </h2>
          </div>
          <div className="section1-right-content">
            <p>
              <strong>DEEPBLUE</strong> is an award-winning, ADA-compliant web
              design agency, established in 1999. We leverage the power of{" "}
              <strong>Artificial Intelligence (A.I.)</strong> to deliver
              exceptional <strong>user experiences, better efficiency</strong>{" "}
              and <strong>measurable results</strong> for businesses of all
              sizes.
            </p>
            <p>
              With offices in <strong>Atlanta</strong>, with offices in{" "}
              <strong>San Francisco</strong>, we serve a diverse clientele,
              including technology innovators, non-profit organizations,
              government agencies, academic institutions, and forward-thinking
              businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ParallaxSection() {
  return (
    <section className="parallax-section">
      <div className="parallax-inner">
        <div className="width-container">
          <h2>
            “In one drop of water are found all the secrets of all the oceans.”
          </h2>
        </div>
        <div className="width-container">
          <p>
            <em>- Kahlil Gibran –</em>
          </p>
        </div>
      </div>
    </section>
  );
}
function Section2() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <section className="capabilities" ref={ref}>
      <div className="inner-heading">
        <div className="width-container">
          <p>Our Services /</p>
          <h2>Our Capabilities</h2>
        </div>
      </div>
      <div className="width-container">
        <div className="capabilities-row">
          <motion.div
            className="column-container"
            initial={{ x: "-33vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            onViewportEnter={() => console.log("In view")}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="column-inner">
              <h3 className="column-heading">Custom Web Design</h3>
              <p className="column-content">
                We craft visually stunning and user-friendly websites that
                captivate and engage your target audience and drive conversions
              </p>
              <p className="column-link">
                <a href="#">Learn More</a>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="column-container"
            initial={{ x: "-33vw", opacity: 0 }} // Adjust to continue from where the first ended
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 1, ease: "easeIn" }}
          >
            <div className="column-inner">
              <h3 className="column-heading">AI-Powered Design</h3>
              <p className="column-content">
                We stay ahead of the curve by incorporating cutting-edge AI
                tools to optimize user experience, personalize content, and
                enhance efficiency.
              </p>
              <p className="column-link">
                <a href="#">Learn More</a>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="column-container"
            initial={{ x: "-33vw", opacity: 0 }} // Further adjust for the third column
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 1.6, duration: 1, ease: "easeIn" }}
          >
            <div className="column-inner" style={{ border: "none" }}>
              <h3 className="column-heading">Responsive Web Design</h3>
              <p className="column-content">
                Your website will look flawless and function optimally across
                all devices, from desktops to mobile phones and tablets. Atlanta
                web design.
              </p>
              <p className="column-link">
                <a href="#">Learn More</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="width-container">
        <div className="capabilities-row">
          <motion.div
            className="column-container"
            initial={{ x: "-33vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="column-inner">
              <h3 className="column-heading column-heading-padding">
                Brand & Identity Strategy
              </h3>
              <p className="column-content">
                We establish a strong brand identity that resonates with your
                audience and sets you apart from the competition.
              </p>
              <p className="column-link">
                <a href="#">Learn More</a>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="column-container"
            initial={{ x: "-33vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 1, ease: "easeIn" }}
          >
            <div className="column-inner">
              <h3 className="column-heading column-heading-padding">
                Search Engine Marketing
              </h3>
              <p className="column-content">
                We equip you with the tools and strategies to increase your
                online visibility and attract qualified leads.
              </p>
              <p className="column-link">
                <a href="#">Learn More</a>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="column-container"
            initial={{ x: "-33vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 1.6, duration: 1, ease: "easeIn" }}
          >
            <div className="column-inner" style={{ border: "none" }}>
              <h3 className="column-heading column-heading-padding">
                Maintenance & Analytics
              </h3>
              <p className="column-content">
                Just like a well-oiled machine, your website requires ongoing
                maintenance and analysis to function optimally.
              </p>
              <p className="column-link">
                <a href="#">Learn More</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function Clients() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="client-container" ref={ref}>
      <div className="width-container">
        <div className="client-row1">
          <p>Featured Web Design Clients /</p>
        </div>
        {/* row1 */}
        <motion.div
          className="client-row2"
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { opacity: 1, clipPath: "inset(0 0 0 0%)" } : {}}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <div className="image-wrapper">
            <img src="images/client-section/Intel-1.png.webp" alt="Intel" />
          </div>
          <div className="image-wrapper">
            <img src="images/client-section/JHU.png.webp" alt="JHU" />
          </div>

          <div className="image-wrapper">
            <img src="images/client-section/nasa.png.webp" alt="NASA" />
          </div>

          <div className="image-wrapper">
            <img
              src="images/client-section/Continental-1.png.webp"
              alt="Continental"
            />
          </div>
        </motion.div>
        {/* row2 */}
        <motion.div
          className="client-row2"
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { opacity: 1, clipPath: "inset(0 0 0 0%)" } : {}}
          transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
        >
          <div className="image-wrapper">
            <img
              src="images/client-section/sports-club.png"
              alt="Sports Club"
            />
          </div>
          <div className="image-wrapper">
            <img src="images/client-section/Airbus.png" alt="Airbus" />
          </div>

          <div className="image-wrapper">
            <img src="images/client-section/usc.png" alt="USC" />
          </div>

          <div className="image-wrapper">
            <img src="images/client-section/ta.png" alt="TA" />
          </div>
        </motion.div>
        {/* row3 */}
        <motion.div
          className="client-row2"
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { opacity: 1, clipPath: "inset(0 0 0 0%)" } : {}}
          transition={{ delay: 1, duration: 1, ease: "easeIn" }}
        >
          <div className="image-wrapper">
            <img
              src="images/client-section/atlanta-web-design-4.png"
              alt="Save Our Seas"
            />
          </div>
          <div className="image-wrapper">
            <img
              src="images/client-section/atlanta-web-design-5.png"
              alt="EPA"
            />
          </div>

          <div className="image-wrapper">
            <img
              src="images/client-section/atlanta-web-design-6.png"
              alt="Mazda"
            />
          </div>

          <div className="image-wrapper">
            <img
              src="images/client-section/atlanta-web-design-7.png"
              alt="UCDavis"
            />
          </div>
        </motion.div>

        {/* row4 */}
        <motion.div
          className="client-row3"
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { opacity: 1, clipPath: "inset(0 0 0 0%)" } : {}}
          transition={{ delay: 1.5, duration: 1, ease: "easeIn" }}
        >
          <div className="image-wrapper">
            <img
              src="images/client-section/sweetwater2.png.webp"
              alt="Sweetwater"
            />
          </div>
          <div className="image-wrapper">
            <img src="images/client-section/NCI.png.webp" alt="NCI" />
          </div>

          <div className="image-wrapper">
            <img src="images/client-section/disa.png.webp" alt="Disa" />
          </div>

          <div className="image-wrapper-border">
            <img
              src="images/client-section/medicalcity.png.webp"
              alt="Medical City"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function AwardSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="award-container" ref={ref}>
      <div className="width-container">
        <div className="heading">
          <p>Awards & Certifications /</p>
        </div>
        <motion.div
          className="awards-wrapper"
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { opacity: 1, clipPath: "inset(0 0 0 0%)" } : {}}
          transition={{ duration: 1.5 }}
        >
          <div className="award">
            <div className="innerAward">
              <img src="images/awards/awwwards-home.png.webp" alt="Awwwards" />
              <p>Awwwards Winner</p>
            </div>
          </div>

          <div className="award">
            <div className="innerAward">
              <img
                src="images/awards/best-web-design.png.webp"
                alt="Best Web Design"
              />
              <p>Best Web Design</p>
            </div>
          </div>

          <div className="award">
            <div className="innerAward">
              <img src="images/awards/webbys-home.png.webp" alt="Webby Award" />
              <p>Webby Award Winner</p>
            </div>
          </div>

          <div className="award">
            <div className="innerAward">
              <img
                src="images/awards/GSA_home.png.webp"
                alt="GSA Contract Holder"
              />
              <p>GSA Contract Holder</p>
            </div>
          </div>

          <div className="award">
            <div className="innerAward">
              <img
                src="images/awards/508c.png.webp"
                alt="ADA Disabilities Compliant"
              />
              <p>ADA Disabilities Compliant</p>
            </div>
          </div>

          <div className="award">
            <div className="innerAwardGood">
              <div className="goodFirms">
                <img
                  src="	https://goodfirms.s3.amazonaws.com/badges/white-sticker/top-website-development-companies.svg"
                  alt="GoodFirms Top Agency"
                  className="goodFirms-img"
                />
              </div>
              <p>GoodFirms Top Agency</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ParallaxSection2() {
  return (
    <section className="parallax-section-2">
      <div className="parallax-2-inner">
        <div className="width-container">
          <h2>
            “Don’t wait any longer.
            <br />
            Dive in the ocean,
            <br />
            Leave and let the sea be you.”
          </h2>
          <p>
            <em>- Rumi –</em>
          </p>
        </div>
      </div>
    </section>
  );
}
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
                AI: A Game-Changer for Small Bussiness Websites
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

function MainContent() {
  return (
    <>
      <Section />
      <ParallaxSection />
      <Section2 />
      <Clients />
      <AwardSection />
      <ParallaxSection2 />
      <BlogSection />
    </>
  );
}

export default MainContent;
