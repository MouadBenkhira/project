// api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1'; // Replace with your Spring Boot backend API URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getWorkers = () => api.get('api/v1/Worker');
