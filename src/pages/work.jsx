import { useState, useEffect } from "react";
import Category from "../components/work/category";
import HeroSection from "../components/work/heroSection";
import Section from "../components/work/mainContent";
import "../assets/styles/work/work.css";
import portfolio from "../data/portfolio";

const calculateCategoryCount = (portfolio) => {
  const categoryCount = {};

  portfolio.forEach((item) => {
    item.filter.forEach((category) => {
      if (categoryCount[category]) {
        categoryCount[category] += 1;
      } else {
        categoryCount[category] = 1;
      }
    });
  });

  return categoryCount;
};

function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryCount, setCategoryCount] = useState({});

  useEffect(() => {
    const counts = calculateCategoryCount(portfolio);
    setCategoryCount(counts);
  }, []);

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <HeroSection />
      <Section />
      <div className="width-container">
        <div className="works">
          <p>
            <em>Featured Work /</em>
          </p>
          <div className="category">
            {Object.keys(categoryCount).map((category) => (
              <button key={category} onClick={() => handleClick(category)}>
                {category}{" "}
                {categoryCount[category] > 0 && (
                  <span className="badge">{categoryCount[category]}</span>
                )}
              </button>
            ))}
          </div>
          <Category selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
}

export default Work;
