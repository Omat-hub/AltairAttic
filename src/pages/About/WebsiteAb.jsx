import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import About from "./About";
import GetStarted from "../../components/GetStarted/GetStarted";

const WebsiteAb = () => {
  return (
    <div className="white-gradient-left">
      <About />
      <GetStarted />
    </div>
  );
};

export default WebsiteAb;
