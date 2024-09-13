import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Work from "./pages/work";

function App() {
  return (
    <Router basename="/deepblue-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
