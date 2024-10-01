import "../assets/styles/caseStudy/caseStudy.css";
import CaseStudyBanner from "../components/CaseStudy/CaseStudy-banner";
import CaseStudyBackground from "../components/CaseStudy/caseStudy-background";
import CaseStudyGrid from "../components/CaseStudy/caseStudy-grid";
import Hiring from "../components/common/hiring-section";
import BlogSection from "../components/common/blog-section";
import Technology from "../components/common/technology-Section";

function CaseStudy() {
  return (
    <>
      <div>
        <CaseStudyBanner />
        <CaseStudyBackground />
        <CaseStudyGrid />
        <BlogSection />
        <Hiring />
        <Technology />
      </div>
    </>
  );
}

export default CaseStudy;
