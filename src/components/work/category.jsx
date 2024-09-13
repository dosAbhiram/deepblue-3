/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import portfolio from "../../data/portfolio";
import "../../assets/styles/work/work.css";

function Category({ selectedCategory }) {
  const filterPortfolio = (category) => {
    return portfolio.filter((item) => item.filter.includes(category));
  };

  const filteredPortfolio = filterPortfolio(selectedCategory);

  const breakpointColumnsObj = {
    default: filteredPortfolio.length > 1 ? 3 : 1,
    1100: filteredPortfolio.length > 1 ? 2 : 1,
    700: 1,
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {filteredPortfolio.map((item) => (
        <motion.div
          key={item.Name}
          className="portfolioImage"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeInVariants}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <img src={item.src} alt={item.Name} />
          <div className="overlay">
            <p>{item.Name}</p>

            <Link to={item.link}>
              <em>View Case Study</em>
            </Link>
          </div>
        </motion.div>
      ))}
    </Masonry>
  );
}

export default Category;
