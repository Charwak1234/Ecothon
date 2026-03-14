import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SoilAnalysis from "./pages/SoilAnalysis";
import CropYield from "./pages/CropYield";
import DiseaseDetection from "./pages/DiseaseDetection";
import GovernmentSchemes from "./pages/GovernmentSchemes";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/soil" element={<SoilAnalysis />} />
        <Route path="/crop-yield" element={<CropYield />} />
        <Route path="/disease" element={<DiseaseDetection />} />
        <Route path="/schemes" element={<GovernmentSchemes />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;