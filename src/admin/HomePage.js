import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [dateState, setDateState] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const changeDate = (e) => {
    setDateState(e);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="dashboard-box">
            <h4>Worker Count</h4>
            <p className="mb-0">Total Workers: 20</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="dashboard-box">
            <h4 style={{ color: 'black' }}>Domain Settings</h4>
            <p className="mb-0">Domains: 4</p>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="dashboard-box calendar-container">
            <h4>Calendar</h4>
            <div className="calendar">
              <Calendar
                value={dateState}
                onChange={changeDate}
              />
              <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        <div className="dashboard-box clock-container">
  <h4 >Digital Clock</h4>
  <div className="clock digital-clock">
    <p className="clock-numbers">{currentTime.toLocaleTimeString()}</p>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
