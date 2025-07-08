import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import FreeQuote from "./pages/FreeQuote";
import TeamMembers from "./pages/TeamMembers";
import Testimonial from "./pages/Testimonial";
import Career from "./pages/Career";
function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/freequote" element={<FreeQuote />} />
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  );
}

export default App;
