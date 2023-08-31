import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <style>
        {`
          /* GlassmorphismLoginForm.css */
          .background {
            width: 430px;
            height: 520px;
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
          }
          
          .background .shape {
            height: 200px;
            width: 200px;
            position: absolute;
            border-radius: 50%;
          }
          
          .shape:first-child {
            background: linear-gradient(#1845ad, #23a2f6);
            left: -80px;
            top: -80px;
          }
          
          .shape:last-child {
            background: linear-gradient(to right, #ff512f, #f09819);
            right: -30px;
            bottom: -80px;
          }
          
          form {
            height: 520px;
            width: 400px;
            background-color: rgba(255, 255, 255, 0.13);
            background-color: rgba(27, 27, 27, 0.8); /* Updated background color */
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            border-radius: 10px;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
            padding: 50px 35px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          form * {
            font-family: 'Poppins', sans-serif;
            color: #ffffff;
            letter-spacing: 0.5px;
            outline: none;
            border: none;
          }
          
          form h3 {
            font-size: 32px;
            font-weight: 500;
            line-height: 42px;
            text-align: center;
            margin-bottom: 20px;
          }
          
          label {
            display: block;
            font-size: 16px;
            font-weight: 500;
            text-align: left;
            width: 100%;
          }
          
          input {
            display: block;
            height: 50px;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.07);
            border-radius: 3px;
            padding: 0 10px;
            margin-top: 8px;
            font-size: 14px;
            font-weight: 300;
            color: #ffffff;
          }
          
          ::placeholder {
            color: #e5e5e5;
          }
          
          button {
            margin-top: 30px;
            width: 100%;
            background-color: #ffffff;
            color: #080710;
            padding: 15px 0;
            font-size: 18px;
            font-weight: 600;
            border-radius: 5px;
            cursor: pointer;
          }
          
          .button {
            margin-top: 30px;
            width: 100%;
            background-color: #ffffff;
            color: #080710;
            padding: 15px 0;
            font-size: 18px;
            font-weight: 600;
            border-radius: 5px;
            cursor: pointer;
          }
          
          .button:hover {
            background-color: #f0f0f0;
          }
          
          .button:active {
            transform: translateY(2px);
          }
          
          .body {
            background-color: black;
          }
        `}
      </style>
      
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleLoginFormSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
    <h6>  Remember Me
</h6>
        <div
          className="remember-me"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            margin: '0',
            fontSize: '10px',
          }}
        >
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMeChange}
            style={{ marginRight: '0px', transform: 'scale(1.8)' }}
          />
        </div>
       
        <button type="submit" onClick={handleLoginFormSubmit}>
          Log In
        </button>
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
