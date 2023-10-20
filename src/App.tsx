// import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Memotest from "./Memotest";
import WordPerMinute from "./WordPerMinute";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/memotest">Memotest</Link>
          </li>
          <li>
            <Link to="/wpm">Word Per Minute</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/memotest" element={<Memotest />} />
        <Route path="/wpm" element={<WordPerMinute />} />
      </Routes>
    </Router>
  );
}

export default App;
