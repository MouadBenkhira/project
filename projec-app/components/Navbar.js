import React, { useState } from 'react';
import LoginForm from './LoginForm'; // Import the LoginForm component

const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  // Function to toggle the visibility of the login form
  const toggleLoginForm = () => {
    setShowLoginForm((prevState) => !prevState);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3 fixed-top">
      <div className="container">
        <a href="/" className="navbar-brand">
          IMEDIA
        </a>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <a href="/news" className="nav-link">
                News
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact Us
              </a>
            </li>
            {/* Add the login link */}
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={toggleLoginForm}>
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Render the login form as a popup */}
      {showLoginForm && <LoginForm onClose={toggleLoginForm} />}
    </nav>
  );
};

export default Navbar;
