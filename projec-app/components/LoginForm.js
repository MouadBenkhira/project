import React from 'react';

const LoginForm = ({ onClose }) => {
  // Handle form submission here
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="login-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
