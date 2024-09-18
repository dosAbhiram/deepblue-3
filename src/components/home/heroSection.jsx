import { motion } from "framer-motion";
import "../../assets/styles/home/heroSection.css";

function HeroSection() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="banner-wrapper">
        <div className="banner-caption">
          <h1>
            Unleashing the Power of <b>AI</b> for Cutting-Edge{" "}
            <b>Web Design.</b>
          </h1>
        </div>
      </div>
      <button className="scroll-button" onClick={handleScroll}>
        <img src="icons/down.png" alt="Scroll Down" />
      </button>
    </motion.header>
  );
}

export default HeroSection;
