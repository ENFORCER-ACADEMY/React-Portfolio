import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar1 from "./pages/Navbar1";
import About from "./pages/About";
import Home from "./pages/Home";

import Footer from "./pages/Footer";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Navbar1 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
