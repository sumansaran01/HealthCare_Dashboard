import React from 'react';
import '../../styles/ActivityFeed.css';

const ActivityFeed = () => (
  <div className="activity-section"> 
    <div className="activity-header">
      <h3>Activity</h3>
      <p className="activity-summary">3 appointments on this week</p>
    </div>
    <div className="activity-chart">
      <div className="chart-bars">
        {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div key={day} className="chart-day">
            <div className="chart-bar" style={{ height: `${Math.random() * 80 + 20}px` }}></div>
            <span className="chart-label">{day}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default ActivityFeed;
