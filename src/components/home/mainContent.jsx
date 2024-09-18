import "../../assets/styles/home/main.css";
import "../../assets/styles/parallaxSection.css";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

function Section() {
  return (
    <div className="section">
      <div className="content-wrapper">
        <div className="left-content">
          <h2>Atlanta Web Design.</h2>
          <h3>est. 1999.</h3>
        </div>
        <div className="right-content">
          <p>
            <b>DEEPBLUE</b> is an award-winning, ADA-compliant web design
            agency, established in 1999. We leverage the power of{" "}
            <b>Artificial Intelligence (A.I.)</b> to deliver exceptional{" "}
            <b>user experiences, better efficiency</b> and{" "}
            <b>measurable results</b> for businesses of all sizes.
          </p>
          <p>
            Headquartered in <b>Atlanta</b>, with offices in{" "}
            <b>San Francisco</b>, we serve a diverse clientele, including
            technology innovators, non-profit organizations, government
            agencies, academic institutions, and forward-thinking businesses.
          </p>
        </div>
      </div>
    </div>
  );
}

function ParallaxSection() {
  return (
    <section className="parallax-section">
      <div className="parallax-content">
        <h2>
          “In one drop of water are found all the secrets of all the oceans.”
        </h2>
        <p>– Kahlil Gibran –</p>
      </div>
    </section>
  );
}
function Section2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div ref={ref} className="Container">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        Our Capabilities
      </motion.h1>
      <div className="section-container">
        <div className="part">
          <motion.div
            className="card"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h2>Custom Web Design</h2>
            <p>
              We craft visually stunning and user-friendly websites that
              captivate and engage your target audience and drive conversions.
            </p>
            <a href="#">
              <em>Learn More</em>
            </a>
          </motion.div>
          <motion.div
            className="card"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
          >
            <h2>Brand & Styling Strategies</h2>
            <p>
              We establish a strong brand identity that resonates with your
              audience and sets you apart from the competition.
            </p>
            <a href="#">
              <em>Learn More</em>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="section-divider"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
        ></motion.div>

        <div className="part">
          <motion.div
            className="card"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          >
            <h2>AI-Powered Design</h2>
            <p>
              We stay ahead of the curve by incorporating cutting-edge AI tools
              to optimize user experience, personalize content, and enhance
              efficiency.
            </p>
            <a href="#">
              <em>Learn More</em>
            </a>
          </motion.div>
          <motion.div
            className="card"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
          >
            <h2>Search Engine Marketing</h2>
            <p>
              We equip you with the tools and strategies to increase your online
              visibility and attract qualified leads.
            </p>
            <a href="#">
              <em>Learn More</em>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.4, ease: "easeInOut" }}
          className="section-divider"
        ></motion.div>

        <div className="part">
          <motion.div
            className="card"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeInOut" }}
          >
            <h2>Responsive Web Design</h2>
            <p>
              Your website will look flawless and function optimally across all
              devices, from desktops to mobile phones and tablets.
            </p>

            <a href="#">
              <em>Learn More</em>
            </a>
          </motion.div>
          <motion.div
            className="card"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
          >
            <h2>Maintenance & Analytics</h2>
            <p>
              Just like a well-oiled machine, your website requires ongoing
              maintenance and analysis to function optimally.
            </p>
            <a href="#">
              <em>Learn More</em>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0 });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div className="client-container">
      <p>Featured Web Design Clients /</p>

      <div className="insideContainer" ref={ref}>
        {/* First row */}
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="row1"
        >
          <img src="images/client-section/Intel-1.png.webp" alt="Intel" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="images/client-section/JHU.png.webp" alt="JHU" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="images/client-section/nasa.png.webp" alt="NASA" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img
            src="images/client-section/Continental-1.png.webp"
            alt="Continental"
          />
        </motion.div>

        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeInOut" }}
          style={{ height: "1px", width: "100vw", backgroundColor: "white" }}
        ></motion.div>

        {/* Second row */}
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 0.7, ease: "easeInOut" }}
          className="row1"
        >
          <img src="images/client-section/sports-club.png" alt="Sports Club" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 1.4, duration: 0.6, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="images/client-section/Airbus.png" alt="Airbus" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 1.4, duration: 0.6, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="images/client-section/usc.png" alt="USC" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 1.4, duration: 0.6, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="images/client-section/ta.png" alt="TA" />
        </motion.div>

        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
          transition={{ delay: 2, duration: 0.6, ease: "easeInOut" }}
          style={{ height: "1px", width: "100vw", backgroundColor: "white" }}
        ></motion.div>

        {/* Third row */}
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
          transition={{ delay: 2.7, duration: 0.7, ease: "easeInOut" }}
          className="row1"
        >
          <img
            src="images/client-section/atlanta-web-design-4.png"
            alt="Save Our Seas"
          />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 2.7, duration: 0.6, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="images/client-section/atlanta-web-design-5.png" alt="EPA" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 2.7, duration: 0.6, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img
            src="images/client-section/atlanta-web-design-6.png"
            alt="Mazda"
          />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 2.7, duration: 0.6, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img
            src="images/client-section/atlanta-web-design-7.png"
            alt="UCDavis"
          />
        </motion.div>

        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
          transition={{ delay: 3.3, duration: 0.6, ease: "easeInOut" }}
          style={{ height: "1px", width: "100vw", backgroundColor: "white" }}
        ></motion.div>

        {/* Fourth row */}
        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
          transition={{ delay: 3.9, duration: 0.7, ease: "easeInOut" }}
          className="row1"
        >
          <img
            src="images/client-section/sweetwater2.png.webp"
            alt="Sweetwater"
          />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="images/client-section/NCI.png.webp" alt="NCI" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img src="images/client-section/disa.png.webp" alt="Disa" />
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ delay: 3.9, duration: 0.6, ease: "easeInOut" }}
            className="smallDiv"
          ></motion.div>
          <img
            src="images/client-section/medicalcity.png.webp"
            alt="Medical City"
          />
        </motion.div>
      </div>
    </div>
  );
}

function AwardSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="award-container">
      <p className="heading">Awards & Certifications /</p>
      <div className="awards" ref={ref}>
        <motion.div
          className="award"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <img src="images/awards/awwwards-home.png.webp" alt="Awwwards" />
          <p>Awwwards Winner</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          style={{ height: "25vh", backgroundColor: "black", width: "1px" }}
          transition={{ delay: 1.5, duration: 0.5, ease: "linear" }}
          className="awardDiv"
        ></motion.div>

        <motion.div
          className="award"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 1.7,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2,
          }}
        >
          <img
            src="images/awards/best-web-design.png.webp"
            alt="Best Web Design"
          />
          <p>Best Web Design</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          style={{ height: "25vh", backgroundColor: "black", width: "1px" }}
          transition={{ delay: 1.7, duration: 0.5, ease: "linear" }}
          className="awardDiv"
        ></motion.div>
        <motion.div
          className="award"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 1.9,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.4,
          }}
        >
          <img src="images/awards/webbys-home.png.webp" alt="Webby Award" />
          <p>Webby Award Winner</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          style={{ height: "25vh", backgroundColor: "black", width: "1px" }}
          transition={{ delay: 1.9, duration: 0.5, ease: "linear" }}
          className="awardDiv"
        ></motion.div>
        <motion.div
          className="award"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 2.1,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.6,
          }}
        >
          <img
            src="images/awards/GSA_home.png.webp"
            alt="GSA Contract Holder"
          />
          <p>GSA Contract Holder</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          style={{ height: "25vh", backgroundColor: "black", width: "1px" }}
          transition={{ delay: 2.1, duration: 0.5, ease: "linear" }}
          className="awardDiv"
        ></motion.div>
        <motion.div
          className="award"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 2.3, // Slower animation
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.8,
          }}
        >
          <img
            src="images/awards/508c.png.webp"
            alt="ADA Disabilities Compliant"
          />
          <p>ADA Disabilities Compliant</p>
        </motion.div>
      </div>
    </div>
  );
}

function ParallaxSection2() {
  return (
    <section className="parallax-section-2">
      <div className="parallax-content">
        <h2>“Don&apos;t wait any longer,”</h2>
        <h2>“Dive in the ocean,”</h2>
        <h2>“Leave and let the sea be you.”</h2>
        <p>– Rumi –</p>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <div className="blog-container">
      <div className="blog-title">
        <p>The Blog /</p>
      </div>
      <div className="blog">
        <div>
          <h3>ARTIFICIAL INTELLIGENCE</h3>
          <h1>AI: A Game-Changer for Small Bussiness Websites</h1>
          <p>August 11,2024 | by Frank Farris</p>
        </div>
      </div>
      <div className="divider" style={{ height: "1px", width: "100vw" }}></div>
      <div className="blog">
        <div>
          <h3>BRAND DESIGN</h3>
          <h1>Typography: The Unsung Hero of Web Design</h1>
          <p>August 5,2024 | by Antje Knott</p>
        </div>
      </div>
      <div className="divider" style={{ height: "1px", width: "100vw" }}></div>
      <div className="blog">
        <div>
          <h3>WEB DESIGN</h3>
          <h1>Future of Web Design: Emerging Technologies</h1>
          <p>July 30,2024 | by Antje Knott</p>
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
