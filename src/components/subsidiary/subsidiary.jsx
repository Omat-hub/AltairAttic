import React from "react";
import "./subsidiary.css";

import DeviceCard from "./DeviceCard";

const devices = [
  { name: "Smart Switches", imgSrc: "/contact.jpeg" },
  { name: "Smart Sockets", imgSrc: "/contact.jpeg" },
  { name: "Wi-Fi Camera", imgSrc: "/contact.jpeg" },
  { name: "Staircase Light", imgSrc: "/contact.jpeg" },
  { name: "Ceiling Speakers", imgSrc: "/contact.jpeg" },
  { name: "Biometric Lock", imgSrc: "/contact.jpeg" },
  { name: "Wi-Fi", imgSrc: "/contact.jpeg" },
  { name: "Smart Tags", imgSrc: "/contact.jpeg" },
  { name: "Smart Sensors", imgSrc: "/contact.jpeg" },
  { name: "Smart Doorbell", imgSrc: "/contact.jpeg" },
  { name: "Alexa Echo", imgSrc: "/contact.jpeg" },
  { name: "Alexa Show", imgSrc: "/contact.jpeg" },
];

const Subsidiary = () => {
  return (
    <div className="subsidiary">
      <div className="grid-container">
        {devices.map((device, index) => (
          <DeviceCard key={index} name={device.name} imgSrc={device.imgSrc} />
        ))}
      </div>
    </div>
  );
}

export default Subsidiary;
