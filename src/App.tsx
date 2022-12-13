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
        <Route path="/" element={<Home />}></Route>
        <Route path="/employment.js" element={<Employment />}></Route>
        <Route path="/projects.html" element={<Projects />}></Route>
        <Route path="/contact.json" element={<Contact />}></Route>
        <Route path="/resume.pdf" element={<Resume />}></Route>
      </Routes>
    </div>
  );
}

export default App;
