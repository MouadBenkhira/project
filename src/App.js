import React, { useEffect, useState } from 'react';
import './styles.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import AuthGuard from './AuthGuard';
import WorkerDashboardPage from './worker/WorkerDashboardPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import AdminDashBoard from './admin/AdminDashBoard';
import GlassmorphismLoginForm from './components/GlassmorphismLoginForm';
import { getWorkers } from './api_config/api'; 
import NotFound from './NotFound';


const App = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetchGroups();
    checkAuthentication();
  }, []);

  const fetchGroups = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/groups');
      setGroups(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (err) {
      console.error('Error fetching data:', err);
      setLoading(false);
    }
  };

  const checkAuthentication = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email,
        password,
      });
  
      localStorage.setItem('token', response.data.token);
  
      if (response.data.role === 'ADMIN') {
        setIsAuthenticated(true);
        return '/AdminDashBoard';
      } else if (response.data.role === 'USER') {
        setIsAuthenticated(true);
        return '/WorkerDashboardPage';
      } else {
        console.log('Unknown role:', response.data.role);
        return null;
      }
    } catch (error) {
      console.error('Login failed:', error);
      return null;
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <div>
      <Routes>
  <Route path="/login" element={<GlassmorphismLoginForm onLogin={handleLogin} />} />
  <Route path="/register" element={<RegistrationForm />} />

  <Route
    path="/WorkerDashboardPage"
    element={
      <AuthGuard isAuthenticated={isAuthenticated} userRole="USER" allowedRoles={["USER"]}>
        <WorkerDashboardPage />
      </AuthGuard>
    }
  />

  <Route
    path="/AdminDashBoard"
    element={
      <AuthGuard isAuthenticated={isAuthenticated} userRole="ADMIN" allowedRoles={["ADMIN"]}>
        <AdminDashBoard />
      </AuthGuard>
    }
  />

  <Route path="/" element={<Navigate to="/login" />} />
  <Route path="/*" element={<NotFound />} />
</Routes>

      </div>
    </Router>
  );
};

export default App;
