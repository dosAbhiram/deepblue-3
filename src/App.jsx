import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Work from "./pages/work";
import About from "./pages/about";
import Services from "./pages/services";
import CaseStudy from "./pages/caseStudies";
import IntelCaseStudy from "./pages/innerCaseStudy/intelPage";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import ScrollToTop from "./components/common/scrollToTop";

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
        <Route path="/work/intel" element={<IntelCaseStudy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
