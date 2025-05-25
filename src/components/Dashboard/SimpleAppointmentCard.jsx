import React from 'react';
import '../../styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appointment-card">
      <div className="icon">{icon}</div>
      <div className="details">
        <h5>{title}</h5>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
