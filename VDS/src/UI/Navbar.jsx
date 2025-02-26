import React from "react";
import "./Navbar.css";
import logo from "../assets/VDS.jpg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="VDS Global Edusolutions" />
      </div>

      <ul className="nav-links">
        <li><a href="/" className="nav-item">Home</a></li>
        <li><a href="/services" className="nav-item">Services</a></li>
        <li><a href="/aboutus" className="nav-item">About Us</a></li>
        <li><a href="/contactus" className="nav-item">Contact Us</a></li>
      </ul>
    </nav>
  );
}
