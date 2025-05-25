import React from 'react';
import { FaHeart, FaLungs, FaTooth, FaBone } from 'react-icons/fa';
import '../../styles/AnatomySection.css';
import humanBodyImg from '../../assets/humanbody-placeholder.jpg'; // use a placeholder image

const AnatomySection = () => (
  <div className="anatomy-section">
    <div className="anatomy-container">
      <div className="anatomy-image">
        <img src={humanBodyImg} alt="Human Anatomy" />
        <div className="health-indicator healthy-heart">
          <FaHeart size={16} />
          <span>Healthy Heart</span>
        </div>
        <div className="health-indicator healthy-log">
          <FaBone size={16} />
          <span>Healthy Log</span>
        </div>
      </div>
    </div>
  </div>
);

export default AnatomySection;
