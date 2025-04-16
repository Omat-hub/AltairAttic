import React from "react";
import "./GetStarted.css";
import { Link } from "react-router-dom";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Altair Attic</span>
          <span className="secondaryText">
            Subscribe to Altair Attic Limited and Discover
            <br />
            Attractive Technology Solutions
          </span>
          <button className="button" href>
            <Link to="/Contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
