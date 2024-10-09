import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Work from "./pages/work";
import About from "./pages/about";
import Services from "./pages/services";
import CaseStudy from "./pages/caseStudies";
import Testimonials from "./pages/testimonials";
import Blogs from "./pages/blog";
import IntelCaseStudy from "./pages/innerCaseStudy/intelPage";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import ScrollToTop from "./components/common/scrollToTop";
import BlogArchive from "./components/blogs/blog-archive";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/caseStudy" element={<CaseStudy />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/work/intel" element={<IntelCaseStudy />} />
        <Route path="/:year/:month" element={<BlogArchive />} />
      </Routes>
      <Footer id="footer" />
    </Router>
  );
}

export default App;
