import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Work from "./pages/work";
import About from "./pages/about";
import Services from "./pages/services";
import CaseStudy from "./pages/caseStudies";
import Testimonials from "./pages/testimonials";
import IntelCaseStudy from "./pages/innerCaseStudy/intelPage";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import ScrollToTop from "./components/common/scrollToTop";
import Blogs from "./pages/Blogs/blog-main";
import ArchiveBlogs from "./pages/Blogs/blog-archives";
import CategoryBlogs from "./pages/Blogs/blog-categories";
import SearchBlogs from "./pages/Blogs/blog-search";

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
        <Route path="/work/intel" element={<IntelCaseStudy />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/:year/:month" element={<ArchiveBlogs />} />
        <Route path="/category/:category" element={<CategoryBlogs />} />
        <Route path="/search" element={<SearchBlogs />} />
      </Routes>
      <Footer id="footer" />
    </Router>
  );
}

export default App;
