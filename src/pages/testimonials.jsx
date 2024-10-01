import "../assets/styles/Testimonials/testimonials.css";
import TestimonialsBanner from "../components/testimonials/testimonials-banner";
import TestimonialsGrid from "../components/testimonials/testimonials-grid";
import TestimonialsSection from "../components/testimonials/testimonials-section";
import Hiring from "../components/common/hiring-section";
import BlogSection from "../components/common/blog-section";
import Technology from "../components/common/technology-Section";

function Testimonials() {
  return (
    <>
      <TestimonialsBanner />
      <TestimonialsSection />
      <TestimonialsGrid />
      <BlogSection />
      <Hiring />
      <Technology />
    </>
  );
}

export default Testimonials;
