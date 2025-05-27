import React from 'react';
import '../../styles/HealthStatusCards.css';
import healthStatusData from '../../data/heathIndicators.js';
import {TfiArrowRight} from "react-icons/tfi";

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
    <div className='more-health-card'>
      <span>Details</span>
      <TfiArrowRight className="health-status-arrow" />
    </div>
  </div>
);

export default HealthStatusCards;
