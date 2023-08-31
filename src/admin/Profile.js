// ManageProfileForm.js (Updated with Spring Boot integration)
import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Row, Modal } from 'react-bootstrap';
import axios from 'axios';

const ManageProfileForm = () => {
  const [user, setUser] = useState(null); // State to hold user data
  const [editMode, setEditMode] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/user/profile')
      .then(response => {
        setUser(response.data); // Store user data in state
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleUpdateConfirmation = () => {
    setShowConfirmationModal(true);
  };

  const handleUpdate = () => {
    setShowConfirmationModal(false);
    console.log('Profile updated:', firstName, lastName, email, password);
    setEditMode(false);
  };

  const handleCloseModal = () => {
    setShowConfirmationModal(false);
  };

  return (
    <div className="container mt-5">
      <h2>Manage Profile</h2>
      <Row>
        <Col md={4}>
          <div className="text-center mb-3">
            <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt="Profile"
              style={{ width: '150px', height: '150px', borderRadius: '50%' }}
            />
          </div>
        </Col>
        <Col md={8}>
          <Form onSubmit={handleUpdate}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                readOnly={!editMode}
                required
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                readOnly={!editMode}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={!editMode}
                required
              />
            </Form.Group>

            {editMode && (
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            )}

            {!editMode ? (
              <Button variant="primary" onClick={handleEdit}>
                Edit Profile
              </Button>
            ) : (
              <div>
                <Button variant="secondary" onClick={handleUpdateConfirmation}>
                  Update Profile
                </Button>
                <Button variant="danger" className="ms-2" onClick={() => setEditMode(false)}>
                  Cancel
                </Button>
              </div>
            )}
          </Form>
        </Col>
      </Row>

      <Modal show={showConfirmationModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Password Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to update your password? This action is irreversible.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageProfileForm;
