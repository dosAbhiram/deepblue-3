import "../assets/styles/caseStudy/caseStudy.css";
import CaseStudyBanner from "../components/CaseStudy/CaseStudy-banner";
import CaseStudySection from "../components/CaseStudy/caseStudy-section";
import CaseStudyGrid from "../components/CaseStudy/caseStudy-grid";
import Hiring from "../components/common/hiring-section";
import BlogSection from "../components/common/blog-section";
import Technology from "../components/common/technology-Section";

function CaseStudy() {
  return (
    <>
      <div>
        <CaseStudyBanner />
        <CaseStudySection />
        <CaseStudyGrid />
        <BlogSection />
        <Hiring />
        <Technology />
      </div>
    </>
  );
}

export default CaseStudy;
