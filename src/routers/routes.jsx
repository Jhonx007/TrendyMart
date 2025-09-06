import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Users from "../pages/Users";
import Home from "../pages/Home";
import About from "../pages/About";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        {/*route management*/}
        <Route path="/" element={<Home />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}
