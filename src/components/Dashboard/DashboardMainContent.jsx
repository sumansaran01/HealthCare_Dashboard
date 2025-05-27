// Main dashboard layout that combines all dashboard sections together

import React from 'react';
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import { TfiAngleDown} from "react-icons/tfi";

import '../../styles/DashboardMainContent.css'; 

const DashboardMainContent = () => (
  <main className="dashboard-main">
    <div className="dashboard-header">
      <h2>Dashboard</h2>
      <div className="week-info">
        <p>This Week</p>
        <TfiAngleDown className="dropdown-icon" />
      </div>
    </div>
    
    <div className="dashboard-grid">
      <div className="left-column">
        <div className="left-column-content">
            <AnatomySection />
            <HealthStatusCards />
        </div>
        <ActivityFeed />
      </div>

      
      <div className="right-column">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  </main>
);

export default DashboardMainContent;
