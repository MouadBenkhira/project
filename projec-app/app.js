import React, { useEffect, useState } from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const App = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/Worker'); // Make sure to update the endpoint URL according to your backend API
      setGroups(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (err) {
      console.error('Error fetching data:', err);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <MainPage groups={groups} />
      <Footer />
    </>
  );
};

export default App;
