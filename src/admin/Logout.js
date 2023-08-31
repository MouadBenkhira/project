import React from 'react';
import axios from 'axios';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Logout = () => {
  const handleLogout = async () => {
    try {
      // Make a request to the backend to invalidate the token and log the user out
      await axios.post('http://localhost:8080/api/v1/User/logout');
      // Clear any user-related data from local storage or state
      localStorage.removeItem('token');
      // Redirect the user to the login page
      window.location.href = '/login';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1>Are you sure you want to log out?</h1>
          <p>You'll be redirected to the login page.</p>
          <Button variant="primary" onClick={handleLogout} className="mr-3">
            Yes, Log Me Out
          </Button>
          <Button variant="link" href="/AdminDashBoard">Cancel</Button> {/* Change to your desired route */}
        </Col>
      </Row>
    </Container>
  );
};

export default Logout;
