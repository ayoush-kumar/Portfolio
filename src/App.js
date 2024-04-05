import Navbar from './components/Navbar.js'
import Preloader from "../src/components/Pre";
import ScrollToTop from "./components/ScrollToTop.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Projects from "./components/Projects/Projects.js";
import Footer from "./components/Footer.js";
import Resume from "./components/Resume/ResumeNew.js";
import './App.css';

import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import React, { useState, useEffect } from "react";


function App() {

  const [ load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    } , 1200);
    return () => clearTimeout(timer);
    }, [])
  return (

   <Router>
    <Preloader load={load} />
    <div className='App' id={'load' ? "no-scroll" : "scroll"}>
      <Navbar/>

      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />

    </div>
    
   </Router>
  );
}

export default App;
