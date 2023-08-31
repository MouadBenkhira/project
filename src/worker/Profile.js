import React, { useState } from 'react';
import { Form, Button, Col, Row, Modal } from 'react-bootstrap';

const ManageProfileForm = () => {
  const [editMode, setEditMode] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState('');

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleUpdateConfirmation = () => {
    setShowConfirmationModal(true);
  };

  const handleUpdate = () => {
    setShowConfirmationModal(false);
    // Add your update logic here
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
        {/* <Col md={4}>
          <div className="text-center mb-3">
            <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt="Profile"
              style={{ width: '150px', height: '150px', borderRadius: '50%' }}
            />
          </div>
        </Col> */}
        <Col md={8}>
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
