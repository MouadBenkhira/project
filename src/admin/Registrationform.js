import React, { useState } from 'react';
import axios from 'axios';
import { MDBBtn } from 'mdb-react-ui-kit';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const formData = {
        firstName,
        lastName,
        email,
        password
      };

      const response = await axios.post(
        'http://localhost:8080/api/v1/auth/register',
        formData
      );

      localStorage.setItem('token', response.data.token);

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setError('');
      setSuccessMessage('Registration successful!');

      console.log('Registration successful');
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Please Add User</h1>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name:</label>
          <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name:</label>
          <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        {isLoading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <MDBBtn type="submit" disabled={isLoading} onClick={handleRegister}>
          Register
        </MDBBtn>
    </div>
  );
};

export default RegistrationForm;
