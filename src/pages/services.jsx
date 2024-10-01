import "../assets/styles/services/service.css";
import ServiceBanner from "../components/services/service-banner";
import ServiceSection from "../components/services/service-section";
import ServiceGrid from "../components/services/service-grid";
import Hiring from "../components/common/hiring-section";
import BlogSection from "../components/common/blog-section";
import Technology from "../components/common/technology-Section";

function Services() {
  return (
    <div>
      <ServiceBanner />
      <ServiceSection />
      <ServiceGrid />
      <BlogSection />
      <Hiring />
      <Technology />
    </div>
  );
}
export default Services;
