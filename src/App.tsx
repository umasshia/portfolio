import { useState } from "react";
import { Route, Routes } from "react-router";
import Email from "./components/Email";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import General from "./pages/General";
import Home from "./pages/Home/index";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {

  const [revealed, setRevealed] = useState(false)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'e' && e.ctrlKey)
    setRevealed(!revealed)
  };

  return (
    <div className="main"
        onKeyDown={(e) => handleKeyDown(e)}
      tabIndex={0}
    >
      <Navbar />
      <div className="page-wrap">
        <Tabs />
        <div className="page-layout">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/general.java" element={<General />}></Route>
            <Route path="/experience.cpp" element={<Experience />}></Route>
            <Route path="/projects.yaml" element={<Projects />}></Route>
            <Route path="/contact.json" element={<Contact />}></Route>
            <Route path="/resume.pdf" element={<Resume />}></Route>
          </Routes>
        </div>
        {revealed ? <Email /> : ''}
      </div>
    </div>
  );
}

export default App;
