import React, { useContext, useState }from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../main/UserContext';
import './Navbar.css';

const Navbar = () => {
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [usersDropdownOpen, setUsersDropdownOpen] = useState(false);
  const userContext = useContext(UserContext);

  const toggleAccountDropdown = () => {
    setAccountDropdownOpen(!accountDropdownOpen);
    if(usersDropdownOpen){
      setUsersDropdownOpen(!usersDropdownOpen);
    }
    
  };

  const toggleUsersDropdown = () => {
    setUsersDropdownOpen(!usersDropdownOpen);
    if(accountDropdownOpen){
      setAccountDropdownOpen(!accountDropdownOpen);
    }
  };

  const handleUserSelect = (userId: string) => () => {
    if (userContext) {
      const { setUserId } = userContext;
      setUserId(userId);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">GrubDash</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link admin-link" onClick={toggleAccountDropdown}>
            ⚙ My Account
            {accountDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/OfferPage" className="dropdown-item">See my offers</Link>
                <Link to="/BusinessSubmission" className="dropdown-item">Add a new business</Link>
                <Link to="/PersonalInfoSubmission" className="dropdown-item">Add a new business owner</Link>
                <Link to="/BankInfo" className="dropdown-item">Add new bank information</Link>
              </div>
            )}
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link admin-link" onClick={toggleUsersDropdown}>
            Users
            {usersDropdownOpen && (
              <div className="dropdown-menu">
                {['Alice', 'Bob', 'Charlie', 'Dave'].map((user, index) => (
                  <div key={index} className="dropdown-item" onClick={handleUserSelect(user)}>
                    {user}
                  </div>
                ))}
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;