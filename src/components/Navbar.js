import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // Helps us highlight the current page

  return (
    <nav className="navbar">
      {/* LEFT: Logo */}
      <div className="logo">
        <Link to="/" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "1.6rem" }}>🌱</span> 
          <span style={{ letterSpacing: "1px" }}>AGRITECH</span>
        </Link>
      </div>

      {/* CENTER: Attractive Nav Buttons */}
      <div className="nav-links">
        <Link 
          to="/" 
          className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}
        >
          About
        </Link>
      </div>

      {/* RIGHT: Auth Buttons */}
      <div className="auth-buttons">
        <Link to="/login" className="btn-auth login-btn">Login</Link>
        <Link to="/signup" className="btn-auth signup-btn">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;