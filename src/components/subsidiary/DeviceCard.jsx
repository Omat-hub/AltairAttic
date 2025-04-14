import React from 'react';
import './DeviceCard.css';

function DeviceCard({ name, imgSrc }) {
  return (
    <div className="device-card flexColCenter">
      <img src={imgSrc} alt={name} className="device-image" />
      <p className="device-name">{name}</p>
    </div>
  );
}

export default DeviceCard;
