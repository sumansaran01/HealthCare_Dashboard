import React from 'react';
import { FaLungs, FaTooth, FaBone } from 'react-icons/fa';
import '../../styles/HealthStatusCards.css';
import healthStatusData from '../../data/heathIndicators.js';

const HealthStatusCards = () => (
  <div className="health-status-cards">
    {healthStatusData.map((item, index) => (
      <div key={index} className="health-card">
        <div className="health-card-details" style={{ color: item.color }}>
          <div className="health-card-icon">{item.icon}</div>
          <h4 className="health-card-title">{item.title}</h4>
        </div>
        <div className="health-card-content">
          <p className="health-card-date">{item.date}</p>
          <div className="health-progress">
            <div className="progress-bar" style={{ backgroundColor: item.color }}></div>
          </div>
        </div>
      </div>
    ))}
      <span>details</span>
  </div>
);

export default HealthStatusCards;
