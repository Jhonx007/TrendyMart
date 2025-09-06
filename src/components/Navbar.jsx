import { FaStore, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = ({ isActive }) =>
    `relative font-medium transition-colors duration-300 group ${
      isActive ? "text-cyan-600" : "text-neutral-700 hover:text-cyan-600"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo, name */}
        <div className="flex items-center gap-2">
          <FaStore className="text-cyan-600 text-2xl" />
          <span className="text-xl font-bold text-neutral-800">TrendyMart</span>
        </div>

        {/* hamburger button(mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-neutral-700 text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <NavLink to="/" className={linkClasses}>
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={linkClasses}>
              Catalog
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className={linkClasses}>
              Users
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClasses}>
              About Us
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <NavLink
                to="/"
                className={linkClasses}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                className={linkClasses}
                onClick={() => setMenuOpen(false)}
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={linkClasses}
                onClick={() => setMenuOpen(false)}
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={linkClasses}
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
