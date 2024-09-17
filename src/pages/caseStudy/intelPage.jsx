import "../../assets/styles/work/caseStudy/intelPage.css";
import { easeIn, motion } from "framer-motion";

function IntelCaseStudy() {
  return (
    <>
      <div className="background1"></div>
      <div className="background2">
        <h2>
          D E E P B L U E was brought on board to create a brand new website for
          Intel that highlights their commitment to open source.
        </h2>
      </div>
      <div className="background3">
        <motion.div
          className="three-content"
          initial={{ opacity: 0, y: "50vh" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easeIn }}
          viewport={{ once: true }} // Ensures the animation triggers only once
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
          initial={{ opacity: 0, y: "50vh" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
          viewport={{ once: true }} // Ensures the animation triggers only once
        ></motion.div>

        <div style={{ width: "40vw" }}></div>
      </div>
    </>
  );
}

export default IntelCaseStudy;
