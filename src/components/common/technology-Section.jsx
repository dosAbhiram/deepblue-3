import { motion } from "framer-motion";
import "../../assets/styles/common/technology.css";

function Technology() {
  return (
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
  );
}

export default Technology;
