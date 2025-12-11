import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Favorites from "./pages/Favorites";
import CityDetails from "./pages/CityDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="/CityDetails" element={<CityDetails/>} />
            <Route path="*" element={<NotFound/>} />
            <Route />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
