import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dictionary from "./pages/Dictionary";
import Buod from "./pages/Buod";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dictionary/:id" element={<Dictionary />} />
        <Route path="/buod/:id" element={<Buod />} />
      </Routes>
    </Router>
  );
}

export default App;
