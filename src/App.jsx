import React from 'react';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import DashboardMainContent from './components/Dashboard/DashboardMainContent.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
