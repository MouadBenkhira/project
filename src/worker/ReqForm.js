import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReqForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    startDate: '',
    endDate: '',
    leaveType: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/registerrequest',
        formData
      );      console.log('Request registered:', response.data);

      setFormData({
        firstName: '',
        lastName: '',
        startDate: '',
        endDate: '',
        leaveType: '',
        description: '',
      });
    } catch (error) {
      console.error('Error registering request:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Leave Request Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="startDate" className="form-label">
              Start Date
            </label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="endDate" className="form-label">
              End Date
            </label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="leaveType" className="form-label">
            Leave Type
          </label>
          <select
            className="form-select"
            id="leaveType"
            name="leaveType"
            value={formData.leaveType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Leave Type</option>
            <option value="vacation">Vacation</option>
            <option value="sick">Sick Leave</option>
            <option value="personal">Personal Leave</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default ReqForm;
