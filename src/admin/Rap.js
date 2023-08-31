import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ReportProblemForm = () => {
  const [adminName, setAdminName] = useState('');
  const [problemType, setProblemType] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      adminname: adminName,
      problemtype: problemType,
      description: description
    };

    try {
      const response = await axios.post('http://localhost:8080/api/problems', data);
      console.log('Problem reported:', response.data);
    } catch (error) {
      console.error('Error reporting problem:', error);
    }
  };


  return (
    <div className="container">
      <h2>Report a Problem</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="adminName">
          <Form.Label>Admin Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter admin name"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
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
      </Form>
    </div>
  );
};

export default ReportProblemForm;
