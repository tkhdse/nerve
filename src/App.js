import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog"

function App() {

  return (
    <div class="bg-[#FFFFF2] font-instrument">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </div>
  );
}

export default App;
