import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand-logo">
          🕉️ BookMySastri
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="nav-actions">
          <button className="btn-primary">Book Now</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
