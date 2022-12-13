import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Employment from "./pages/Employment";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/portfolio/" element={<Home />}></Route>
        <Route path="/portfolio/employment.js" element={<Employment />}></Route>
        <Route path="/portfolio/projects.html" element={<Projects />}></Route>
        <Route path="/portfolio/contact.json" element={<Contact />}></Route>
        <Route path="/portfolio/resume.pdf" element={<Resume />}></Route>
      </Routes>
    </div>
  );
}

export default App;
