import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/index";
import Tabs from "./components/Tabs/index";
import Contact from "./pages/Contact";
import Employment from "./pages/Employment";
import General from "./pages/General";
import Home from "./pages/Home/index";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="page-wrap">
        <Tabs />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/general.java" element={<General />}></Route>
          <Route path="/employment.js" element={<Employment />}></Route>
          <Route path="/projects.html" element={<Projects />}></Route>
          <Route path="/contact.json" element={<Contact />}></Route>
          <Route path="/resume.pdf" element={<Resume />}></Route>
          </Routes>
      </div>
    </div>
  );
}

export default App;
