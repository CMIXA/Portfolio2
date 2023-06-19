import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import Transition from "./components/Transition";
import Navbar from "./components/navbar";
import "./css/transitions.css";
// Main Pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Mywork from "./pages/mywork";
// Project Pages
import Omni from "./pages/omni";
import VRL from "./pages/vrl";
import MO from "./pages/mo";
import II from "./pages/ii";
import CU from "./pages/cu";
import P8 from "./pages/p8";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <>
        <Navbar />
      </>
      <Transition>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mywork" element={<Mywork />}>
            <Route path="omni" element={<Omni />} />
            <Route path="vrl" element={<VRL />} />
            <Route path="mo" element={<MO />} />
            <Route path="ii" element={<II />} />
            <Route path="cu" element={<CU />} />
            <Route path="p8" element={<P8 />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Transition>
    </div>
  );
}

export default App;
