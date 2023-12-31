import axios from 'axios';

// Define the base URL for my backend api
const API_BASE_URL = 'http://localhost:8080/api/v1';

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Define and export a function to fetch workers data from the backend
export const getWorkers = () => api.get('/User'); 

export default api;
