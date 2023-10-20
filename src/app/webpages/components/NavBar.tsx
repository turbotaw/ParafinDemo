import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../main/UserContext';  
import { BusinessContext } from '../../main/BusinessContext';  // Import BusinessContext
import './Navbar.css';
import { userToIdMapping, businessIdMapping } from '../../constants/userMapping';  // Adjusted import

const Navbar = () => {
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [usersDropdownOpen, setUsersDropdownOpen] = useState(false);
  const userContext = useContext(UserContext);
  const businessContext = useContext(BusinessContext);  

  const toggleAccountDropdown = () => {
    setAccountDropdownOpen(!accountDropdownOpen);
    if (usersDropdownOpen) {
      setUsersDropdownOpen(!usersDropdownOpen);
    }
  };

  const toggleUsersDropdown = () => {
    setUsersDropdownOpen(!usersDropdownOpen);
    if (accountDropdownOpen) {
      setAccountDropdownOpen(!accountDropdownOpen);
    }
  };

  const handleUserSelect = (userName: string) => () => {
    if (userContext) {
      const { setUserId } = userContext;
      if(userName === 'Create new user'){
        const tempUserId = '123';
        userToIdMapping.set(tempUserId, userName);
        setUserId(tempUserId);
        console.log("tempUserId: " + tempUserId);
      } else {
      const userId = userToIdMapping.get(userName);
      if (userId) {
        setUserId(userId);
        console.log("Set new userId to: " + userId);
        if (userName !== 'Create new user') {
          const businessId = businessIdMapping.get(userId);
          if (businessId) {
            businessContext?.setBusinessId(businessId); 
            console.log("Set new businessId to: " + businessId);
          } else {
            console.error(`Unknown business for user: ${userName}`);
          }
      } else {
        console.error(`Unknown user: ${userName}`);
      }
    }
    }
  };
  }
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
                {['Todd (funded)', 'Roxanne (has offer)', 'James (funding on the way', 'Jane (no offer)', 'Create new user'].map((user, index) => (
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