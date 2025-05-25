import React from 'react';
import '../../styles/CalendarView.css';
import calendarData from '../../data/calendarData.js'; // Assuming you have a calendarData.js file with the required data
//import SimpleAppointmentCard from './SimpleAppointmentCard'; // Assuming you have a SimpleAppointmentCard component

const appointmentCards = [
  {
    title: 'Dentist Appointment',
    time: '11:00 AM',
    date: 'October 3',
  },
  {
    title: 'Physiotherapy Appointment',
    time: '13:00 PM',
    date: 'October 5',
  },
];

const CalendarView = () => (
  <div className="calendar-section">
    <div className="calendar-header">
      <h3>October 2021</h3>
      <div className="calendar-nav">
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
    </div>
    <div className="calendar-grid">
      <div className="calendar-days">
        {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map(day => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}
      </div>
      <div className="calendar-dates">
        {calendarData.map((date, index) => (
          <div key={index} className="calendar-date">
            <div className="date-number">{date.day}</div>
            <div className="date-appointments">
              {date.appointments.map((time, i) => (
                <div key={i} className="appointment-time">{time}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="appointment-cards">
      <div className="appointment-card dentist">
        <div className="appointment-icon">🦷</div>
        <div className="appointment-details">
          <h4>Dentist</h4>
          <p>09:00-11:00</p>
          <small>Dr Cameron Williamson</small>
        </div>
      </div>
      <div className="appointment-card physiotherapy">
        <div className="appointment-icon">💪</div>
        <div className="appointment-details">
          <h4>Physiotherapy Appointment</h4>
          <p>11:00-12:00</p>
          <small>Dr Kevin Djorgs</small>
        </div>
      </div>
    </div>
  </div>
);
export default CalendarView;
