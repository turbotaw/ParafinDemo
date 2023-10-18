import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Your App</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/form" className="nav-link">Form</Link>
        </li>
        <li className="nav-item">
          <Link to="/thank-you" className="nav-link">Thank You</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;