import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import '../../styles/UpcomingSchedule.css';
import upcomingAppointments from '../../data/appointments.js';

const UpcomingSchedule = () => (
  <div className="upcoming-schedule">
    <h3>The Upcoming Schedule</h3>
    
    <div className="schedule-day">
      <h4>On Thursday</h4>
      <div className="appointment-list">
        {upcomingAppointments.thursday.map((appointment, index) => (
          <div key={index} className="simple-appointment-card" style={{ backgroundColor: appointment.color }}>
            <span className="appointment-icon">{appointment.icon}</span>
            <div className="appointment-info">
              <h5>{appointment.title}</h5>
              <p>{appointment.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="schedule-day">
      <h4>On Saturday</h4>
      <div className="appointment-list">
        {upcomingAppointments.saturday.map((appointment, index) => (
          <div key={index} className="simple-appointment-card" style={{ backgroundColor: appointment.color }}>
            <span className="appointment-icon">{appointment.icon}</span>
            <div className="appointment-info">
              <h5>{appointment.title}</h5>
              <p>{appointment.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);


export default UpcomingSchedule;
