import { useState } from "react";
import Navbar from "../components/common/navbar";
import Category from "../components/work/category";
import HeroSection from "../components/work/heroSection";
import Section from "../components/work/mainContent";
import "../assets/styles/work/work.css";
import Footer from "../components/common/footer";

function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section />

      <div className="works">
        <h3>
          <em>Featured Work /</em>
        </h3>
        <div className="category">
          <button onClick={() => handleClick("All")}>All</button>
          <button onClick={() => handleClick("Technology")}>Technology</button>
          <button onClick={() => handleClick("Government")}>Government</button>
          <button onClick={() => handleClick("Education")}>Education</button>
          <button onClick={() => handleClick("ConsumerBrand")}>
            Consumer Brand
          </button>
          <button onClick={() => handleClick("Entertainment")}>
            Entertainment
          </button>
          <button onClick={() => handleClick("Tourism")}>Tourism</button>
          <button onClick={() => handleClick("NonProfit")}>Non-Profit</button>
          <button onClick={() => handleClick("Healthcare")}>Healthcare</button>
          <button onClick={() => handleClick("Corporate")}>Corporate</button>
          <button onClick={() => handleClick("eCommerce")}>eCommerce</button>
        </div>
        <Category selectedCategory={selectedCategory} />
        <div style={{ backgroundColor: "#3f4247", width: "100vw" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Work;
