import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import "../../styles/DashboardOverview.css"; 

const DashboardOverview = () => (
    <div className="dashboard-overview" style={{ display: "flex", gap: "2rem" }}>
        <AnatomySection />
        <HealthStatusCards />
    </div>
);

export default DashboardOverview;