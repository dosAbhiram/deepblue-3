import "../../assets/styles/work/caseStudy/intelPage.css";
import { easeInOut, motion } from "framer-motion";

function IntelCaseStudy() {
  return (
    <>
      <div className="background1"></div>
      <div className="background2">
        <div className="two-content">
          <h2>
            D E E P B L U E was brought on board to create a brand new website
            for Intel that highlights their commitment to open source.
          </h2>
        </div>
      </div>
      <div className="background3">
        <motion.div
          className="three-content"
          initial={{ opacity: 0, x: "-25vw" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: easeInOut }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2>Built using WordPress, The leading open source CMS.</h2>
          <div className="three-divider"></div>
          <p>
            Through open source, collaboration and competition coexist.
            Individual participants set aside rivalries to collaboratively work
            out problems that will benefit everyone involved.
          </p>
        </motion.div>

        <motion.div
          className="nest"
          initial={{ opacity: 0, y: "-50vh" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 50,
            damping: 15,
          }}
          viewport={{ once: true }}
        ></motion.div>

        <div style={{ width: "40vw" }}></div>
      </div>

      <div className="background4">
        <motion.div
          className="phone1"
          initial={{ opacity: 0, y: "50vh" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.div
          className="phone2"
          initial={{ opacity: 0, y: "50vh" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.div
          className="four-content"
          initial={{ opacity: 0, x: "25vw" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: easeInOut }}
          viewport={{ once: true }}
        >
          <h2>Intel was certified ADA & W3C-compliant.</h2>
          <div className="four-divider"></div>
          <p>
            The new website was designed from the ground up to adhere to
            industry best practices, including W3C for usability, cross-browser
            compatibility and mobile device compatibility, as well as
            ADA-compliance for those with disabilities.
          </p>
        </motion.div>
      </div>
      <div className="background5">
        <div className="five-content">
          <h1>Create an impact</h1>
          <button>
            <em>Visit Website</em>
          </button>
        </div>
        <motion.div
          className="penguin"
          initial={{ opacity: 0, y: "50vh" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
          viewport={{ once: true }}
        >
          <img src="images/caseStudy/intel/penguin.png" />
        </motion.div>
      </div>
    </>
  );
}

export default IntelCaseStudy;
