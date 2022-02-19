
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Graph from "./pages/Graph"
import Home from "./pages/Home"
import Info from "./pages/Info"
import Status from './pages/Status';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Graph" element={<Graph />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Status" element={<Status />} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
