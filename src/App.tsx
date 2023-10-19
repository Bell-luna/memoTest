import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Memotest from "./Memotest";
import WordPerMinute from "./WordPerMinute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/memotest" element={<Memotest />} />
        <Route path="/wpm" element={<WordPerMinute />} />
      </Routes>
    </Router>
  );
}

export default App;
