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
            ⚙ Admin
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/FormPage" className="dropdown-item">Add a new Customer</Link>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;