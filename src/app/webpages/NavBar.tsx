import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">GrubDash</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link admin-link" onClick={toggleDropdown}>
            ⚙ My Account
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/OfferPage" className="dropdown-item">See my offers</Link>
                <Link to="/BusinessSubmission" className="dropdown-item">Add a new business</Link>
                <Link to="/PersonalInfoSubmission" className="dropdown-item">Add a new business owner</Link>
                <Link to="/BankInfo" className="dropdown-item">Add new bank information</Link>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;