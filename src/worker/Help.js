import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ReportProblemForm = () => {
  const [username, setusername] = useState('');
  const [problemType, setProblemType] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', username, problemType, description);
  };

  return (
    <div className="container">
      <h2>Report a Problem</h2>
        <Form.Group controlId="username">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter user name"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="problemType">
          <Form.Label>Problem Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter problem type"
            value={problemType}
            onChange={(e) => setProblemType(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter problem description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
    </div>
  );
};

export default ReportProblemForm;
