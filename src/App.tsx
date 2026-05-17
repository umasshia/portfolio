import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import General from "./pages/General";
import Home from "./pages/Home/index";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.focus();
    }
  }, [location.pathname]);

  return (
    <div className="main">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <div className="page-wrap">
        <Tabs />
        <main
          id="main-content"
          className="page-layout"
          ref={mainRef}
          tabIndex={-1}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/general.java" element={<General />} />
            <Route path="/experience.cpp" element={<Experience />} />
            <Route path="/projects.yml" element={<Projects />} />
            <Route path="/contact.json" element={<Contact />} />
            <Route path="/resume.pdf" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
