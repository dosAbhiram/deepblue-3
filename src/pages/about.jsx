import "../assets/styles/about/about.css";
import AboutBanner from "../components/about/about-banner";
import AboutSection from "../components/about/aboutSection";
import AboutBackground from "../components/about/about-background";
import AboutSection2 from "../components/about/aboutSection2";
import AboutGrid from "../components/about/about-grid";
import Hiring from "../components/common/hiring-section";
import AboutTeam from "../components/about/about-team";
import AboutAward from "../components/about/about-awards";

function About() {
  return (
    <div>
      <AboutBanner />
      <AboutSection />
      <AboutBackground />
      <AboutSection2 />
      <AboutGrid />
      <AboutTeam />
      <Hiring />
      <AboutAward />
    </div>
  );
}

export default About;
