
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Graph from "./pages/Graph"
import Home from "./pages/Home"
import Info from "./pages/Info"

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Graph" element={<Graph />} />
          <Route path="/" element={<Home />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
