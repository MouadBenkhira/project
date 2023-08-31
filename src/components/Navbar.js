import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const toggleLoginForm = () => {
    setShowLoginForm((prevState) => !prevState);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    toggleLoginForm(); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
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
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <a href="/profile" className="nav-link">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={toggleLoginForm}>
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      {showLoginForm && <LoginForm onLogin={handleLogin} onClose={toggleLoginForm} />}
    </nav>
  );
};

export default Navbar;
