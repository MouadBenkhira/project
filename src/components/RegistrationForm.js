import React, { useState } from 'react';
import axios from 'axios';
import './GlassmorphismLoginForm.css';

const GlassmorphismLoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const redirectPath = await onLogin(email, password);

      if (redirectPath) {
        window.location.href = redirectPath;
      }
    } catch (error) {
      setLoginError(true);
      setShowErrorAlert(true);
    }
  };

  const handleRememberMeClick = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="glassmorphism-login-container">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleLoginFormSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Email or Phone</label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <div className="remember-me">
          <label htmlFor="rememberMe">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            Remember Me
          </label>
        </div>

        <button type="submit">Sign In</button>
      </form>
      {showErrorAlert && (
        <div className="error-alert">
          <p className="error-message">Incorrect login credentials</p>
        </div>
      )}
    </div>
  );
};

export default GlassmorphismLoginForm;
